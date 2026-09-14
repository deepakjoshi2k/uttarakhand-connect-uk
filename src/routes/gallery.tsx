import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { CalendarDays, ChevronLeft, ChevronRight, MapPin, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageHero, SectionHeading, meta } from '@/components/site/primitives';
import { albums } from '@/data/gallery';

export const Route = createFileRoute('/gallery')({
  head: () =>
    meta('Gallery', 'Photographs from UKDB UK gatherings, workshops and project visits, event by event.'),
  component: Gallery,
});

type Open = { album: number; photo: number } | null;

function Gallery() {
  const [filter, setFilter] = useState<string>('all');
  const [open, setOpen] = useState<Open>(null);

  const shown = filter === 'all' ? albums : albums.filter((a) => a.slug === filter);
  const current = open ? albums[open.album] : null;
  const photo = open && current ? current.photos[open.photo] : null;

  function move(step: number) {
    if (!open || !current) return;
    const next = (open.photo + step + current.photos.length) % current.photos.length;
    setOpen({ ...open, photo: next });
  }

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') move(1);
      if (e.key === 'ArrowLeft') move(-1);
    }
    addEventListener('keydown', onKey);
    return () => removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <main>
      <PageHero title="Gallery" copy="Every gathering, kept as it happened." />

      <section className="section-pad">
        <div className="container-site">
          <div className="mb-12 flex flex-wrap gap-2">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('all')}
            >
              All events
            </Button>
            {albums.map((album) => (
              <Button
                key={album.slug}
                variant={filter === album.slug ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter(album.slug)}
              >
                {album.title}
              </Button>
            ))}
          </div>

          {shown.map((album) => {
            const index = albums.indexOf(album);
            return (
              <article key={album.slug} className="mb-20 last:mb-0">
                <SectionHeading eyebrow={album.date} title={album.title} />
                <p className="-mt-8 mb-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <CalendarDays size={16} />
                    {album.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={16} />
                    {album.venue}
                  </span>
                  <span>
                    {album.photos.length} photo{album.photos.length === 1 ? '' : 's'}
                  </span>
                </p>

                <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
                  {album.photos.map((p, i) => (
                    <button
                      key={`${album.slug}-${i}`}
                      onClick={() => setOpen({ album: index, photo: i })}
                      className="card-lift mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl border bg-card"
                      aria-label={`Open photo: ${p.alt}`}
                    >
                      <img
                        src={p.src}
                        alt={p.alt}
                        loading="lazy"
                        className={`w-full object-cover ${i % 3 === 1 ? 'aspect-square' : 'aspect-[4/3]'}`}
                      />
                    </button>
                  ))}
                </div>
              </article>
            );
          })}

          {albums.length === 0 && (
            <p className="text-muted-foreground">
              Photographs from our next gathering will appear here.
            </p>
          )}
        </div>
      </section>

      {open && current && photo && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-primary/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${current.title} photo viewer`}
        >
          <Button
            size="icon"
            variant="secondary"
            onClick={() => setOpen(null)}
            className="absolute right-5 top-5"
            aria-label="Close image"
          >
            <X />
          </Button>

          {current.photos.length > 1 && (
            <>
              <Button
                size="icon"
                variant="secondary"
                onClick={() => move(-1)}
                className="absolute left-4 top-1/2 -translate-y-1/2"
                aria-label="Previous photo"
              >
                <ChevronLeft />
              </Button>
              <Button
                size="icon"
                variant="secondary"
                onClick={() => move(1)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
                aria-label="Next photo"
              >
                <ChevronRight />
              </Button>
            </>
          )}

          <figure className="max-w-5xl">
            <img
              src={photo.src}
              alt={photo.alt}
              className="max-h-[78vh] max-w-full rounded-lg object-contain"
            />
            <figcaption className="mt-4 text-center text-primary-foreground">
              <span className="block font-display text-xl">{current.title}</span>
              <span className="mt-1 block text-sm text-primary-foreground/70">
                {photo.alt} — {open.photo + 1} of {current.photos.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </main>
  );
}
