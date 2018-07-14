#!/usr/bin/env sh

set -e

cd packages/client
npm run build

cd build/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:92thunder/vue-ts-example.git master:gh-pages

cd -