# CBP Foundations Deck

A React-based slide deck framework designed to be used as a **template for AI-assisted presentations**. The visual design, color palette, typography, and layout patterns are intentionally preserved so that Claude (or another AI) can generate new slide content while staying true to the original aesthetic.

## What This Is

This repo contains a polished slide presentation built with React + Vite. It renders a fixed 1920×1080 canvas that scales to fit any screen, with keyboard navigation between slides.

The primary purpose of this repo is to serve as a **design template**. When you want to create a new presentation:

1. Clone this repo
2. Describe your content to Claude
3. Claude modifies the slides while preserving the design system

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- A terminal (Terminal on Mac, Command Prompt or PowerShell on Windows)

### Setup

```bash
# Clone the repo
git clone <repo-url>
cd cbp-foundations-deck

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open your browser to `http://localhost:5173` to see the deck. If this doesn't work, ask Claude to tell you where to view the deck. 

### Navigation

- **Arrow keys** (← →) or (↑ ↓) to move between slides
- The deck scales automatically to fit your browser window

## How to Use This as a Template with Claude

This deck is built to be modified by Claude. Here's the recommended workflow:

### 1. Open Claude Code or Claude.ai

You'll need access to [Claude](https://claude.ai) or [Claude Code](https://claude.com/claude-code).

### 2. Give Claude context about your new presentation

Tell Claude:
- What the presentation is about
- Who the audience is
- What content, sections, or talking points you want to include

Example prompt:
> "I want to create a presentation about our Q3 roadmap for an engineering audience. The deck should have an intro slide, a goals slide, 3 initiative slides, and a closing slide. Use the same visual style as this template."

### 3. Ask Claude to modify the slides

Claude can:
- Rewrite slide content (titles, body text, bullet points, stats)
- Add or remove slides
- Rearrange sections
- Update colors for a different team or brand context
- Swap out images and icons

Claude will **preserve the design system** — the dark backgrounds, typography scale, gradient accents, card layouts, and overall visual aesthetic — while changing the content to fit your needs.

### 4. Preview and iterate

Run `npm run dev` to preview changes live. Ask Claude to refine anything that doesn't look right.

## Design System Reference

When working with Claude, you can reference these design decisions to help it stay consistent:

### Colors

| Role | Value |
|------|-------|
| Dark background | `#0c021a` |
| Card surface | `rgba(231, 225, 245, 0.2)` |
| Blue accent | `#3360e9` |
| Pink accent | `#D36BA0` |
| Purple accent | `#5568E8` |
| Light text | `#f0e1f5` |
| Muted text | `rgba(255,255,255,0.7)` |

### Typography

- **Font**: Netflix Sans (falls back to Helvetica Neue, Arial)
- **Display titles**: 96–180px, tight negative letter-spacing
- **Section headers**: 48px
- **Body**: 20–32px
- **Weight range**: 100 (thin) to 700 (bold)

### Layout

- Canvas size: **1920 × 1080px** (16:9)
- Elements use absolute positioning for pixel-perfect placement
- Cards use 16–40px border radius
- Slide backgrounds are rendered separately from slide content (allowing full-bleed effects)

## Project Structure

```
src/
├── App.jsx          # Slide controller (keyboard nav, scaling, transitions)
├── App.css          # Stage and canvas layout styles
├── index.css        # Global font and reset styles
└── slides/
    ├── Slide01.jsx  # Title slide
    ├── Slide02.jsx  # Agenda
    ├── Slide03.jsx  # Stats/dashboard
    ├── ...
    └── Slide13.jsx  # Template slide (good starting point for new slides)
```

Each slide file exports:
- A **default component** — the slide content rendered inside the 1920×1080 canvas
- A **`.Background` component** — the full-viewport background (color, gradient, blobs, etc.)

## Adding a New Slide

The easiest way is to ask Claude:

> "Add a new slide after slide 5 with a title, three bullet points, and the same card layout as slide 3."

Claude will create the file, wire it into `App.jsx`, and match the existing visual style. If you want to do it manually:

1. Copy `src/slides/Slide13.jsx` as a starting point
2. Rename it (e.g., `Slide14.jsx`) and update its content
3. Import it in `src/App.jsx` and add it to the `slides` array

## Building for Production

```bash
npm run build
```

Output goes to the `/dist` folder. You can host it on any static file server (GitHub Pages, Netlify, Vercel, etc.).

To preview the production build locally:

```bash
npm run preview
```
