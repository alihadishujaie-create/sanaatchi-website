import React from 'react';
import {
  Lang,
  cargoPageMeta,
  cargoPageContent,
  HeroContent,
  SectionWithCards,
  SectionWithBody,
  StepSection,
  FaqSection,
  CtaSection
} from './cargoContent';

interface CargoPageProps {
  lang: Lang;
}

export function CargoPage({ lang }: CargoPageProps) {
  const meta = cargoPageMeta[lang];
  const content = cargoPageContent[lang];

  const dir = lang === 'en' ? 'ltr' : 'rtl';
  const htmlLang = lang === 'fa' ? 'fa-AF' : lang === 'ps' ? 'ps-AF' : 'en';

  return (
    <div lang={htmlLang} dir={dir}>
      {/* In Next.js, set head here:
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>
      */}

      <CargoHero content={content.hero} />

      <SectionWithCardsComponent section={content.integratedCargo} />
      <SectionWithCardsComponent section={content.routes} />

      <SectionWithBodyComponent section={content.cost} />
      <SectionWithBodyComponent section={content.time} />

      <StepSectionComponent section={content.steps} />
      <SectionWithBodyComponent section={content.warehouses} />
      <SectionWithBodyComponent section={content.industries} />

      <FaqSectionComponent section={content.faq} />
      <CtaSectionComponent section={content.cta} />
    </div>
  );
}

interface HeroProps {
  content: HeroContent;
}

function CargoHero({ content }: HeroProps) {
  return (
    <header className="cargo-hero">
      <h1>{content.title}</h1>
      <p>{content.subtitle}</p>
      <blockquote>{content.quote}</blockquote>
      {/* Keep your existing hero design (buttons, background, cards) here */}
    </header>
  );
}

interface SectionWithCardsProps {
  section: SectionWithCards;
}

function SectionWithCardsComponent({ section }: SectionWithCardsProps) {
  return (
    <section className="cargo-section">
      <h2>{section.heading}</h2>
      {section.intro && <p>{section.intro}</p>}
      <div className="card-grid">
        {section.cards.map((card, idx) => (
          <article key={idx} className="card">
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

interface SectionWithBodyProps {
  section: SectionWithBody;
}

function SectionWithBodyComponent({ section }: SectionWithBodyProps) {
  return (
    <section className="cargo-section">
      <h2>{section.heading}</h2>
      <p>{section.body}</p>
    </section>
  );
}

interface StepSectionProps {
  section: StepSection;
}

function StepSectionComponent({ section }: StepSectionProps) {
  return (
    <section className="cargo-section">
      <h2>{section.heading}</h2>
      <ol>
        {section.steps.map((step, idx) => (
          <li key={idx}>{step.body}</li>
        ))}
      </ol>
    </section>
  );
}

interface FaqSectionProps {
  section: FaqSection;
}

function FaqSectionComponent({ section }: FaqSectionProps) {
  return (
    <section className="cargo-section">
      <h2>{section.heading}</h2>
      {section.items.map((item, idx) => (
        <article key={idx} className="faq-item">
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </article>
      ))}
    </section>
  );
}

interface CtaSectionProps {
  section: CtaSection;
}

function CtaSectionComponent({ section }: CtaSectionProps) {
  return (
    <section className="cargo-section cta">
      <h2>{section.heading}</h2>
      <p>{section.body}</p>
      {/* Add your CTA button(s) here (WhatsApp, phone, contact form) */}
    </section>
  );
}
