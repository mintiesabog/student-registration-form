# Student Registration Form

A static website (HTML/CSS/JS) located in `Application/`, with `Application/index.html` as the entry point.

## Live website (GitHub Pages)

The site is deployed by `.github/workflows/pages.yml`, which publishes the `Application/` folder on every push to `main`.

Live website: [Open the student registration form](https://mintiesabog.github.io/student-registration-form/)

### Setup (one time)
1. Go to **Settings → Pages** in the repository.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab).

### Verify
- The "Deploy to GitHub Pages" workflow run succeeds.
- Opening the live URL shows the form; the login, registration and dashboard pages load with their styles and images.

All asset and page links are relative, so the site works under the `/student-registration-form/` sub-path.

### Run locally
```
cd Application && python3 -m http.server 8000
```
