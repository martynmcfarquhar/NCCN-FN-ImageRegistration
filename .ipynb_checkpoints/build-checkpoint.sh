#!/bin/bash

rm -rf ./_build
jupyter-book build ./
cp misaligned.html _build/html/misaligned.html
git add -A
git commit -m 'updates'
git push
ghp-import -n -p -f _build/html
