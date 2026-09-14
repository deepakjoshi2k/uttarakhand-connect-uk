import mountain from '@/assets/himalayan-community.jpg';
import celebration from '@/assets/community-celebration.jpg';
import aipan from '@/assets/aipan-heritage.jpg';
import leader from '@/assets/community-leader.jpg';

export type Photo = { src: string; alt: string };
export type Album = {
  slug: string;
  title: string;
  date: string;
  venue: string;
  cover: string;
  photos: Photo[];
};

/* ───────────────────────────────────────────────────────────────
   HOW TO ADD AN EVENT ALBUM

   1. In GitHub, open the `public` folder and create:
        public/gallery/<event-slug>/
      Upload your photos there (Add file → Upload files).
      Use lowercase names with no spaces, e.g. 01.jpg, 02.jpg.

   2. Add a block to the `albums` array below. Because the files
      live in `public`, you reference them by path — no import
      needed:

        {
          slug: 'harela-2026',
          title: 'Harela 2026',
          date: '16 July 2026',
          venue: 'Harrow Arts Centre, London',
          cover: '/gallery/harela-2026/01.jpg',
          photos: [
            { src: '/gallery/harela-2026/01.jpg', alt: 'Planting saplings together' },
            { src: '/gallery/harela-2026/02.jpg', alt: 'Children singing on stage' },
          ],
        },

   3. Always write a real `alt` description — it is what screen
      readers announce and what Google reads.

   Newest event first; that is the order the page shows.
   ─────────────────────────────────────────────────────────────── */

export const albums: Album[] = [
  {
    slug: 'community-celebration-london',
    title: 'Community celebration',
    date: '14 June 2026',
    venue: 'London',
    cover: celebration,
    photos: [
      { src: celebration, alt: 'Families applauding at an Uttarakhand cultural gathering' },
      { src: leader, alt: 'Community leader wearing a traditional shawl addressing the room' },
      { src: celebration, alt: 'Children and adults enjoying a folk performance' },
    ],
  },
  {
    slug: 'aipan-workshop',
    title: 'Aipan workshop',
    date: '3 May 2026',
    venue: 'Community hall, Birmingham',
    cover: aipan,
    photos: [
      { src: aipan, alt: 'Traditional red and white Aipan artwork with brass lamps' },
      { src: aipan, alt: 'Hands painting a rice-paste pattern on dark red board' },
    ],
  },
  {
    slug: 'partners-in-uttarakhand',
    title: 'Visiting our partners',
    date: '22 March 2026',
    venue: 'Pauri and Almora, Uttarakhand',
    cover: mountain,
    photos: [
      { src: mountain, alt: 'A village gathering among green Himalayan ridges' },
      { src: mountain, alt: 'Sunrise over an Uttarakhand hill village' },
      { src: leader, alt: 'Teacher standing outside a newly opened school library' },
    ],
  },
];

// Flat list kept so other pages (e.g. programme detail) can pull a few photos.
export const gallery = albums.flatMap((album) =>
  album.photos.map((photo) => ({ ...photo, caption: album.title })),
);
