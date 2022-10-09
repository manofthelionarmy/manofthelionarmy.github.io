git add -f dist/
deployDate=$(date +"%D")
git commit -m "deploy $deployDate"
git subtree push --prefix=dist origin gh-pages
