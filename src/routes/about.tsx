import { createFileRoute } from '@tanstack/react-router';
import { PageHero, PersonCard, SectionHeading, meta } from '@/components/site/primitives';
import { team } from '@/data/team';
import { timeline } from '@/data/timeline';

export const Route = createFileRoute('/about')({
  head: () =>
    meta('About us', 'Our story, our journey and the people who lead this community.'),
  component: About,
});

function About() {
  return (
    <main>
      <PageHero title="About us" copy="A family of families, joined by memory and service." />

      <section className="section-pad">
        <div className="container-site">
          <SectionHeading eyebrow="Our story" title="From shared tables to shared purpose" />
          <div className="grid gap-6 md:grid-cols-2">
            <p className="text-lg text-muted-foreground">
              What began as informal gatherings became a trusted circle for Uttarakhandi families
              across Britain. We celebrate what connects us and organise around what matters.
            </p>
            <p className="text-lg text-muted-foreground">
              Our work is guided by dignity, local partnership and clear stewardship. We listen
              first, act carefully and report openly.
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border bg-card p-8">
              <h3 className="text-2xl text-primary">Our mission</h3>
              <p className="mt-3 text-muted-foreground">
                To connect our diaspora and direct its knowledge, generosity and care toward lasting
                good.
              </p>
            </article>
            <article className="rounded-2xl border bg-card p-8">
              <h3 className="text-2xl text-primary">Our vision</h3>
              <p className="mt-3 text-muted-foreground">
                A confident, connected community helping Uttarakhand’s people and culture flourish.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad bg-secondary">
        <div className="container-site">
          <SectionHeading eyebrow="Our journey" title="Built one act of trust at a time" />
          <div className="mx-auto max-w-3xl border-l-2 border-brass pl-8">
            {timeline.map((t, i) => (
              <article key={t.year} className={`relative pb-10 ${i % 2 ? 'md:ml-20' : ''}`}>
                <span className="absolute -left-[2.6rem] top-1 h-4 w-4 rounded-full bg-accent ring-4 ring-secondary" />
                <p className="font-semibold text-accent">{t.year}</p>
                <h3 className="text-2xl text-primary">{t.title}</h3>
                <p className="mt-2 text-muted-foreground">{t.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <SectionHeading eyebrow="Leadership" title="Accountable to our community" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((p, i) => (
              <PersonCard key={`${p.role}-${i}`} item={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
