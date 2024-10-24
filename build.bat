rd -r .\_build
jupyter-book build .\
copy misaligned.html _build/html/misaligned.html
copy mni.html _build/html/mni.html
copy deform-x.html _build/html/deform-x.html
git add -A
git commit -m 'updates'
git push
ghp-import -n -p -f _build/html