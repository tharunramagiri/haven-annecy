# Haven Annecy — Design Concept

**This is an unofficial design concept / portfolio demo. It is NOT the live website
for Haven Annecy and is not affiliated with, endorsed by, or produced on behalf of
Haven Annecy.**

The real, live Haven Annecy website is at **https://haven-annecy.fr**, designed and
maintained independently (see their site footer for credit).

## What this is

A Next.js + Tailwind landing page built as a layout/design exercise, modeled after
[thekitchenlab.eu](https://thekitchenlab.eu)'s visual structure (hero, about, menu,
gallery, contact, footer sections).

## What's accurate vs. placeholder

- **Address, phone number, opening hours, and tagline** — sourced from the real
  public site and accurate as of the time this was built.
- **Menu items and prices** — sourced from the real site's brunch/coffee menus
  (as of Aug 2026). Haven's menu is seasonal and rotates; treat these as a snapshot,
  not a live/current source of truth. Always defer to haven-annecy.fr for current info.
- **Images** — none included. The original version of this repo referenced image
  files (`/images/hero-bg.jpg`, `/images/about.jpg`, `/images/gallery-*.jpg`) that
  were never added, which would have caused broken images / 404s in production.
  Those references have been replaced with clearly-labeled placeholders.
  **Do not scrape or reuse Haven Annecy's Instagram/website photos without their
  explicit permission** — if this concept moves forward, use licensed stock photography
  or commission original photography instead.

## Running locally

```bash
npm install
npm run build
npm start
```

## Status

Not deployed to a public/indexable domain. Treat as an internal design reference only.
