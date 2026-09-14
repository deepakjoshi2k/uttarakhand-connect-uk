import { createFileRoute, Link } from '@tanstack/react-router';
import { Check, HandHeart, HeartHandshake, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageHero, SectionHeading, meta } from '@/components/site/primitives';
import { AipanDivider } from '@/components/site/decor';
import { membershipTiers, site, volunteerRoles } from '@/data/site';
import { sponsors } from '@/data/sponsors';

export const Route = createFileRoute('/get-involved')({
  head: () =>
    meta(
      'Get involved',
      'Give, become a member or volunteer with the Uttarakhandi community in the United Kingdom.',
    ),
  component: GetInvolved,
});

const amounts = ['£10', '£25', '£50', '£100'];

const paths = [
  {
    icon: HandHeart,
    title: 'Give',
    text: 'Fund scholarships, health camps and emergency relief in the hills.',
    action: 'Make a donation',
  },
  {
    icon: Users,
    title: 'Join',
    text: 'Become a member and help shape what this community does next.',
    action: 'See membership',
  },
  {
    icon: HeartHandshake,
    title: 'Volunteer',
    text: 'Give a few hours to events, teaching, fundraising or design.',
    action: 'Find a role',
  },
];

function GetInvolved() {
  return (
    <main>
      <PageHero
        title="Get involved"
        copy="Three ways to turn belonging into something people can feel."
      />

      <section className="section-pad">
        <div className="container-site">
          <SectionHeading
            eyebrow="Where to start"
            title="Pick the way that suits you"
            copy="Every one of these matters. Most members end up doing two."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {paths.map(({ icon: Icon, title, text, action }) => (
              <article key={title} className="card-lift flex h-full flex-col rounded-2xl border bg-card p-8">
                <span className="mb-6 grid h-12 w-12 place-items-center rounded-full bg-secondary text-primary">
                  <Icon size={22} />
                </span>
                <h3 className="text-2xl text-primary">{title}</h3>
                <p className="mt-3 flex-1 text-muted-foreground">{text}</p>
                <a
                  href={title === 'Give' ? site.donateUrl : `#${title.toLowerCase()}`}
                  className="mt-6 font-semibold text-primary underline-offset-4 hover:underline"
                >
                  {action}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AipanDivider />

      <section className="section-pad bg-primary text-primary-foreground">
        <div className="container-site grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[.18em] text-brass-light">
              Donate
            </p>
            <h2>Your gift reaches a named village, not a general fund.</h2>
            <p className="mt-5 max-w-xl text-primary-foreground/80">
              We work through partners we know by name, agree the outcome before the money moves,
              and report back on what changed. Choose an amount, or give whatever is right for you.
            </p>
            <p className="mt-5 max-w-xl text-primary-foreground/80">
              If you pay UK tax, adding Gift Aid increases your donation by 25p for every £1 at no
              extra cost to you. You can tick the Gift Aid box on the donation page.
            </p>
          </div>
          <div className="rounded-2xl bg-primary-foreground p-8 text-foreground">
            <h3 className="text-xl text-primary">Choose an amount</h3>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {amounts.map((a) => (
                <Button key={a} asChild variant="outline" className="h-14 text-lg">
                  <a href={site.donateUrl} target="_blank" rel="noreferrer">
                    {a}
                  </a>
                </Button>
              ))}
            </div>
            <Button asChild size="lg" className="mt-4 w-full">
              <a href={site.donateUrl} target="_blank" rel="noreferrer">
                Give another amount
              </a>
            </Button>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Payments are handled by our donation partner. We never see your card details.
            </p>
          </div>
        </div>
      </section>

      <section id="join" className="section-pad scroll-mt-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Membership"
            title="Belong properly"
            copy="Membership runs for twelve months and funds the running of the society itself, so donations can go where they are needed."
          />
          <div className="grid items-start gap-5 lg:grid-cols-3">
            {membershipTiers.map((tier) => (
              <article
                key={tier.name}
                className={`flex h-full flex-col rounded-2xl border p-8 ${
                  tier.featured ? 'border-accent bg-card shadow-sm ring-1 ring-accent/25' : 'bg-card'
                }`}
              >
                {tier.featured && (
                  <p className="mb-4 inline-flex w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    Most chosen
                  </p>
                )}
                <h3 className="text-2xl text-primary">{tier.name}</h3>
                <p className="mt-3">
                  <strong className="font-display text-4xl text-primary">{tier.price}</strong>{' '}
                  <span className="text-sm text-muted-foreground">{tier.cadence}</span>
                </p>
                <p className="mt-3 text-muted-foreground">{tier.summary}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {tier.includes.map((line) => (
                    <li key={line} className="flex gap-3 text-sm">
                      <Check size={18} className="mt-0.5 shrink-0 text-accent" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-7" variant={tier.featured ? 'default' : 'outline'}>
                  <Link to="/contact">Join as {tier.name}</Link>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="volunteer" className="section-pad scroll-mt-24 bg-secondary">
        <div className="container-site">
          <SectionHeading
            eyebrow="Volunteer"
            title="A few hours goes a long way"
            copy="Tell us roughly what you enjoy and how much time you have. We will find something that fits."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {volunteerRoles.map((role) => (
              <article key={role.title} className="rounded-2xl border bg-card p-7">
                <h3 className="text-xl text-primary">{role.title}</h3>
                <p className="mt-2 text-muted-foreground">{role.text}</p>
              </article>
            ))}
          </div>
          <Button asChild className="mt-10">
            <Link to="/contact">Offer your time</Link>
          </Button>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <SectionHeading
            eyebrow="Partners"
            title="Organisations that back this work"
            copy="Businesses and funds who give money, space, food or expertise."
          />
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {sponsors.map((name) => (
              <li
                key={name}
                className="grid min-h-24 place-items-center rounded-2xl border bg-card px-4 text-center font-display text-lg text-primary"
              >
                {name}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-muted-foreground">
            To sponsor a programme or an event,{' '}
            <Link to="/contact" className="font-semibold text-primary underline underline-offset-4">
              get in touch
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
