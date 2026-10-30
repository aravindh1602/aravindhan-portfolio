# Aravindhan Balamurugan: Portfolio

## Run locally
1. Keep index.html, style.css and script.js in one folder.
2. Double-click index.html, or run `python3 -m http.server 8000` in the folder and open http://localhost:8000.

## Edit content
- Text, projects, skills: edit index.html (each section is commented).
- Colours: change the variables at the top of style.css (`--accent`, `--accent-2`, `--bg`).
- GitHub / LinkedIn / project links, profile photo, form service: edit the settings at the top of script.js.

## Add a profile photo
Copy a square photo (e.g. photo.jpg) next to index.html, then set `const PROFILE_IMAGE = "photo.jpg";` in script.js.

## Real email delivery
Create a free Formspree form, paste its URL into `FORM_ENDPOINT` in script.js. Until then the form opens the visitor's email app.

## Deploy free
GitHub Pages: create a repo, upload the files, then Settings > Pages > Deploy from branch (main, /root). Your site appears at https://<username>.github.io/<repo>/.
Netlify: go to app.netlify.com/drop and drag the folder in.
