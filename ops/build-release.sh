#!/bin/bash
set -euo pipefail
sha="${1:?commit required}"
[[ "$sha" =~ ^[a-f0-9]{40}$ ]]
base=/opt/yurazlab
repo="$base/repository"
release="$base/releases/$sha"
export NEXT_TELEMETRY_DISABLED=1
export npm_config_cache="$base/npm-cache"
if [[ ! -d "$repo/.git" ]]; then
  git clone --no-checkout https://github.com/yurazlab/yurazlab.git "$repo"
fi
[[ "$(git -C "$repo" remote get-url origin)" == "https://github.com/yurazlab/yurazlab.git" ]]
git -C "$repo" fetch --depth=1 origin "$sha"
git -C "$repo" checkout --detach --force "$sha"
cd "$repo"
npm ci --no-audit --no-fund
NODE_OPTIONS=--max-old-space-size=768 ./node_modules/.bin/next build --webpack
[[ ! -e "$release" ]] || { echo "Release path already exists; inspect it before retry"; exit 1; }
mkdir "$release"
cp -a .next/standalone/. "$release/"
mkdir -p "$release/.next/static" "$release/.next/cache"
cp -a .next/static/. "$release/.next/static/"
cp -a public "$release/public"
printf '%s\n' "$sha" > "$release/REVISION"
