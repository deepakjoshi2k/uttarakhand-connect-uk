import { Link } from '@tanstack/react-router';
import { X } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { announcement } from '@/data/announcement';

const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function AnnouncementModal() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const storageKey = `ukdb-announcement-${announcement.id}`;

  const dismiss = useCallback(() => {
    try {
      sessionStorage.setItem(storageKey, 'dismissed');
    } catch {
      // The dialog still closes when storage is unavailable.
    }
    setOpen(false);
  }, [storageKey]);

  useEffect(() => {
    if (!announcement.active || !announcement.image) return;

    try {
      if (sessionStorage.getItem(storageKey)) return;
    } catch {
      // Continue showing the announcement when storage is unavailable.
    }

    const timer = window.setTimeout(() => setOpen(true), 900);
    return () => window.clearTimeout(timer);
  }, [storageKey]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault();
        dismiss();
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) return;
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector));
      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      const hadTabIndex = document.body.hasAttribute('tabindex');
      const previousTabIndex = document.body.getAttribute('tabindex');
      document.body.tabIndex = -1;
      document.body.focus();
      if (hadTabIndex && previousTabIndex !== null) document.body.setAttribute('tabindex', previousTabIndex);
      else document.body.removeAttribute('tabindex');
    };
  }, [dismiss, open]);

  if (!announcement.active || !announcement.image || !open) return null;

  const poster = (
    <img
      src={announcement.image}
      alt={announcement.alt}
      className="block max-h-[85vh] w-auto max-w-[min(92vw,640px)] rounded-2xl object-contain shadow-2xl"
    />
  );

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={announcement.alt}
      className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-primary/80 p-4 backdrop-blur-sm animate-in fade-in duration-200 motion-reduce:animate-none"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) dismiss();
      }}
    >
      <div className="relative animate-in zoom-in-95 duration-200 motion-reduce:animate-none">
        {announcement.href ? (
          <Link to={announcement.href} onClick={dismiss} aria-label={`View event details: ${announcement.alt}`}>
            {poster}
          </Link>
        ) : poster}
        <Button
          ref={closeButtonRef}
          type="button"
          size="icon"
          variant="secondary"
          aria-label="Close announcement"
          onClick={dismiss}
          className="absolute -right-3 -top-3 z-10 rounded-full bg-card text-primary shadow-lg hover:bg-card/90"
        >
          <X aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}