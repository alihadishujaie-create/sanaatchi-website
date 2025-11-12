import React from 'react';
import {
  Lang,
  cargoPageMeta,
  cargoPageContent,
  HeroContent,
  ButtonPair,
  RouteButtonLabels,
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

      <InfoSectionComponent
        section={content.cost}
        sectionId="cargo-cost"
        headingId="costHeading"
        bodyId="costBody"
        illustrationId="costIllustration"
      />
      <InfoSectionComponent
        section={content.time}
        sectionId="cargo-time"
        headingId="timeHeading"
        bodyId="timeBody"
        illustrationId="timeIllustration"
      />

      <StepSectionComponent section={content.steps} />
      <InfoSectionComponent
        section={content.warehouses}
        sectionId="cargo-warehouses"
        headingId="warehousesHeading"
        bodyId="warehousesBody"
        illustrationId="warehousesIllustration"
      />
      <InfoSectionComponent
        section={content.industries}
        sectionId="cargo-industries"
        headingId="industriesHeading"
        bodyId="industriesBody"
        illustrationId="industriesIllustration"
      />

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
    <section className="cargo-overview" id="cargo-integrated">
      <div className="container">
        <h2 id="integratedHeading">{section.heading}</h2>
        {section.intro && <p id="integratedIntro">{section.intro}</p>}
        <div className="overview-points" id="integratedCards">
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
  buttons: RouteButtonLabels;
  badge: string;
}

function RoutesSection({ section, buttons, badge }: RoutesSectionProps) {
  return (
    <section className="cargo-routes-section" id="cargo-routes">
      <div className="container">
        <h2 id="routesHeading">{section.heading}</h2>
        {section.intro && <p id="routesIntro">{section.intro}</p>}
        <div className="cargo-routes-grid" id="routesCards" aria-live="polite">
          {section.cards.map((card, idx) => (
            <article key={idx} className="cargo-card">
              <span className="badge">{badge}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              {(() => {
                const pdfHref = card.pdfUrl ?? '#';
                const hasPdf = Boolean(card.pdfUrl);
                const handleUnavailable = (event: React.MouseEvent<HTMLAnchorElement>) => {
                  if (!hasPdf) {
                    event.preventDefault();
                  }
                };

                return (
                  <div className="card-buttons">
                    <a
                      href={pdfHref}
                      className="btn-primary"
                      onClick={handleUnavailable}
                      target={hasPdf ? '_blank' : undefined}
                      rel={hasPdf ? 'noopener noreferrer' : undefined}
                      aria-disabled={hasPdf ? undefined : true}
                    >
                      {buttons.view}
                    </a>
                    <a
                      href={pdfHref}
                      className="btn-secondary"
                      onClick={handleUnavailable}
                      download={hasPdf ? '' : undefined}
                      aria-disabled={hasPdf ? undefined : true}
                    >
                      {buttons.download}
                    </a>
                  </div>
                );
              })()}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

interface InfoSectionProps {
  section: SectionWithBody;
  sectionId: string;
  headingId: string;
  bodyId: string;
  illustrationId: string;
}

function InfoSectionComponent({ section, sectionId, headingId, bodyId, illustrationId }: InfoSectionProps) {
  return (
    <section className="cargo-info-section" id={sectionId}>
      <div className="container">
        <div className="info-layout">
          <div className="info-copy">
            <h2 id={headingId}>{section.heading}</h2>
            <p id={bodyId}>{section.body}</p>
          </div>
          {section.illustration ? (
            <figure className="info-illustration">
              <img src={section.illustration} alt={section.illustrationAlt || ''} id={illustrationId} loading="lazy" />
            </figure>
          ) : null}
        </div>
      </div>
    </section>
  );
}

interface StepSectionProps {
  section: StepSection;
}

function StepSectionComponent({ section }: StepSectionProps) {
  return (
    <section className="cargo-steps-section">
      <div className="container">
        <h2 id="stepsHeading">{section.heading}</h2>
        <ol id="stepsList">
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
    <section className="cargo-faq-section">
      <div className="container">
        <h2 id="faqHeading">{section.heading}</h2>
        <div className="cargo-faq-list" id="cargoFaqList" aria-live="polite">
          {section.items.map((item, idx) => (
            <article key={idx} className="cargo-faq-item">
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
          <h2 id="ctaHeading">{section.heading}</h2>
          <p id="ctaBody">{section.body}</p>
        </div>
        <div className="cta-buttons">
          <button className="btn-primary">{buttons.primary}</button>
          <button className="btn-secondary">{buttons.secondary}</button>
        </div>
      </div>
    </section>
  );
}
