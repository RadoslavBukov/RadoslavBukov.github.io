# Radoslav Bukov — Personal Portfolio 🚀

Live site: https://radoslavbukov.eu/ 🌐

![website screenshot](https://raw.githubusercontent.com/RadoslavBukov/RadoslavBukov.github.io/main/images/screenshot_art.jpg)

Short description ✨
-------------------
This repository contains a lightweight, responsive static personal portfolio website for Radoslav Bukov. It is built with HTML, CSS and JavaScript and is suitable for GitHub Pages or any static host.

Key features ⭐
-------------
- Responsive layout with a profile sidebar and navigation to About / Experience / Education / Portfolio / Resume / Contact pages.
- Dark mode toggle (preference stored with `js-cookie`).
- Project pages with screenshots and short descriptions.

Technologies 🧰
---------------
- HTML5, CSS3, JavaScript
- Bootstrap (bundle)
- FontAwesome icons
- Tiny Slider, Isotope, imagesLoaded
- js-cookie (for remembering dark-mode preference)

Repository structure 📁
----------------------
- `index.html` — main landing / about page
- `experience.html`, `education.html`, `portfolio.html`, `resume.html`, `contact.html` — content pages
- `css/` — stylesheets (`style.css`, print/media styles)
- `js/` — scripts (including `dark-mode.js`, `script.js`)
- `plugins/` — third-party libraries (bootstrap, tiny-slider, isotope, js-cookie, etc.)
- `images/` — profile image, project screenshots and favicons

Quick start (local preview) 🧪
----------------------------
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

Linting and developer tools 🛠️
-----------------------------
This repository includes `package.json` dev scripts for quick linting. Install dev dependencies and run the linters:

```powershell
# install dev dependencies
npm ci

# run all linters
npm run lint

# or run individual checks
npm run lint:html
npm run lint:js
npm run lint:css
```

Dark mode details 🌙
-------------------
- The toggle input with id `darkmode` controls dark mode. The site uses `js-cookie` to save the preference.
- Default theme behavior is implemented in `js/dark-mode.js` and the `checked` attribute on the `#darkmode` input in `index.html`.

Customizing the site 🎨
----------------------
- Edit the HTML pages directly to update text, links, projects and images.
- Update styles in `css/style.css`.
- Replace images in `images/` for project screenshots or the profile picture.

CI / Workflows ⚙️
------------------
This repository includes GitHub Actions workflows for pre-deploy checks and deployment (cPanel via FTP/SFTP):

- `.github/workflows/check.yml` — "Pre-deploy Checks"
  - Trigger: `push` on `main` branch.
  - Steps: checkout, run JS lint (eslint), HTML lint (htmlhint), CSS lint (stylelint).

- `.github/workflows/deploy.yml` — "Deploy to cPanel via FTP/SFTP"
  - Trigger: runs after the `Pre-deploy Checks` workflow completes successfully (workflow_run trigger).
  - Uses `SamKirkland/FTP-Deploy-Action` to upload files to the target server's web root.

Required repository secrets 🔑
-----------------------------
Set the following in GitHub → Settings → Secrets → Actions:

- `FTP_HOST` — hostname or IP of your FTP/SFTP server
- `FTP_USER` — username for FTP/SFTP
- `FTP_PASSWORD` — password for FTP (or leave empty when using key auth)
- `FTP_PROTOCOL` — protocol to use (`ftp` or `sftp`)

Optional / advanced 🔒
---------------------
The SamKirkland action supports private-key based SFTP. If you prefer key authentication, follow the action docs and set the appropriate secret variables (e.g. `PRIVATE_KEY`). See: https://github.com/SamKirkland/FTP-Deploy-Action

How it works (high level) 🔁
--------------------------
1. Push changes to `main` (or merge a PR into `main`).
2. `check.yml` runs linting steps to validate JS/HTML/CSS.
3. If `check.yml` completes successfully, `deploy.yml` uploads the repository files to the configured server.

Security / dev-dependencies note 🐛➡️🛡️
-------------------------------------
Dev dependencies (linters) are included in `package.json`. When installing or updating dev deps, run `npm ci` and check `npm audit`. If vulnerabilities appear in dev dependencies, you can update them with:

```powershell
npm audit fix
# or to upgrade across breaking changes
npm audit fix --force
```

Recommended repository additions ✅
--------------------------------
- `CONTRIBUTING.md` — contribution guidelines and PR workflow
- `CHANGELOG.md` — track versions and changes
- `LICENSE` — clarify reuse permissions (if you want to allow reuse)
- `docs/` or `assets/` — store high-resolution screenshots and source assets

Contact ✉️
--------
See `contact.html` for the contact email and social links.

License 📜
-------
This repository contains the personal website for Radoslav Bukov. Add a `LICENSE` file to specify reuse terms if desired.