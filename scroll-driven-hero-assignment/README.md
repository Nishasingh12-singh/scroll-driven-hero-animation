# ITZFIZZ — Scroll-Driven Hero Animation

A beginner-friendly assignment project made with **HTML, CSS, and vanilla JavaScript**.

## Files
- `index.html` — page structure and content
- `style.css` — responsive layout, styling, and initial reveal animations
- `script.js` — scroll progress, smooth car movement, progress bar, and animated counters

## Run locally
1. Download and extract the ZIP.
2. Open the folder in VS Code.
3. Open `index.html` in your browser. You can use the VS Code Live Server extension if you have it.

## Publish using GitHub Pages
1. Sign in to GitHub and create a new **public** repository, for example `scroll-driven-hero`.
2. Upload `index.html`, `style.css`, and `script.js` to the repository root (not inside another folder).
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch **main** and folder **/(root)**, then click **Save**.
6. Wait a minute or two. GitHub will show the live webpage URL on the Pages screen, usually:
   `https://YOUR-USERNAME.github.io/scroll-driven-hero/`
7. Open that URL and test on both mobile and desktop.

## Submit
Paste both links into the assignment form:
1. Live webpage link from GitHub Pages.
2. GitHub repository link, e.g. `https://github.com/YOUR-USERNAME/scroll-driven-hero`

## How the scroll animation works
JavaScript measures how far the `.scroll-stage` has moved through its scrollable distance, giving a progress value from `0` to `1`. That value controls the car's horizontal movement, slight vertical movement, rotation, and scale. `requestAnimationFrame()` plus interpolation smooths the movement. The stats count up on page load.

No React, Tailwind, GSAP, or external images are required. The only external resource is the optional Google Fonts import; fallback fonts are included.
