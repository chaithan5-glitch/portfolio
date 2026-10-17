# Chaithan's Portfolio

A one-page site built with Next.js 15, React 19 and Tailwind CSS 3.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
```

If you see a "tailwindcss as a PostCSS plugin" error, delete `node_modules` and `package-lock.json`, then run `npm install` again. This project needs Tailwind 3, not 4.

## Edit your info

Everything is in `app/page.tsx`:

- Email, GitHub and LinkedIn links are the three constants at the top.
- `skills` and `projects` are lists at the top. Add or remove lines to change them.
- About, Education, Certification and Learning are plain text further down.

## Resume

`public/resume.pdf` is your resume. Replace the file (same name) to update it.

## Deploy

Push the folder to GitHub, then import it on vercel.com and click Deploy. Optionally set `NEXT_PUBLIC_SITE_URL` to your live URL.
