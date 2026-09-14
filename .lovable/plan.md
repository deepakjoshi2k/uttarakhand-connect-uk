# Uttarakhandi Didi Bhula in UK Website

## Goal
Build a complete, polished nonprofit website that feels warm, rooted, and dignified, combining modern editorial layouts with restrained Uttarakhand-inspired ornament.

## Build plan
1. Establish the visual system in the global stylesheet: pine, terracotta, ivory, brass, and ink tokens; Fraunces and Inter typography; shared spacing, focus, card, button, motion, and accessibility rules.
2. Add typed content collections for programs, events, posts, team, gallery, sponsors, heritage, and organizational history, with realistic placeholder entries.
3. Build shared site pieces: responsive sticky header and drawer, footer and newsletter form, Aipan and ridge separators, page banner, headings, counters, and reusable content cards.
4. Build the home page in the requested order: photo-led introduction, impact, mission, programs, featured event, heritage scroller, testimonial, donation band, and newsletter signup.
5. Build dedicated About, Programs, Events, Gallery, Heritage, Community, Get Involved, and Contact pages, plus program, event, and blog detail pages.
6. Add client-side form validation, success notifications, tabbed event browsing, image lightbox, animated counters, restrained reveal effects, and reduced-motion support.
7. Add unique titles and sharing descriptions to every page, semantic structure, descriptive image text, keyboard-visible focus states, and mobile overflow safeguards.
8. Verify the full site in the browser at desktop and 375px mobile widths, including navigation, forms, tabs, lightbox, and dynamic detail links.

## Technical details
- Use TanStack Router, the project’s built-in equivalent to React Router, for type-safe navigation and scroll restoration.
- Use Tailwind CSS v4 tokens in `src/styles.css`; no legacy Tailwind config file is required or supported by this project.
- Load Fraunces and Inter through document-head font links.
- Use bundled generated imagery instead of remote placeholders so the finished site is stable and production-ready.
- Donation actions will link to a clearly marked external placeholder URL; no payment processing will be added.
