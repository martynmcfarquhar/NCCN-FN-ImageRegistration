#!/bin/bash

rm -rf ./_build
jupyter-book build ./
cp misaligned.html _build/html/misaligned.html
cp mni.html _build/html/mni.html
cp deform-x.html _build/html/deform-x.html
git add -A
git commit -m 'updates'
git push
ghp-import -n -p -f _build/html
