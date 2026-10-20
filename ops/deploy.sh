#!/bin/bash
set -euo pipefail
base=/opt/yurazlab
exec 9>"$base/state/deploy.lock"
flock -n 9 || exit 0
sha="$(runuser -u yurazlab -- git ls-remote https://github.com/yurazlab/yurazlab.git refs/heads/main | cut -f1)"
[[ "$sha" =~ ^[a-f0-9]{40}$ ]]
current=""
if [[ -L "$base/current" && -d "$base/current" ]]; then current="$(readlink -f "$base/current")"; fi
[[ "$current" != "$base/releases/$sha" ]] || exit 0
if [[ -f "$base/state/failed-sha" && "$(cat "$base/state/failed-sha")" == "$sha" ]]; then
  echo "This revision already failed; awaiting a corrected revision"; exit 0
fi
on_exit() {
  code=$?
  if [[ "$code" != 0 ]]; then
    echo "$sha" > "$base/state/failed-sha"
    systemctl stop yurazlab-candidate.service 2>/dev/null || true
  fi
}
trap on_exit EXIT
runuser -u yurazlab -- /usr/local/lib/yurazlab/build-release.sh "$sha"
release="$base/releases/$sha"
systemd-run --unit=yurazlab-candidate --collect --uid=yurazlab --property="WorkingDirectory=$release" --property=MemoryMax=512M --setenv=NODE_ENV=production --setenv=HOSTNAME=127.0.0.1 --setenv=PORT=3012 /usr/bin/node "$release/server.js"
ready=0
for n in {1..30}; do
  if curl -fsS --max-time 3 http://127.0.0.1:3012/ >/dev/null; then ready=1; break; fi
  sleep 1
done
[[ "$ready" == 1 ]]
for path in / /card /card/contact /robots.txt /sitemap.xml /opengraph-image; do
  curl -fsS --max-time 20 "http://127.0.0.1:3012$path" >/dev/null
done
systemctl stop yurazlab-candidate.service
ln -s "$release" "$base/current.new"
mv -Tf "$base/current.new" "$base/current"
if ! systemctl restart yurazlab.service; then
  [[ -z "$current" ]] || { ln -s "$current" "$base/rollback.new"; mv -Tf "$base/rollback.new" "$base/current"; systemctl restart yurazlab.service; }
  exit 1
fi
ready=0
for n in {1..20}; do
  if curl -fsS --max-time 3 http://127.0.0.1:3011/ >/dev/null; then ready=1; break; fi
  sleep 1
done
if [[ "$ready" != 1 ]]; then
  [[ -z "$current" ]] || { ln -s "$current" "$base/rollback.new"; mv -Tf "$base/rollback.new" "$base/current"; systemctl restart yurazlab.service; }
  exit 1
fi
if [[ -n "$current" ]]; then printf '%s\n' "$current" > "$base/state/previous-release"; fi
printf '%s\n' "$sha" > "$base/state/deployed-sha"
trap - EXIT
echo "Published $sha"
