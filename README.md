# Mediterranean Churros Landing Page

Premium multilingual landing page for **Mediterranean Churros**, a Spanish churros brand operating across Switzerland for markets, fairs, festivals, private events, and catering experiences.

This project is designed to present the brand as a **premium, elegant, and scalable hospitality concept**, with a strong focus on visual identity, multilingual support, and editable content.

---

## Overview

The website is built to communicate a refined brand experience rather than a simple food stall concept.

It includes:

- premium editorial-inspired design
- multilingual routing
- responsive layout
- reusable UI components
- editable content through Sanity CMS
- clean and scalable project structure

---

## Tech Stack

- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- **next-intl** for internationalization
- **Sanity CMS** for editable content
- **Framer Motion** for subtle animations
- **shadcn/ui** for selected UI primitives

---

## Features

- Multilingual support:
  - Spanish
  - German
  - French
  - Italian

- Localized routes:
  - `/es`
  - `/de`
  - `/fr`
  - `/it`

- Premium landing page sections:
  - Hero
  - Products
  - Brand / Story
  - Events / Locations
  - Testimonials
  - Contact
  - Footer

- Editable content via Sanity:
  - hero content
  - products
  - events
  - testimonials
  - contact information
  - global site settings

- Responsive design for:
  - mobile
  - tablet
  - desktop

---

## Project Goals

This project aims to provide a strong foundation for a real brand website that can grow over time.

Main goals:

- create a premium first impression
- support multilingual audiences in Switzerland
- allow non-technical content updates
- keep the codebase clean and maintainable
- stay ready for future expansion

---

## Project Structure

```bash
src/
  app/
    [locale]/
    globals.css
  components/
    layout/
    sections/
    ui/
  lib/
    i18n/
    sanity/
    utils/
  messages/
    es.json
    de.json
    fr.json
    it.json
  sanity/
    schemaTypes/
public/
