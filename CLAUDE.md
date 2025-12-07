# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Next.js 16 web application with React 19, TypeScript 5, and Tailwind CSS v4. Uses the App Router pattern.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Run production server
npm run lint     # Run ESLint
```

## Architecture

- **app/**: Next.js App Router directory containing pages, layouts, and API routes
  - `layout.tsx`: Root layout with Geist fonts and metadata
  - `page.tsx`: Home page component
  - `globals.css`: Global styles with Tailwind CSS imports and CSS variables
- **public/**: Static assets served at root path

## Key Configuration

- **TypeScript**: Strict mode enabled, path alias `@/*` maps to project root
- **ESLint**: Uses Next.js Core Web Vitals and TypeScript configs
- **Styling**: Tailwind CSS v4 with CSS custom properties for theming (`--background`, `--foreground`)
- **Dark Mode**: Supported via `prefers-color-scheme` media queries

## Conventions

- Server Components by default (App Router pattern)
- Use `@/` path alias for imports from project root
- Tailwind utility classes for styling
- Next.js Image component for optimized images
