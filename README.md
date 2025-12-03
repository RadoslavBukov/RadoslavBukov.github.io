# Radoslav Bukov — Personal Portfolio

Live site: https://radoslavbukov.eu/

![website screenshot](https://raw.githubusercontent.com/RadoslavBukov/RadoslavBukov.github.io/main/images/screenshot_art.jpg)

Short description
-----------------
This repository contains a static personal portfolio website for Radoslav Bukov. It is a lightweight, responsive site built with plain HTML, CSS and JavaScript and intended to be hosted on GitHub Pages or any static-hosting service.

Key features
------------
- Responsive layout with profile sidebar and navigation to About / Experience / Education / Portfolio / Resume / Contact pages.
- Dark mode toggle (preference stored with `js-cookie`).
- Project pages with screenshots and details.

Technologies
------------
- HTML5, CSS3, JavaScript
- Bootstrap (bundle)
- FontAwesome icons
- Tiny Slider, Isotope, imagesLoaded
- js-cookie (for remembering dark-mode preference)

Repository structure
--------------------
- `index.html` — main landing / about page
- `experience.html`, `education.html`, `portfolio.html`, `resume.html`, `contact.html` — content pages
- `css/` — stylesheets (`style.css`, print/media styles)
- `js/` — scripts (including `dark-mode.js`, `script.js`, `dark-mode.js`)
- `plugins/` — third-party libraries (bootstrap, tiny-slider, isotope, js-cookie, etc.)
- `images/` — profile image, project screenshots and favicons

Quick start (local preview)
---------------------------
Open `index.html` in your browser, or serve the directory with a simple static server.

Python (PowerShell):
```powershell
# From the repository root
python -m http.server 8000
# Open http://localhost:8000
```

Node (http-server):
```powershell
npx http-server -c-1 . -p 8000
```

Dark mode details
-----------------
- The toggle input with id `darkmode` controls dark mode. The site uses `js-cookie` to save the preference for 7 days.
- Default theme is controlled in `js/dark-mode.js` and by the `checked` attribute on the `#darkmode` input in `index.html`.

Customizing the site
--------------------
- Edit the HTML pages directly to update text, links, projects and images.
- Update styles in `css/style.css`.
- Replace images in `images/` for project screenshots or profile picture.

CI / Workflows
--------------
This repository includes two GitHub Actions workflows that automate pre-deploy checks and deployment to your hosting (cPanel via FTP/SFTP):

- `.github/workflows/check.yml` — "Pre-deploy Checks"
	- Trigger: `push` on `main` branch.
	- Steps: checkout, run JS lint (eslint), HTML lint (htmlhint), CSS lint (stylelint).
	- Notes: the workflow installs linters at runtime. For more stable runs, add a `package.json` and pin devDependencies, and add `actions/setup-node` and `npm ci` to the job.

- `.github/workflows/deploy.yml` — "Deploy to cPanel via FTP/SFTP"
	- Trigger: runs after the `Pre-deploy Checks` workflow completes successfully (workflow_run trigger).
	- Action: uses `SamKirkland/FTP-Deploy-Action` to upload the repository root to your server's `/public_html/` directory.
	- This deploy step depends on the checks workflow finishing with `success`.

Required repository secrets
--------------------------
The deploy workflow requires the following repository Secrets (set these at GitHub → Settings → Secrets → Actions):

- `FTP_HOST` — hostname or IP of your FTP/SFTP server
- `FTP_USER` — username for FTP/SFTP
- `FTP_PASSWORD` — password for FTP (or leave empty when using key auth)
- `FTP_PROTOCOL` — protocol to use (`ftp` or `sftp`)

Optional / advanced: the SamKirkland action also supports private-key based SFTP. If you prefer key authentication, follow the action docs and set the appropriate secret variables (e.g. `PRIVATE_KEY`). See: https://github.com/SamKirkland/FTP-Deploy-Action

How it works (high level)
-------------------------
1. Push changes to `main` (or merge a PR into `main`).
2. `check.yml` runs linting steps to validate JS/HTML/CSS.
3. If `check.yml` completes successfully, `deploy.yml` is triggered and uploads the repository files to the configured server.

Recommended repository additions
--------------------------------
- `CONTRIBUTING.md` — contribution guidelines and PR workflow
- `CHANGELOG.md` — track versions and changes
- `LICENSE` — clarify reuse permissions (if you want to allow reuse)
- GitHub Actions workflow — automate linting, image optimization and deployment
- Social/OpenGraph images and favicons — ensure share previews look good on social platforms
- `docs/` or `assets/` — store high-resolution screenshots and source assets

Contact
-------
See `contact.html` for the contact email and social links.

License
-------
This repository contains the personal website for Radoslav Bukov. Add a `LICENSE` file to specify reuse terms if desired.