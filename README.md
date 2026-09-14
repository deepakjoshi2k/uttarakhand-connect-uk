# Uttarakhandi Roots

Build a complete, production-quality website for [UTTARAKHANDI DIDI BHULA IN UK], a registered

501(c)(3) non-profit that connects the [UTTARAKHAND] diaspora in [UNITED KINGDOM] and

funds charitable, educational and cultural work back home. Tagline: "[ स्वर्गादपि गरीयसी ]".

Contact: [connectus@ukdbuk.com]. EIN/Reg No: [123456789]. Socials: Facebook, Instagram, YouTube.

Tone: warm, rooted, dignified. Modern layout with traditional ornament — NOT a

generic charity template and NOT a travel-agency look.

=== 1. DESIGN SYSTEM (do this first, in tailwind.config + index.css) ===

Colors as CSS variables and Tailwind tokens:

  primary  #1F3A2E (deep pine green)

  accent   #C1542B (terracotta)

  surface  #F7F3EA (warm ivory — page background)

  brass    #B8862B (fine details, underlines, icons)

  ink      #1A1A17 (body text)

Fonts via Google Fonts: headings "Fraunces" (600/700), body "Inter" (400/500).

Set generous type scale: h1 clamp(2.5rem,5vw,4rem), h2 2.25rem, body 1.0625rem,

line-height 1.7. Max content width 1200px, section padding py-20 md:py-28.

Cards: rounded-2xl, 1px border in primary at 10% opacity, soft shadow on hover.

Buttons: solid primary, and an outline variant. Never use default shadcn blue.

Motion: fade-up on scroll (IntersectionObserver, 500ms, staggered), subtle

card lift on hover. Nothing bouncy or flashy. Respect prefers-reduced-motion.

=== 2. SHARED COMPONENTS ===

- Header: sticky, transparent over the hero then solid ivory with shadow on

  scroll. Logo left, nav center, a solid "Donate" button right. Hamburger

  slide-in drawer under 1024px. Nav: Home, About, Programs, Events, Heritage,

  Community, Get Involved, Contact — with simple dropdowns, MAX 2 levels deep.

- Footer: primary-green background, 4 columns (About+logo+socials, Quick Links,

  Programs, Contact), newsletter email input above, legal strip below with

  reg number and copyright.

- AipanDivider: a thin (~48px) repeating decorative SVG band of red-and-white

  geometric folk-art pattern (dots, triangles, concentric diamonds). Used

  between major sections. Build it as inline SVG with a pattern fill.

- RidgeSeparator: layered mountain-ridgeline SVG in three opacity steps of

  primary, used as a section transition.

- SectionHeading, StatCounter (animates 0→value on scroll), ProgramCard,

  EventCard, PostCard, PersonCard, PageHero (title + breadcrumb + tinted

  photo band, reused by every inner page).

=== 3. DATA ===

Create src/data/ with typed TS files exporting arrays: programs.ts, events.ts

(upcoming + past, each with title, date, venue, image, description), posts.ts,

team.ts, gallery.ts, sponsors.ts, heritage.ts, timeline.ts. Populate with 4–6

realistic placeholder entries each. All pages must read from these files so

they can later be swapped for a database.

=== 4. PAGES AND SECTIONS ===

HOME

 1 Hero: full-bleed mountain/community photo, dark gradient overlay, h1, one

   subline, buttons "Donate" + "Become a Member". Static, no carousel.

 2 Impact strip: 4 StatCounters — years active, member families, students

   supported, funds raised.

 3 Mission: two columns, text left with a brass underline accent, photo right.

 4 Programs: 3–4 ProgramCards in a grid, "View all programs" link.

 5 Featured upcoming event with date badge and RSVP button.

 6 Heritage teaser: horizontally scrolling cards (folk art, dance, festivals,

   cuisine, sacred sites) — the visually richest band on the page.

 7 Testimonial: one quote, large, with photo and attribution.

 8 Donate band: full-width terracotta, tax-deduction line, EIN, big button.

 9 Newsletter signup.

ABOUT — story, mission/vision cards, vertical alternating TIMELINE, leadership

 grid of PersonCards, governance/bylaws block, and a TRANSPARENCY section with

 downloadable annual reports and tax status.

PROGRAMS — index grid + a reusable detail page route /programs/:slug with

 overview, impact stats, photo gallery, and a support-this-program CTA.

EVENTS — tabbed Upcoming / Past, card grid, plus a Gallery page with a masonry

 image grid and lightbox. Event detail route with an RSVP form.

HERITAGE — the most editorial page: intro, then Culture (dance & music,

 festivals, food), Places (two columns, Garhwal / Kumaon style regions), and

 People (notable figures). Use AipanDivider between each block.

COMMUNITY — blog index with PostCards and a /blog/:slug detail page,

 newsletter archive list, talent showcase.

GET INVOLVED — three side-by-side paths (Donate / Member / Volunteer), a

 membership tier comparison table, a sponsors logo wall, and a donation panel

 with preset amounts (buttons only — do NOT build payment processing; link out

 to an external donation URL placeholder).

CONTACT — form (name, email, subject, message) with validation and a toast on

 submit, contact details, socials, embedded map placeholder.

=== 5. RULES ===

- React Router for all routes, ScrollToTop on navigation.

- Mobile-first; test every section at 375px. No horizontal overflow.

- Semantic HTML, alt text on every image, visible focus rings, AA contrast.

- Per-page <title> and meta description.

- Use high-quality Unsplash Himalayan mountain, village, festival and portrait

  photos as placeholders.

- Forms are UI-only with client-side validation and success toasts.

- Keep components small and in separate files.

Build the design system and shared components first, then Home in full, then

the remaining pages using PageHero for consistency.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://uttarakhand-connect-uk.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a59a8c46-9a64-4939-9d24-d0b7f548726d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
