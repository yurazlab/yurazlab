param([string]$message = "Update site")
git add .
git commit -m $message
git push
