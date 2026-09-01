# Portfolio (Next.js)

This is a minimal Next.js portfolio scaffold.

Quick start:

```powershell
npm install
npm run dev
```

Edit the pages in `pages/` and styles in `styles/`.

Images
-
Place images in the `public/images/` folder and reference them with absolute paths, e.g. `/images/profile.svg` or `/images/my-project.png`.

Examples
-
The homepage uses `components/Hero.js` and `components/ProjectCard.js` which load images from `public/images/`.

Upload UI
-
A simple upload UI is available at `/admin/upload` which saves files to `public/uploads/` during local development. Use it by running the dev server and visiting that path. Uploaded files will be accessible at `/uploads/<filename>`.

Notes
-
- The upload handler writes files into `public/uploads/` and is intended for local development. For production you should replace it with a proper storage backend (S3, Cloud Storage) and secure authentication.

