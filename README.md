# Happy Birthday, Shiva ♡

A responsive, static birthday-surprise website made with HTML, CSS, and vanilla JavaScript. The site has no build step or runtime dependencies and is ready to host on Vercel.

## Project contents

- `index.html` — page content and metadata
- `style.css` — responsive styling and reduced-motion support
- `script.js` — interactive messages, letter, and celebration effects
- `photos/` — the six memory photos used by the gallery
- `vercel.json` — security and photo-cache response headers

## Deploy on Vercel

1. Put this project in a Git repository and push it to GitHub, GitLab, or Bitbucket.
2. In Vercel, choose **Add New → Project** and import that repository.
3. Keep the framework preset as **Other**. Leave the build command and output directory empty/default; this project is served directly from its root.
4. Deploy. Vercel will redeploy automatically when you push future changes to the connected repository.

You can also deploy the project directory with the Vercel CLI using `vercel` for a preview deployment and `vercel --prod` for production.

## Before publishing

- Check that all six files in `photos/` are the intended images. File names are case-sensitive on hosting platforms.
- Preview the site locally by opening `index.html` in a browser, or use a local static-file server.
- Update the page title, birthday copy, or photo captions in `index.html` if you want to personalize them further.
