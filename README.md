# Tamzode Technology

A responsive single-page company website built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide icons. It includes accessible project detail dialogs, a services FAQ, a FormSubmit contact form, and consultation requests through the contact form.

## Requirements

- Node.js 20.19+ (or 22.12+)
- npm

## Get started

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal. Use `Ctrl+C` to stop the server.

## Production build

```bash
npm run build
npm run preview
```

The static production files are written to `dist/`. Deploy that directory to any static host that supports single-page sites. The site uses in-page anchors and does not require a server-side router.

## Customize

- Update company copy, services, projects, and navigation in `src/App.tsx`.
- Adjust colors, typography, responsive layouts, and motion fallbacks in `src/styles.css`.
- Change page title, description, theme color, and font loading in `index.html`.
- Replace `public/favicon.svg` with the final company mark when available.
- Project cards use cropped Payroll, Eythu, and BillFlow AI logo assets. The current BillFlow crop is `public/billflow-ai-reference.png`; vector logo variations are in `public/billflow-ai-*.svg`.
- Add verified social/contact links in the footer when the company has URLs to publish.
- `ContactForm` sends enquiries to `tamzodetechnology@gmail.com` through FormSubmit's AJAX endpoint. FormSubmit requires a one-time inbox activation on first use; confirm its activation email before relying on delivery. It retains submissions for up to 30 days. Do not use this form for sensitive information.
- Consultation requests use the contact form until an online calendar URL is available; the sender can include preferred times in their message.

## Notes

The project cards and detail dialogs state each project's current status explicitly. No testimonials, client names, team profiles, or performance metrics have been invented. Footer social icons remain unlinked until official profiles are provided. Google Fonts are loaded remotely; the layout falls back to system sans-serif if unavailable.
