<div align="center">
  <img src="public/icon-192.png" alt="NyayMitra logo" width="96" height="96" />

  <h1>NyayMitra</h1>

  <p><strong>Know your rights. Understand the law. Take action.</strong></p>

  <p>
    A modern legal-rights assistant for India that turns common legal protections,
    procedures, helplines, and document templates into clear, practical guidance.
  </p>
</div>

## What Is NyayMitra?

NyayMitra is a free, public-facing legal information web app designed to help people in India understand their rights without needing to read dense legal language first. It organizes important protections across everyday situations such as employment disputes, tenant issues, consumer complaints, police interactions, cyber crime, women safety, family law, education, health, government services, banking, and traffic rules.

The goal is not to replace a lawyer. The goal is to make the first step easier: help users identify what rights may apply, what law or rule is relevant, what documents may be needed, which action steps to take, and where to find official help or emergency support.

NyayMitra combines a searchable rights database, category browsing, legal document templates, PDF generation, emergency helplines, traffic fine lookup, language translation, and PWA support into one accessible Next.js application.

## Why It Matters

Many people do not act on legal problems because the process feels confusing, expensive, or intimidating. NyayMitra gives users a structured starting point:

- Understand legal rights in plain language.
- Search by real-life problem instead of legal jargon.
- Follow step-by-step action guidance.
- Generate basic complaint, notice, or application documents.
- Find emergency numbers and legal-aid resources quickly.
- Check traffic penalties and relevant sections before paying fines.
- Use the app on mobile with installable PWA support.

## Who It Is For

- Citizens who need quick, understandable legal information.
- Students, workers, tenants, consumers, patients, and families facing common legal issues.
- NGOs, volunteers, legal-aid workers, and civic-tech teams who need a simple rights-awareness interface.
- Developers or contributors who want to extend a data-driven legal information platform.

## Features

- Plain-language legal rights directory with category filters and detail pages.
- Global search across rights, templates, and helplines through `/api/search`.
- Legal document templates with live preview and PDF download.
- Emergency helplines and legal-aid directory.
- Traffic fines and RTO rules lookup.
- Category pages for employment, tenant, consumer, women safety, police, cyber crime, family, student, government services, health, and banking/finance topics.
- PWA metadata, icons, service worker caching, and install prompt.
- Dark/light theme support with `next-themes`.
- Language selector powered by Google Translate.
- Nearest police station lookup using browser geolocation and Google Maps embed.
- Vercel Analytics integration.

## Application Modules

### Legal Rights Directory

The `/rights` section lists all rights and protections in one searchable directory. Users can filter by category, search by keywords, and expand individual rights for a fast overview. Each right can include a description, plain-language explanation, relevant law, severity level, action steps, required documents, penalties, and related template links.

### Category-Based Guidance

The `/categories/[slug]` pages group rights by life situation rather than by legal code. Current categories include employment, tenant rights, consumer protection, women safety, police and criminal rights, cyber crime, family law, student rights, government services, healthcare, and banking/finance.

### Search Engine

The `/search` page and `/api/search` route search across rights, legal templates, and helplines. This makes the app useful for natural queries such as "unpaid salary", "FIR registration", "security deposit", "UPI fraud", or "defective product".

### Legal Templates And PDF Generation

The `/templates` section provides ready-to-use legal document templates. Template detail pages detect placeholder fields, collect user input, show a live preview, and generate downloadable PDFs using `jsPDF`.

### Emergency Helplines

The `/helplines` section highlights critical emergency contacts and support directories. It also includes information about free legal aid through NALSA and provides a nearest police station tool using browser geolocation.

### Traffic Fines Lookup

The `/traffic` page helps users search traffic offenses, official fine amounts, law sections, and recommended next steps.

### PWA And Mobile Experience

The app includes a manifest, service worker, install prompt, app icons, responsive navigation, and bottom mobile navigation so it can behave like a lightweight mobile app.

## Tech Stack

- Next.js `16.2.6`
- React `19.2.4`
- Tailwind CSS `4`
- Lucide React and React Icons
- jsPDF and html2canvas for document generation
- next-themes for theme state
- Vercel Analytics

## Project Structure

```text
src/
  app/
    api/search/          Search API route
    categories/[slug]/   Category-specific rights pages
    helplines/           Emergency and support contacts
    rights/              Rights directory and detail pages
    search/              Global search page
    templates/           Template browser and PDF generator
    traffic/             Traffic fines lookup
  components/            Shared UI components
  data/                  Rights, templates, helplines, categories, traffic fines
public/
  manifest.json          PWA manifest
  sw.js                  Service worker
  icon-*.png             App icons
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

```bash
npm run dev
```

Runs the app in development mode.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Starts the production server after a build.

```bash
npm run lint
```

Runs ESLint.

## Content Model

Legal content is data-driven:

- `src/data/categories.js` defines the main topic areas.
- `src/data/rights/*.js` contains rights grouped by category.
- `src/data/templates.js` contains legal document templates and placeholder fields.
- `src/data/helplines.js` contains emergency and support contact entries.
- `src/data/traffic.js` contains traffic offenses, penalties, sections, and suggested action.
- `src/data/index.js` exports helper functions for lookup and search.

At the time of this README update, the local data includes 108 rights, 5 document templates, 10 helplines, and 10 traffic fine entries.

## Data-Driven Design

Most of the product experience is powered by local structured data rather than a remote database. This keeps the app simple to run, easy to deploy, and straightforward to extend. Adding a new right usually means adding a new object inside the correct `src/data/rights/*.js` file and ensuring it has the fields expected by the UI.

The shared helpers in `src/data/index.js` handle:

- Fetching all rights.
- Fetching rights by category.
- Finding a single right by ID.
- Searching rights, templates, helplines, and traffic fines.
- Exporting category, template, helpline, and traffic datasets for pages/components.

## User Safety And Scope

NyayMitra is intentionally written as a legal information tool, not a legal advice service. The UI includes a disclaimer that tells users the content is general information and that specific legal situations should be discussed with a qualified lawyer.

This distinction is important because laws, local procedures, police practice, court process, and eligibility for remedies can vary by state, facts, dates, documents, and urgency.

## Important Notes

NyayMitra provides general legal information only. It is not a substitute for advice from a qualified lawyer. Users should consult a legal professional for specific disputes, filings, or urgent legal decisions.

Some browser features require user permission or external services:

- Nearest police station lookup requires geolocation permission.
- Translation uses Google Translate scripts.
- Maps are loaded through Google Maps embeds.

## Deployment

The app can be deployed on any platform that supports Next.js. For Vercel:

1. Connect the repository to Vercel.
2. Use the default Next.js build settings.
3. Build command: `npm run build`.
4. Start command: `npm run start` when needed by the host.
