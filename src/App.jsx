import { useState } from 'react';
import './App.css';
import ukFlag from './assets/uk_flag.png';
import cambodiaFlag from './assets/cambodia_flag.png';
import siteContent from './data/siteContent';
import useLanguage from './context/useLanguage';
import img from './assets/img-home-right.png';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceMenuOpen, setServiceMenuOpen] = useState(false);
  const [pricingGroup, setPricingGroup] = useState('crm');
  const { language, toggleLanguage } = useLanguage();

  const closeMenu = () => {
    setMenuOpen(false);
    setServiceMenuOpen(false);
  };

  const getText = (value) => {
    if (language === 'kh') {
      return value.kh;
    }

    return value.en;
  };

  const navTitle = siteContent.nav.logo.title.text;
  const languageButtonLabel = language === 'en' ? 'English' : 'Khmer';
  const languageButtonImage = language === 'en' ? ukFlag : cambodiaFlag;
  const heroTitle = getText(siteContent.hero.title);
  const heroSubtitle = getText(siteContent.hero.subtitle);
  const heroDescription = getText(siteContent.hero.description);
  const heroCta = getText(siteContent.hero.cta);
  const clientDescription = getText(siteContent.hero.clients.description);
  const aboutTitle = getText(siteContent.about.title);
  const aboutDescription = getText(siteContent.about.description);
  const serviceTitle = getText(siteContent.service.title);
  const serviceSubtitle = getText(siteContent.service.subtitle);
  const serviceDescription = getText(siteContent.service.description);
  const serviceAccTitle = getText(siteContent.service.accTitle);
  const pricingTitle = getText(siteContent.pricing.title);
  const pricingSubtitle = getText(siteContent.pricing.subtitle);
  const pricingDescription = getText(siteContent.pricing.description);
  const pricingActions = siteContent.pricing.actions;
  const pricingPlans = siteContent.pricing.plans.filter((plan) => plan.group === pricingGroup);
  const faqTitle = getText(siteContent.faq.title);
  const faqHeading = getText(siteContent.faq.heading);
  const faqDescription1 = getText(siteContent.faq.description1);
  const footerTitle = getText(siteContent.footer.title);
  const footerDescription = getText(siteContent.footer.description);
  const footerSpan = getText(siteContent.footer.span);
  const footerContactTitle = getText(siteContent.footer.contactTitle);
  const openExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleLinkClick = (menu) => (event) => {
    if (menu.external) {
      event.preventDefault();
      openExternalLink(menu.link);
    }

    closeMenu();
  };

  return (
    <>
      <div className="nav-bar">
        <div className="nav-left">
          <img src={siteContent.nav.logo.img} className="logo" alt={navTitle} />
          <h3>{navTitle}</h3>
          <div className="nav-links">
            {siteContent.nav.menus.map((menu) => (
              menu.dropdown ? (
                <div className="nav-dropdown" key={getText(menu.label)}>
                  <button
                    type="button"
                    className="nav-link nav-dropdown-toggle"
                    onClick={() => setServiceMenuOpen((current) => !current)}
                    aria-expanded={serviceMenuOpen}
                    aria-controls="service-dropdown-menu"
                  >
                    {getText(menu.label)}
                    <svg
                      className="nav-dropdown-caret"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      focusable="false"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  <div className={`nav-dropdown-menu ${serviceMenuOpen ? 'open' : ''}`} id="service-dropdown-menu">
                    {menu.submenu.map((item) => (
                      <a
                        key={item.link}
                        href={item.link}
                        className="nav-dropdown-link"
                        onClick={closeMenu}
                      >
                        {getText(item.label)}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={menu.link}
                  href={menu.link}
                  className="nav-link"
                  onClick={handleLinkClick(menu)}
                  target={menu.external ? '_blank' : undefined}
                  rel={menu.external ? 'noopener noreferrer' : undefined}
                >
                  {getText(menu.label)}
                </a>
              )
            ))}
          </div>
        </div>
        <div className="nav-right">
          <button
            type="button"
            className={`nav-menu-button ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen((current) => !current)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <button
            type="button"
            className="language-toggle"
            onClick={toggleLanguage}
            aria-label={`Switch language to ${language === 'en' ? 'Khmer' : 'English'}`}
          >
            <img src={languageButtonImage} alt={languageButtonLabel} />
          </button>
        </div>
      </div>

      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`} id="mobile-navigation">
        {siteContent.nav.menus.map((menu) => (
          menu.dropdown ? (
            <div className="mobile-nav-group" key={getText(menu.label)}>
              <button
                type="button"
                className="mobile-nav-link mobile-nav-dropdown-toggle"
                onClick={() => setServiceMenuOpen((current) => !current)}
                aria-expanded={serviceMenuOpen}
              >
                <span>{getText(menu.label)}</span>
                <svg
                  className="nav-dropdown-caret"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  focusable="false"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div className={`mobile-nav-submenu ${serviceMenuOpen ? 'open' : ''}`}>
                {menu.submenu.map((item) => (
                  <a
                    key={item.link}
                    href={item.link}
                    className="mobile-nav-sublink"
                    onClick={closeMenu}
                  >
                    {getText(item.label)}
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <a
              key={menu.link}
              href={menu.link}
              className="mobile-nav-link"
              onClick={handleLinkClick(menu)}
              target={menu.external ? '_blank' : undefined}
              rel={menu.external ? 'noopener noreferrer' : undefined}
            >
              {getText(menu.label)}
            </a>
          )
        ))}
        <button type="button" className="mobile-language-toggle" onClick={toggleLanguage}>
          <img src={languageButtonImage} alt={languageButtonLabel} />
          <span>{languageButtonLabel}</span>
        </button>
      </div>

      <div className="main-page">
        <div className="Home-content" id="Home-content">
          <div className="content-left" data-aos="fade-right">
            <h1>{heroTitle}</h1>
            <h1>{heroSubtitle}</h1>
            <p>{heroDescription}</p>
            <div className="hero-actions">
              <button className="cta-button">{heroCta}</button>
              <button type="button" className="cta-button cta-button--secondary">
                Learn More ↗
              </button>
            </div>
            <div className="client">
              <p>{clientDescription}</p>
              <div className="client-logos">
                {siteContent.hero.clients.logos.map((client) => (
                  <img key={client.text} src={client.img} alt={client.text} />
                ))}
              </div>
            </div>
          </div>
          <div className="content-right" data-aos="fade-left">
            <img src={img} alt="" />
          </div>
        </div>

        <div className="About-content" id="About-content">
          <div className="about-left" data-aos="fade-up">
            <img src={siteContent.about.banner.img} alt={siteContent.about.banner.text} />
          </div>
          <div className="about-right" data-aos="fade-left">
            <span>{aboutTitle}</span>
            <h2>{aboutDescription}</h2>
            {siteContent.about.points.map((point, index) => (
              <p key={`${getText(point.title)}-${index}`}>
                {getText(point.detail)}
              </p>
            ))}
          </div>
        </div>

        <div className="Service-content" id="Service-content">
          <span className="section-badge" data-aos="fade-up">{serviceTitle}</span>
          <p data-aos="fade-up" data-aos-delay="100">
            {serviceDescription}
          </p>
          <button type="button" className="service-chip" id="service-cmd" data-aos="fade-up" data-aos-delay="80">
            {serviceSubtitle}
          </button>
          <div className="service-layout">
            {siteContent.service.cards.map((card, index) => {
              const delay = index * 120;

              return (
                <div className="service-card" data-aos="zoom-in" data-aos-delay={delay} key={getText(card.title)}>
                  <div className="service-icon">
                    <img src={card.icon} alt={getText(card.title)} />
                  </div>
                  <h3>{getText(card.title)}</h3>
                  <p>{getText(card.description)}</p>
                </div>
              );
            })}
          </div>
          <button type="button" className="service-chip" id="service-acc" data-aos="fade-up" data-aos-delay="120">
            {serviceAccTitle}
          </button>
          <div className="service-layout service-layout--secondary">
            {siteContent.service.accCards.map((card, index) => {
              const delay = index * 120;

              return (
                <div className="service-card" data-aos="zoom-in" data-aos-delay={delay} key={getText(card.title)}>
                  <div className="service-icon">
                    <img src={card.icon} alt={getText(card.title)} />
                  </div>
                  <h3>{getText(card.title)}</h3>
                  <p>{getText(card.description)}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="Pricing-content" id="Pricing-content">
          <span className="section-badge" data-aos="fade-up">{pricingTitle}</span>
          <h4 data-aos="fade-up" data-aos-delay="100">{pricingSubtitle}</h4>
          <p data-aos="fade-up" data-aos-delay="150">{pricingDescription}</p>
          <div className="pricing-actions" data-aos="fade-up" data-aos-delay="180">
            {pricingActions.map((action) => (
              <button
                key={action.target}
                type="button"
                className={`pricing-action ${pricingGroup === action.target ? 'is-active' : ''}`}
                onClick={() => setPricingGroup(action.target)}
                aria-pressed={pricingGroup === action.target}
              >
                {getText(action)}
              </button>
            ))}
          </div>
          <div className="card-layout">
            {pricingPlans.map((plan, index) => {
              const delay = index * 120;
              const pricingButtonLabel = language === 'kh' ? 'ចាប់ផ្តើម' : 'Get Started';
              const isDark = plan.variant === 'dark';

              return (
                <div
                  className={`pricing-card ${isDark ? 'pricing-card--dark' : 'pricing-card--light'}`}
                  data-aos="flip-left"
                  data-aos-delay={delay}
                  key={getText(plan.title)}
                  id={plan.anchor}
                >
                  {isDark ? (
                    <div className="pricing-card__split">
                      <div className="pricing-card__content">
                        <h2>{getText(plan.title)}</h2>
                        <p className="pricing-copy">{getText(plan.description)}</p>
                        <div className="pricing-price">
                          <span className="pricing-amount">{plan.price}$</span>
                          <span className="pricing-period">/ month</span>
                        </div>
                        <button type="button" className="pricing-button">
                          {pricingButtonLabel}
                        </button>
                      </div>
                      <div className="pricing-card__aside">
                        {plan.featureHeading ? <span className="pricing-feature-heading">{getText(plan.featureHeading)}</span> : null}
                        <ul className="pricing-features">
                          {plan.features.map((feature) => (
                            <li key={feature.en}>{getText(feature)}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h2>{getText(plan.title)}</h2>
                      <p className="pricing-copy">{getText(plan.description)}</p>
                      <div className="pricing-price">
                        <span className="pricing-amount">{plan.price}$</span>
                        <span className="pricing-period">/ month</span>
                      </div>
                      <button type="button" className="pricing-button">
                        {pricingButtonLabel}
                      </button>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="FAQ">
          <div className="faq-header" data-aos="fade-up">
            <span className="faq-eyebrow">{faqTitle}</span>
            <h2>{faqHeading}</h2>
            <p>{faqDescription1}</p>
          </div>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            {siteContent.faq.accordion.map((item, index) => {
              const headingId = `flush-heading-${index}`;
              const collapseId = `flush-collapse-${index}`;
              const accordionTitle = getText(item.title);
              const accordionDetail = getText(item.detail);

              return (
                <div className="accordion-item" key={headingId}>
                  <h2 className="accordion-header" id={headingId}>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${collapseId}`}
                      aria-expanded="false"
                      aria-controls={collapseId}
                    >
                      <p>{accordionTitle}</p>
                    </button>
                  </h2>
                  <div
                    id={collapseId}
                    className="accordion-collapse collapse"
                    aria-labelledby={headingId}
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">{accordionDetail}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="Testimonuals">
          <div className="testimonials-header">
            <span className="testimonials-eyebrow">{siteContent.Testimonuals.eyebrow}</span>
            <h2>{siteContent.Testimonuals.heading}</h2>
            <p>{siteContent.Testimonuals.subheading}</p>
          </div>

          <div className="testimonials-grid">
            {siteContent.Testimonuals.items.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <img src={t.img} alt={t.name} className="testimonial-avatar" />
                  <div>
                    <p className="testimonial-name">{t.name}</p>
                    <p className="testimonial-role">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="Footer" data-aos="fade-up">
          <div className="footer-left">
              <div className="Qs">
              <h2><span>{footerTitle}</span></h2>
              <p>{footerDescription}</p>
              </div>
            </div>
          <div className="footer-right">
            {siteContent.footer.menuGroups.map((group) => (
              <div id={group.id} className="footer-group" key={group.id}>
                <h3>{getText(group.title)}</h3>
                {group.items.map((item) => (
                  <a key={item.en} href={item.href}>{getText(item)}</a>
                ))}
              </div>
            ))}
            <div id="Contact">
              <h3>{footerContactTitle}</h3>
              {siteContent.footer.contacts.map((contact) => (
                <a href={contact.href} key={contact.text}>
                  <img src={contact.img} alt={contact.text} />
                  {contact.text}
                </a>
              ))}
            </div>
          </div>
          <div className="footer-bottom">
          <span>{footerSpan}</span>
          </div>
      </div>
    </>
  );
}

export default App;
