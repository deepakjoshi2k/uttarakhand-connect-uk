import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Facebook, Instagram, Mail, MapPin, Youtube } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { PageHero, SectionHeading, meta } from '@/components/site/primitives';
import { site } from '@/data/site';

export const Route = createFileRoute('/contact')({
  head: () =>
    meta('Contact', 'Email us or send a message — membership, volunteering, sponsorship or anything else.'),
  component: Contact,
});

const subjects = [
  'Membership',
  'Volunteering',
  'Donations and Gift Aid',
  'Sponsorship',
  'Events',
  'Something else',
];

const field =
  'h-12 w-full rounded-md border bg-background px-4 text-base outline-offset-3 placeholder:text-muted-foreground';

type Errors = Partial<Record<'name' | 'email' | 'message' | 'consent', string>>;

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: subjects[0],
    message: '',
    consent: false,
  });
  const [errors, setErrors] = useState<Errors>({});

  function set<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const next: Errors = {};
    if (form.name.trim().length < 2) next.name = 'Please tell us your name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'That email address does not look right.';
    if (form.message.trim().length < 10) next.message = 'A little more detail helps us reply well.';
    if (!form.consent) next.consent = 'We need your permission to reply by email.';

    if (Object.keys(next).length) {
      setErrors(next);
      toast.error('Check the highlighted fields and try again.');
      return;
    }

    toast.success('Message sent. We reply within three days.');
    setForm({ name: '', email: '', subject: subjects[0], message: '', consent: false });
  }

  return (
    <main>
      <PageHero
        title="Contact"
        copy="Questions, offers of help, or just saying hello — all welcome."
      />

      <section className="section-pad">
        <div className="container-site grid gap-14 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <SectionHeading eyebrow="Send a message" title="Write to us" />
            <form onSubmit={submit} noValidate className="grid gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold text-primary">
                    Your name
                  </label>
                  <input
                    id="name"
                    value={form.name}
                    onChange={(e) => set('name', e.target.value)}
                    maxLength={80}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={field}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-2 text-sm text-destructive">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-primary">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => set('email', e.target.value)}
                    maxLength={255}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={field}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-2 text-sm text-destructive">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-primary">
                  What is it about?
                </label>
                <select
                  id="subject"
                  value={form.subject}
                  onChange={(e) => set('subject', e.target.value)}
                  className={field}
                >
                  {subjects.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-primary">
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={7}
                  value={form.message}
                  onChange={(e) => set('message', e.target.value)}
                  maxLength={2000}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className="w-full rounded-md border bg-background p-4 text-base outline-offset-3 placeholder:text-muted-foreground"
                />
                {errors.message && (
                  <p id="message-error" className="mt-2 text-sm text-destructive">
                    {errors.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="consent" className="flex items-start gap-3 text-sm">
                  <input
                    id="consent"
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => set('consent', e.target.checked)}
                    className="mt-1 h-4 w-4 shrink-0 accent-[var(--accent)]"
                  />
                  <span className="text-muted-foreground">
                    I am happy for UKDB UK to hold my details and reply to this message. We never
                    share them with anyone else.
                  </span>
                </label>
                {errors.consent && (
                  <p className="mt-2 text-sm text-destructive">{errors.consent}</p>
                )}
              </div>

              <Button type="submit" size="lg" className="justify-self-start">
                Send message
              </Button>
            </form>
          </div>

          <aside className="h-fit rounded-2xl border bg-card p-8">
            <h2 className="text-2xl text-primary">Reach us directly</h2>
            <div className="mt-3 h-0.5 w-16 bg-brass" />

            <a
              href={`mailto:${site.email}`}
              className="mt-8 flex items-start gap-4 text-primary hover:underline"
            >
              <Mail size={20} className="mt-0.5 shrink-0 text-accent" />
              <span>
                <span className="block text-sm font-semibold">Email</span>
                <span className="text-muted-foreground">{site.email}</span>
              </span>
            </a>

            <p className="mt-6 flex items-start gap-4">
              <MapPin size={20} className="mt-0.5 shrink-0 text-accent" />
              <span>
                <span className="block text-sm font-semibold text-primary">Where we are</span>
                <span className="text-muted-foreground">
                  United Kingdom
                  <br />
                  Serving our diaspora nationwide
                </span>
              </span>
            </p>

            <div className="mt-8 border-t pt-6">
              <p className="text-sm font-semibold text-primary">Follow along</p>
              <div className="mt-4 flex gap-4">
                <a href={site.social.facebook} aria-label="Facebook" className="text-primary hover:text-accent">
                  <Facebook />
                </a>
                <a href={site.social.instagram} aria-label="Instagram" className="text-primary hover:text-accent">
                  <Instagram />
                </a>
                <a href={site.social.youtube} aria-label="YouTube" className="text-primary hover:text-accent">
                  <Youtube />
                </a>
              </div>
            </div>

            <p className="mt-8 rounded-lg bg-secondary p-4 text-sm text-muted-foreground">
              We are a volunteer-run society, so replies usually take two or three days. For anything
              urgent at an event, email us with “urgent” in the subject line.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
