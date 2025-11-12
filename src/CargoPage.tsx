import React from 'react';
import {
  Lang,
  cargoPageMeta,
  cargoPageContent,
  HeroContent,
  ButtonPair,
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

      <CargoHero content={content.hero} buttons={content.heroButtons} />

      <IntegratedSection section={content.integratedCargo} />
      <RoutesSection section={content.routes} buttons={content.routeButtons} badge={content.routeBadge} />

      <SectionWithBodyComponent section={content.cost} />
      <SectionWithBodyComponent section={content.time} />

      <StepSectionComponent section={content.steps} />
      <SectionWithBodyComponent section={content.warehouses} />
      <SectionWithBodyComponent section={content.industries} />

      <FaqSectionComponent section={content.faq} />
      <CtaSectionComponent section={content.cta} buttons={content.ctaButtons} />
    </div>
  );
}

interface HeroProps {
  content: HeroContent;
  buttons: ButtonPair;
}

function CargoHero({ content, buttons }: HeroProps) {
  return (
    <header className="cargo-hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>{content.title}</h1>
            <p>{content.subtitle}</p>
            <blockquote>{content.quote}</blockquote>
            <div className="hero-buttons">
              <button className="btn-primary">{buttons.primary}</button>
              <button className="btn-secondary">{buttons.secondary}</button>
            </div>
          </div>
          {/* Preserve existing search/cards area from implementation when integrating */}
        </div>
      </div>
    </header>
  );
}

const INTEGRATED_ICONS = ['fas fa-route', 'fas fa-boxes', 'fas fa-user-shield', 'fas fa-clock'];

interface IntegratedSectionProps {
  section: SectionWithCards;
}

function IntegratedSection({ section }: IntegratedSectionProps) {
  return (
    <section className="cargo-overview">
      <div className="container">
        <h2>{section.heading}</h2>
        {section.intro && <p>{section.intro}</p>}
        <div className="overview-points">
          {section.cards.map((card, idx) => {
            const iconClass = INTEGRATED_ICONS[idx] ?? INTEGRATED_ICONS[INTEGRATED_ICONS.length - 1];
            return (
              <article key={idx} className="overview-card">
                <i className={iconClass} aria-hidden="true" />
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface RoutesSectionProps {
  section: SectionWithCards;
  buttons: ButtonPair;
  badge: string;
}

function RoutesSection({ section, buttons, badge }: RoutesSectionProps) {
  return (
    <section className="cargo-routes-section">
      <div className="container">
        <h2>{section.heading}</h2>
        {section.intro && <p>{section.intro}</p>}
        <div className="cargo-routes-grid">
          {section.cards.map((card, idx) => (
            <article key={idx} className="cargo-card">
              <span className="badge">{badge}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <div className="card-buttons">
                <a href="#" className="btn-primary">{buttons.primary}</a>
                <a href="#" className="btn-secondary">{buttons.secondary}</a>
              </div>
            </article>
          ))}
        </div>
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
      <div className="container">
        <h2>{section.heading}</h2>
        <p>{section.body}</p>
      </div>
    </section>
  );
}

interface StepSectionProps {
  section: StepSection;
}

function StepSectionComponent({ section }: StepSectionProps) {
  return (
    <section className="cargo-section">
      <div className="container">
        <h2>{section.heading}</h2>
        <ol>
          {section.steps.map((step, idx) => (
            <li key={idx}>{step.body}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}

interface FaqSectionProps {
  section: FaqSection;
}

function FaqSectionComponent({ section }: FaqSectionProps) {
  return (
    <section className="cargo-section">
      <div className="container">
        <h2>{section.heading}</h2>
        <div className="cargo-faq-list">
          {section.items.map((item, idx) => (
            <article key={idx} className="faq-item">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

interface CtaSectionProps {
  section: CtaSection;
  buttons: ButtonPair;
}

function CtaSectionComponent({ section, buttons }: CtaSectionProps) {
  return (
    <section className="cargo-cta">
      <div className="container">
        <div>
          <h2>{section.heading}</h2>
          <p>{section.body}</p>
        </div>
        <div className="cta-buttons">
          <button className="btn-primary">{buttons.primary}</button>
          <button className="btn-secondary">{buttons.secondary}</button>
        </div>
      </div>
    </section>
  );
}
