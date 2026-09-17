# Event announcement popup

## Build
- Add a small announcement configuration file with the active state, poster identifier, public image path, alt text, and optional event link.
- Convert the uploaded poster to a web-ready JPEG under `public/announcements/` so future posters can be replaced by uploading a file and editing the identifier and path.
- Add a centered, image-only announcement dialog after a short delay and mount it once in the shared site layout.

## Behavior and accessibility
- Show once per browser session using guarded `sessionStorage` access only after mounting.
- Dismiss by close button, Escape, backdrop click, or poster navigation; never auto-dismiss.
- Focus the close button, trap Tab within the dialog, restore focus to the page, and lock background scrolling while open.
- Preserve every poster's aspect ratio without cropping, with reduced-motion support.

## Verification
- Check delayed opening, each dismissal method, session suppression, poster navigation, keyboard focus, scroll locking, and desktop/mobile sizing in the live preview.
