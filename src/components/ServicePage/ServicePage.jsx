import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData, serviceCategories } from '../../data/services';
import { projectsData } from '../../data/projects';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  ChevronDown, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Compass
} from 'lucide-react';
import './ServicePage.css';

export default function ServicePage() {
  const { slug } = useParams();
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Scroll to top when slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setOpenFaqIndex(0);
  }, [slug]);

  const service = servicesData[slug];

  if (!service) {
    return (
      <div className="service-not-found-view container">
        <div className="not-found-card">
          <span className="badge-pill">Service Not Found</span>
          <h1 className="not-found-title">Looking for a specific capability?</h1>
          <p className="not-found-desc">
            The requested service link could not be located. Explore our core services below.
          </p>
          <div className="available-services-grid">
            {Object.values(servicesData).map(svc => (
              <Link key={svc.slug} to={`/services/${svc.slug}`} className="fallback-service-card">
                <span className="fallback-cat">{svc.category}</span>
                <span className="fallback-name">{svc.title}</span>
                <ArrowRight size={16} />
              </Link>
            ))}
          </div>
          <Link to="/services" className="btn btn-primary" style={{ marginTop: '2rem' }}>
            View All Services Overview
          </Link>
        </div>
      </div>
    );
  }

  // Find relevant projects for this service
  const relevantProjects = projectsData.filter(proj => 
    proj.services.some(s => s.toLowerCase().includes(service.title.toLowerCase().split(' ')[0])) ||
    proj.category.toLowerCase().includes(service.categorySlug.split('-')[0])
  ).slice(0, 2);

  return (
    <article className="service-page-wrapper">
      {/* 1. Hero Header Section */}
      <section className="service-hero-section">
        <div className="container service-hero-container">
          <div className="service-meta-top">
            <span className="badge-pill">
              <Sparkles size={13} />
              <span>{service.category}</span>
            </span>
            <span className="service-hero-code">0{Object.keys(servicesData).indexOf(slug) + 1} / 08</span>
          </div>

          <h1 className="service-hero-title">{service.title}</h1>
          <p className="service-hero-subtitle">{service.subtitle}</p>

          {/* Quick Metrics / Highlights */}
          {service.highlights && (
            <div className="service-highlights-row">
              {service.highlights.map((h, i) => (
                <div key={i} className="highlight-pill-item">
                  <span className="highlight-label">{h.label}:</span>
                  <span className="highlight-val">{h.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Hero Visual */}
          <div className="service-hero-visual-frame">
            <img 
              src={service.heroImage} 
              alt={service.title} 
              className="service-hero-img"
            />
            <div className="service-hero-img-overlay"></div>
          </div>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="service-overview-section">
        <div className="container">
          <div className="service-overview-grid">
            <div className="overview-label-col">
              <span className="section-tag-text">THE OVERVIEW</span>
              <h2 className="overview-heading">Intentional Presence.</h2>
            </div>
            <div className="overview-body-col">
              <p className="overview-lead-paragraph">{service.description}</p>
              <p className="overview-secondary-text">{service.overview}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What We Do / Capabilities Grid */}
      <section className="service-capabilities-section">
        <div className="container">
          <div className="section-header-block">
            <div className="section-tag">
              <span className="section-tag-dot"></span>
              <span className="section-tag-text">WHAT WE DO</span>
            </div>
            <h2 className="section-title">Core Disciplines & Scope</h2>
          </div>

          <div className="capabilities-cards-grid">
            {service.whatWeDo.map((item, idx) => (
              <div key={idx} className="capability-card">
                <h3 className="capability-item-title">{item.title}</h3>
                <p className="capability-item-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Deliverables Section */}
      <section className="service-deliverables-section">
        <div className="container">
          <div className="deliverables-box">
            <div className="deliverables-header">
              <div className="section-tag">
                <span className="section-tag-dot"></span>
                <span className="section-tag-text">TANGIBLE OUTCOMES</span>
              </div>
              <h2 className="deliverables-title">Deliverables & Standards</h2>
              <p className="deliverables-subtitle">
                Clear assets, systems, and guidelines transferred directly to your possession.
              </p>
            </div>

            <div className="deliverables-list-grid">
              {service.deliverables.map((deliv, i) => (
                <div key={i} className="deliverable-list-item">
                  <CheckCircle2 size={18} className="deliverable-check-icon" />
                  <span className="deliverable-text">{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Process Roadmap */}
      <section className="service-process-section">
        <div className="container">
          <div className="section-header-block">
            <div className="section-tag">
              <span className="section-tag-dot"></span>
              <span className="section-tag-text">METHODOLOGY</span>
            </div>
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle">
              A structured roadmap from discovery to execution and compound growth.
            </p>
          </div>

          <div className="process-timeline-grid">
            {service.process.map((step, i) => (
              <div key={i} className="process-step-item">
                <div className="process-step-badge">{step.step}</div>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-detail">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why It Matters */}
      <section className="service-impact-section">
        <div className="container">
          <div className="impact-statement-banner">
            <span className="impact-quote-mark">“</span>
            <div className="impact-content-block">
              <span className="impact-label">WHY THIS MATTERS</span>
              <p className="impact-statement-text">{service.whyItMatters}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Relevant Work */}
      {relevantProjects.length > 0 && (
        <section className="service-relevant-work-section">
          <div className="container">
            <div className="section-header-split">
              <div>
                <div className="section-tag">
                  <span className="section-tag-dot"></span>
                  <span className="section-tag-text">CASE STUDIES</span>
                </div>
                <h2 className="section-title">Selected Work</h2>
              </div>
              <Link to="/work" className="btn btn-secondary">
                <span>View Full Portfolio</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relevant-projects-grid">
              {relevantProjects.map(proj => (
                <div key={proj.id} className="relevant-project-card">
                  <div className="relevant-proj-img-wrap">
                    <img src={proj.coverImage} alt={proj.title} />
                  </div>
                  <div className="relevant-proj-info">
                    <span className="relevant-proj-cat">{proj.clientType}</span>
                    <h3 className="relevant-proj-title">{proj.title}</h3>
                    <p className="relevant-proj-desc">{proj.shortDescription}</p>
                    <Link to="/work" className="relevant-proj-link">
                      <span>Explore Project</span>
                      <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. Frequently Asked Questions */}
      <section className="service-faq-section">
        <div className="container">
          <div className="faq-layout-grid">
            <div className="faq-intro-col">
              <div className="section-tag">
                <span className="section-tag-dot"></span>
                <span className="section-tag-text">CLARIFICATIONS</span>
              </div>
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="faq-intro-desc">
                Clear answers regarding scope, commitment, and our collaborative workflow.
              </p>
              <div className="faq-support-box">
                <p>Have a custom requirement or discrete timeline?</p>
                <Link to="/contact" className="faq-direct-enquiry">
                  <span>Speak with our team</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="faq-accordions-col">
              {service.faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className={`faq-accordion-item ${openFaqIndex === idx ? 'is-open' : ''}`}
                >
                  <button 
                    className="faq-question-btn"
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? -1 : idx)}
                    aria-expanded={openFaqIndex === idx}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown size={18} className="faq-icon" />
                  </button>
                  {openFaqIndex === idx && (
                    <div className="faq-answer-panel">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Final Dedicated CTA */}
      <section className="service-cta-banner-section">
        <div className="container">
          <div className="service-cta-card">
            <div className="cta-accent-glow"></div>
            <span className="badge-pill">INITIATE ENGAGEMENT</span>
            <h2 className="service-cta-headline">
              Ready to elevate your {service.title.toLowerCase()}?
            </h2>
            <p className="service-cta-subtext">
              We begin every relationship with a focused conversation to understand your goals and current presence.
            </p>
            <div className="service-cta-actions">
              <Link 
                to={`/contact?service=${slug}`} 
                className="btn btn-primary cta-large-btn"
              >
                <span>{service.ctaText}</span>
                <ArrowUpRight size={18} />
              </Link>
              <Link to="/services" className="btn btn-secondary cta-large-btn">
                <span>Browse All Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
