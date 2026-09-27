import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { serviceCategories } from '../../data/services';
import { 
  ArrowUpRight, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  User, 
  ShoppingBag, 
  Camera, 
  Share2 
} from 'lucide-react';
import './Services.css';

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getPillarIcon = (id) => {
    switch (id) {
      case 'personal-presence':
        return <User size={24} className="cat-icon" />;
      case 'ecommerce':
        return <ShoppingBag size={24} className="cat-icon" />;
      case 'visual-media':
        return <Camera size={24} className="cat-icon" />;
      case 'influencer-marketing':
        return <Share2 size={24} className="cat-icon" />;
      default:
        return null;
    }
  };

  const personalPillar = serviceCategories.find(c => c.id === 'personal-presence');
  const otherPillars = serviceCategories.filter(c => c.id !== 'personal-presence');

  return (
    <div className="services-overview-page">
      {/* Header Banner */}
      <section className="services-header-hero">
        <div className="container">
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            <span className="section-tag-text">SERVICE VERTICALS</span>
          </div>
          <h1 className="services-main-title">
            Digital Presence Architecture.
          </h1>
          <p className="services-main-subtitle">
            We structure our capabilities across four defined pillars, prioritizing individual authority, brand storytelling, cinematic media, and creator alignment.
          </p>
        </div>
      </section>

      {/* Flagship Dominant: Personal Presence (50%) */}
      {personalPillar && (
        <section className="services-dominant-section">
          <div className="container">
            <div className="dominant-category-card">
              <div className="dominant-meta-row">
                <div className="dominant-title-block">
                  <div className="dominant-icon-box">
                    {getPillarIcon(personalPillar.id)}
                  </div>
                  <div>
                    <span className="dominant-pill-badge">{personalPillar.percentage}</span>
                    <h2 className="dominant-category-title">{personalPillar.title}</h2>
                  </div>
                </div>
                <p className="dominant-tagline">{personalPillar.tagline}</p>
              </div>

              <div className="dominant-services-grid">
                {personalPillar.services.map((svc) => (
                  <Link 
                    key={svc.slug} 
                    to={`/services/${svc.slug}`} 
                    className="dominant-service-item"
                  >
                    <div className="item-header-row">
                      <h3 className="item-title">{svc.title}</h3>
                      <div className="item-arrow-wrap">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                    <p className="item-desc">{svc.shortDesc}</p>
                    <span className="item-explore-label">
                      <span>Explore Discipline</span>
                      <ArrowRight size={13} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Secondary Pillars Grid */}
      <section className="services-secondary-section">
        <div className="container">
          <div className="secondary-categories-grid">
            {otherPillars.map((pillar) => (
              <div key={pillar.id} className="secondary-pillar-box">
                <div className="secondary-box-header">
                  <div className="secondary-icon-frame">
                    {getPillarIcon(pillar.id)}
                  </div>
                  <div className="secondary-header-text">
                    <span className="secondary-pct-tag">{pillar.percentage}</span>
                    <h2 className="secondary-cat-title">{pillar.title}</h2>
                  </div>
                </div>

                <p className="secondary-cat-desc">{pillar.tagline}</p>

                <div className="secondary-services-stack">
                  {pillar.services.map((svc) => (
                    <Link 
                      key={svc.slug} 
                      to={`/services/${svc.slug}`} 
                      className="secondary-svc-row"
                    >
                      <div>
                        <h4 className="secondary-svc-name">{svc.title}</h4>
                        <p className="secondary-svc-brief">{svc.shortDesc}</p>
                      </div>
                      <ArrowUpRight size={16} className="secondary-row-arrow" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="services-bottom-cta container">
        <div className="services-cta-box">
          <span className="badge-pill">ENGAGEMENT BRIEFING</span>
          <h2 className="services-cta-heading">Unsure which capability aligns with your goals?</h2>
          <p className="services-cta-copy">
            We evaluate your current presence, audience profile, and objectives before recommending a tailored scope.
          </p>
          <Link to="/contact" className="btn btn-primary cta-btn-lg">
            <span>Schedule Discovery Call</span>
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
