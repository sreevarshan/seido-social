import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroScroll from '../../components/HeroScroll/HeroScroll';
import PresenceDiagram from '../../components/PresenceDiagram/PresenceDiagram';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';
import PortfolioModal from '../../components/PortfolioModal/PortfolioModal';
import { projectsData, projectCategories } from '../../data/projects';
import { 
  ArrowUpRight, 
  ArrowRight, 
  User, 
  ShoppingBag, 
  Camera, 
  Share2, 
  Check, 
  ShieldCheck, 
  Sparkles,
  Building,
  Layers,
  Award
} from 'lucide-react';
import './Home.css';

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState("ALL");
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const filteredProjects = selectedFilter === "ALL" 
    ? projectsData.slice(0, 4) 
    : projectsData.filter(p => p.category === selectedFilter).slice(0, 4);

  return (
    <div className="home-page">
      {/* 1. Hero Section with Scroll Animation */}
      <HeroScroll />

      {/* 2. What We Do Section (4 Pillars with Personal Presence Dominance) */}
      <section className="section-what-we-do">
        <div className="container">
          <div className="section-header-block">
            <div className="section-tag">
              <span className="section-tag-dot"></span>
              <span className="section-tag-text">OUR CAPABILITIES</span>
            </div>
            <h2 className="section-title">WHAT WE DO</h2>
            <p className="section-subtitle">
              We help individuals and businesses build a stronger digital presence through strategy, content, technology and media.
            </p>
          </div>

          <div className="pillars-showcase-grid">
            {/* PILLAR 01: PERSONAL PRESENCE — Flagship Dominant Card */}
            <div className="pillar-card pillar-flagship">
              <div className="pillar-card-glow"></div>
              <div className="pillar-card-content">
                <div className="pillar-meta">
                  <span className="pillar-number">PILLAR 01</span>
                  <span className="badge-pill">50% Core Focus</span>
                </div>
                
                <h3 className="pillar-title">PERSONAL PRESENCE</h3>
                <p className="pillar-desc">
                  Building digital presence around people. We curate narrative identity, manage public reputation, and produce high-caliber thought leadership for executives, founders, and leaders.
                </p>

                <div className="pillar-subservices-list">
                  <Link to="/services/personal-branding" className="pillar-service-link">
                    <span className="subservice-bullet"></span>
                    <span className="subservice-title">Personal Branding</span>
                    <ArrowUpRight size={14} />
                  </Link>
                  <Link to="/services/social-media-management" className="pillar-service-link">
                    <span className="subservice-bullet"></span>
                    <span className="subservice-title">Social Media Management</span>
                    <ArrowUpRight size={14} />
                  </Link>
                  <Link to="/services/political-personal-branding" className="pillar-service-link">
                    <span className="subservice-bullet"></span>
                    <span className="subservice-title">Political Personal Branding</span>
                    <ArrowUpRight size={14} />
                  </Link>
                  <Link to="/services/content-creation" className="pillar-service-link">
                    <span className="subservice-bullet"></span>
                    <span className="subservice-title">Content Creation</span>
                    <ArrowUpRight size={14} />
                  </Link>
                  <div className="pillar-service-tag-static">
                    <span className="subservice-bullet"></span>
                    <span className="subservice-title">Digital Reputation & Governance</span>
                  </div>
                </div>

                <div className="pillar-card-action">
                  <Link to="/services/personal-branding" className="btn btn-primary">
                    <span>Explore Personal Presence</span>
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="pillar-flagship-media">
                <img 
                  src="/assets/personal-branding-hero.jpg" 
                  alt="Personal Presence Flagship" 
                  className="pillar-flagship-img"
                />
              </div>
            </div>

            {/* Other 3 Verticals in a Balanced Row */}
            <div className="secondary-pillars-grid">
              {/* PILLAR 02: E-COMMERCE */}
              <div className="pillar-card secondary-pillar-card">
                <div className="pillar-meta">
                  <span className="pillar-number">PILLAR 02</span>
                  <span className="badge-subtle">20% Vertical</span>
                </div>
                <h3 className="pillar-title">E-COMMERCE</h3>
                <p className="pillar-desc">
                  Shopify storefronts engineered for product businesses requiring speed, elegant merchandising, and high conversion.
                </p>

                <div className="pillar-tags-cluster">
                  <span className="pillar-chip">Shopify Development</span>
                  <span className="pillar-chip">Product Setup</span>
                  <span className="pillar-chip">Payment Gateways</span>
                  <span className="pillar-chip">Shipping Integration</span>
                </div>

                <Link to="/services/shopify-development" className="pillar-inline-cta">
                  <span>Explore Shopify</span>
                  <ArrowRight size={15} />
                </Link>
              </div>

              {/* PILLAR 03: VISUAL MEDIA */}
              <div className="pillar-card secondary-pillar-card">
                <div className="pillar-meta">
                  <span className="pillar-number">PILLAR 03</span>
                  <span className="badge-subtle">20% Vertical</span>
                </div>
                <h3 className="pillar-title">VISUAL MEDIA</h3>
                <p className="pillar-desc">
                  Cinematic aerial drone photography and videography for real estate, construction, and property showcases.
                </p>

                <div className="pillar-tags-cluster">
                  <span className="pillar-chip">Drone Photography</span>
                  <span className="pillar-chip">Drone Videography</span>
                  <span className="pillar-chip">Real Estate</span>
                  <span className="pillar-chip">Construction Documentation</span>
                </div>

                <Link to="/services/drone-photography" className="pillar-inline-cta">
                  <span>Explore Visual Media</span>
                  <ArrowRight size={15} />
                </Link>
              </div>

              {/* PILLAR 04: INFLUENCER MARKETING */}
              <div className="pillar-card secondary-pillar-card">
                <div className="pillar-meta">
                  <span className="pillar-number">PILLAR 04</span>
                  <span className="badge-subtle">10% Vertical</span>
                </div>
                <h3 className="pillar-title">INFLUENCER MARKETING</h3>
                <p className="pillar-desc">
                  Strategic creator partnerships connecting products with authentic communities through curated campaign alignment.
                </p>

                <div className="pillar-tags-cluster">
                  <span className="pillar-chip">Influencer Discovery</span>
                  <span className="pillar-chip">Campaign Strategy</span>
                  <span className="pillar-chip">Creator Collaboration</span>
                  <span className="pillar-chip">Campaign Management</span>
                </div>

                <Link to="/services/influencer-marketing" className="pillar-inline-cta">
                  <span>Explore Influencer Marketing</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Who We Work With Section */}
      <section className="section-who-we-work-with">
        <div className="container">
          <div className="section-header-block">
            <div className="section-tag">
              <span className="section-tag-dot"></span>
              <span className="section-tag-text">TARGET AUDIENCE</span>
            </div>
            <h2 className="section-title">WHO WE WORK WITH</h2>
            <p className="section-subtitle">
              We partner with forward-thinking individuals and organizations across defined sectors.
            </p>
          </div>

          <div className="audience-cards-grid">
            <div className="audience-card">
              <div className="audience-icon-wrap">
                <User size={22} />
              </div>
              <span className="audience-category-pill">50% Priority</span>
              <h3 className="audience-group-title">PUBLIC FIGURES & LEADERS</h3>
              <p className="audience-group-desc">
                Politicians, institutional leaders, and public personalities establishing, improving, and safeguarding their digital presence and reputation.
              </p>
            </div>

            <div className="audience-card">
              <div className="audience-icon-wrap">
                <Sparkles size={22} />
              </div>
              <span className="audience-category-pill">Personal Presence</span>
              <h3 className="audience-group-title">PROFESSIONALS & CREATORS</h3>
              <p className="audience-group-desc">
                Executives, founders, and specialized practitioners seeking to translate domain expertise into recognizable authority.
              </p>
            </div>

            <div className="audience-card">
              <div className="audience-icon-wrap">
                <ShoppingBag size={22} />
              </div>
              <span className="audience-category-pill">20% Priority</span>
              <h3 className="audience-group-title">E-COMMERCE OWNERS</h3>
              <p className="audience-group-desc">
                D2C brands and product businesses requiring bespoke Shopify website development, catalog setup, and frictionless checkouts.
              </p>
            </div>

            <div className="audience-card">
              <div className="audience-icon-wrap">
                <Camera size={22} />
              </div>
              <span className="audience-category-pill">20% Priority</span>
              <h3 className="audience-group-title">REAL ESTATE & CONSTRUCTION</h3>
              <p className="audience-group-desc">
                Developers, builders, property owners, and construction firms requiring aerial drone photography, videography, and milestone documentation.
              </p>
            </div>

            <div className="audience-card audience-card-span">
              <div className="audience-icon-wrap">
                <Share2 size={22} />
              </div>
              <span className="audience-category-pill">10% Priority</span>
              <h3 className="audience-group-title">PRODUCT BUSINESSES</h3>
              <p className="audience-group-desc">
                Brands seeking creator-led promotion, influencer discovery, and authentic audience integration campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Flagship Personal Branding Section */}
      <section className="section-flagship-branding">
        <div className="container">
          <div className="flagship-layout-grid">
            <div className="flagship-editorial-visual">
              <img 
                src="/assets/personal-branding-hero.jpg" 
                alt="You Are The Brand" 
                className="flagship-editorial-img"
              />
              <div className="flagship-quote-badge">
                <span className="quote-mark">“</span>
                <p>Your digital presence should reflect who you are, what you do and what you want people to remember.</p>
              </div>
            </div>

            <div className="flagship-text-content">
              <div className="section-tag">
                <span className="section-tag-dot"></span>
                <span className="section-tag-text">FLAGSHIP SERVICE</span>
              </div>
              <h2 className="section-title">YOU ARE THE BRAND.</h2>
              <p className="flagship-intro-text">
                Your digital presence should reflect who you are, what you do and what you want people to remember.
              </p>

              <div className="flagship-pillars-stack">
                <div className="flagship-pillar-row">
                  <div className="flagship-step-index">01</div>
                  <div className="flagship-step-info">
                    <h4>POSITIONING</h4>
                    <p>Define how the person wants to be perceived in their industry.</p>
                  </div>
                </div>

                <div className="flagship-pillar-row">
                  <div className="flagship-step-index">02</div>
                  <div className="flagship-step-info">
                    <h4>CONTENT</h4>
                    <p>Build a consistent, high-substance content identity.</p>
                  </div>
                </div>

                <div className="flagship-pillar-row">
                  <div className="flagship-step-index">03</div>
                  <div className="flagship-step-info">
                    <h4>SOCIAL MEDIA</h4>
                    <p>Manage and maintain active presence across key networks.</p>
                  </div>
                </div>

                <div className="flagship-pillar-row">
                  <div className="flagship-step-index">04</div>
                  <div className="flagship-step-info">
                    <h4>VISUAL IDENTITY</h4>
                    <p>Create a recognizable visual language and aesthetic standard.</p>
                  </div>
                </div>

                <div className="flagship-pillar-row">
                  <div className="flagship-step-index">05</div>
                  <div className="flagship-step-info">
                    <h4>DIGITAL REPUTATION</h4>
                    <p>Maintain a consistent and professional public-facing presence.</p>
                  </div>
                </div>
              </div>

              <div className="flagship-action-box">
                <Link to="/services/personal-branding" className="btn btn-primary">
                  <span>Explore Personal Branding</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Political Personal Branding Section */}
      <section className="section-political-branding">
        <div className="container">
          <div className="political-card-wrapper">
            <div className="political-media-side">
              <img 
                src="/assets/political-branding-hero.jpg" 
                alt="Political Leadership Presence" 
                className="political-img"
              />
            </div>

            <div className="political-content-side">
              <div className="section-tag">
                <span className="section-tag-dot"></span>
                <span className="section-tag-text">SPECIALIZED SERVICE</span>
              </div>
              <h2 className="section-title">POLITICAL PERSONAL BRANDING</h2>
              <p className="political-description">
                Building a consistent, professional and recognizable digital presence for public-facing leaders.
              </p>

              <div className="political-tenets-grid">
                <div className="tenet-item">
                  <Check size={16} className="tenet-check" />
                  <span>Digital identity & profile governance</span>
                </div>
                <div className="tenet-item">
                  <Check size={16} className="tenet-check" />
                  <span>Public-facing social media management</span>
                </div>
                <div className="tenet-item">
                  <Check size={16} className="tenet-check" />
                  <span>Dignified content & speech documentation</span>
                </div>
                <div className="tenet-item">
                  <Check size={16} className="tenet-check" />
                  <span>Reputation-oriented digital presence</span>
                </div>
                <div className="tenet-item">
                  <Check size={16} className="tenet-check" />
                  <span>Visual communication & public portal design</span>
                </div>
                <div className="tenet-item">
                  <Check size={16} className="tenet-check" />
                  <span>Consistency of official communication</span>
                </div>
              </div>

              <Link to="/services/political-personal-branding" className="btn btn-outline political-cta-btn">
                <span>Explore Political Personal Branding</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. E-Commerce Section */}
      <section className="section-ecommerce-feature">
        <div className="container">
          <div className="ecommerce-feature-grid">
            <div className="ecommerce-text-side">
              <div className="section-tag">
                <span className="section-tag-dot"></span>
                <span className="section-tag-text">E-COMMERCE ARCHITECTURE</span>
              </div>
              <h2 className="section-title">FROM PRODUCT TO CHECKOUT.</h2>
              <p className="section-subtitle">
                We build professional Shopify storefronts that help product businesses establish their online presence.
              </p>

              <div className="ecommerce-workflow-pills">
                <div className="wf-pill">
                  <span className="wf-num">01</span>
                  <span>Shopify Development</span>
                </div>
                <div className="wf-pill">
                  <span className="wf-num">02</span>
                  <span>Product Setup</span>
                </div>
                <div className="wf-pill">
                  <span className="wf-num">03</span>
                  <span>Product Catalog</span>
                </div>
                <div className="wf-pill">
                  <span className="wf-num">04</span>
                  <span>Payment Integration</span>
                </div>
                <div className="wf-pill">
                  <span className="wf-num">05</span>
                  <span>Shipping Integration</span>
                </div>
                <div className="wf-pill">
                  <span className="wf-num">06</span>
                  <span>Store Launch</span>
                </div>
              </div>

              <div className="ecommerce-actions">
                <Link to="/services/shopify-development" className="btn btn-primary">
                  <span>Explore Shopify Services</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>

            <div className="ecommerce-visual-side">
              <div className="mockup-frame">
                <img 
                  src="/assets/ecommerce-hero.jpg" 
                  alt="Shopify Storefront Mockup" 
                  className="mockup-img"
                />
                <div className="mockup-overlay-badge">
                  <span className="badge-pill">Shopify Storefront</span>
                  <span className="mockup-status">Live Store Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Drone / Visual Media Section */}
      <section className="section-drone-media">
        <div className="container">
          <div className="drone-section-header">
            <div className="section-tag">
              <span className="section-tag-dot"></span>
              <span className="section-tag-text">VISUAL MEDIA</span>
            </div>
            <h2 className="section-title">SEE YOUR PROPERTY DIFFERENTLY.</h2>
            <p className="section-subtitle">
              High-quality aerial photography and videography for real estate, construction and property marketing.
            </p>
          </div>

          <div className="drone-cinematic-banner">
            <img 
              src="/assets/drone-media-hero.jpg" 
              alt="Cinematic Aerial Drone Photography" 
              className="drone-cinematic-img"
            />
            <div className="drone-cinematic-overlay">
              <div className="drone-categories-strip">
                <div className="drone-category-box">
                  <span className="cat-eyebrow">REAL ESTATE</span>
                  <h4>Property Showcases</h4>
                  <p>Elevated architectural views for luxury residential estates and commercial listings.</p>
                </div>
                <div className="drone-category-box">
                  <span className="cat-eyebrow">CONSTRUCTION</span>
                  <h4>Progress Documentation</h4>
                  <p>Recurring milestone flights and high-resolution site surveys for developers.</p>
                </div>
                <div className="drone-category-box">
                  <span className="cat-eyebrow">COMMERCIAL</span>
                  <h4>Buildings & Infrastructure</h4>
                  <p>Cinematic coverage of industrial developments, business hubs, and architecture.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="drone-cta-row">
            <Link to="/services/drone-photography" className="btn btn-secondary">
              <span>Explore Visual Media</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Influencer Marketing Section */}
      <section className="section-influencer-feature">
        <div className="container">
          <div className="influencer-layout-grid">
            <div className="influencer-visual-wrap">
              <img 
                src="/assets/creator-hero.jpg" 
                alt="Creator Collaboration" 
                className="influencer-img"
              />
            </div>

            <div className="influencer-text-wrap">
              <div className="section-tag">
                <span className="section-tag-dot"></span>
                <span className="section-tag-text">CREATOR CAMPAIGNS</span>
              </div>
              <h2 className="section-title">
                THE RIGHT PRODUCT.<br />
                THE RIGHT CREATOR.<br />
                THE RIGHT AUDIENCE.
              </h2>
              <p className="influencer-desc">
                Strategic creator matchmaking that builds genuine brand affinity rather than transactional banner noise.
              </p>

              <div className="influencer-services-list">
                <div className="influencer-service-item">
                  <span className="inf-num">01</span>
                  <span>Influencer Discovery</span>
                </div>
                <div className="influencer-service-item">
                  <span className="inf-num">02</span>
                  <span>Campaign Strategy</span>
                </div>
                <div className="influencer-service-item">
                  <span className="inf-num">03</span>
                  <span>Creator Collaboration</span>
                </div>
                <div className="influencer-service-item">
                  <span className="inf-num">04</span>
                  <span>Content Coordination</span>
                </div>
                <div className="influencer-service-item">
                  <span className="inf-num">05</span>
                  <span>Campaign Management</span>
                </div>
              </div>

              <Link to="/services/influencer-marketing" className="btn btn-outline">
                <span>Explore Influencer Marketing</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Digital Presence Visual Diagram */}
      <PresenceDiagram />

      {/* 10. Selected Work Section */}
      <section className="section-selected-work">
        <div className="container">
          <div className="section-header-split">
            <div>
              <div className="section-tag">
                <span className="section-tag-dot"></span>
                <span className="section-tag-text">PORTFOLIO</span>
              </div>
              <h2 className="section-title">SELECTED WORK</h2>
            </div>

            <Link to="/work" className="btn btn-secondary">
              <span>View All Projects</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Filter Pills */}
          <div className="portfolio-filter-bar">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={`filter-pill-btn ${selectedFilter === cat.id ? 'is-active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="portfolio-cards-grid">
            {filteredProjects.map((project) => (
              <PortfolioCard 
                key={project.id} 
                project={project} 
                onSelect={(proj) => setActiveProjectModal(proj)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 11. Why Seido Social Section */}
      <section className="section-why-seido">
        <div className="container">
          <div className="section-header-block">
            <div className="section-tag">
              <span className="section-tag-dot"></span>
              <span className="section-tag-text">OUR PHILOSOPHY</span>
            </div>
            <h2 className="section-title">WHY SEIDO SOCIAL</h2>
            <p className="section-subtitle">
              We approach digital presence with editorial discipline, technical precision, and genuine discretion.
            </p>
          </div>

          <div className="why-seido-grid">
            <div className="why-card">
              <span className="why-index">01</span>
              <h3 className="why-card-title">UNDERSTAND THE PERSON</h3>
              <p className="why-card-desc">
                We start with the individual, not a template. We unpack your unique thesis, voice, and industry standing before recommending any tactic.
              </p>
            </div>

            <div className="why-card">
              <span className="why-index">02</span>
              <h3 className="why-card-title">CONTENT-FIRST</h3>
              <p className="why-card-desc">
                Build communication around authentic stories and expertise. We produce documentary-caliber video and substantive writing that commands attention.
              </p>
            </div>

            <div className="why-card">
              <span className="why-index">03</span>
              <h3 className="why-card-title">DIGITAL + CREATIVE</h3>
              <p className="why-card-desc">
                Combine technology, content and visual storytelling. We bridge high-end cinema, Shopify engineering, and aerial drone cinematography under one studio.
              </p>
            </div>

            <div className="why-card">
              <span className="why-index">04</span>
              <h3 className="why-card-title">CONSISTENCY</h3>
              <p className="why-card-desc">
                Create a recognizable digital presence across platforms. Disciplined daily stewardship compounds your reputational equity over years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Final CTA Section */}
      <section className="section-final-cta">
        <div className="container">
          <div className="final-cta-card">
            <div className="cta-gradient-glow"></div>
            <span className="badge-pill">START A COLLABORATION</span>
            <h2 className="final-cta-title">
              LET'S BUILD YOUR PRESENCE.
            </h2>
            <p className="final-cta-subtitle">
              Whether you're building a personal brand, launching an online store, showcasing a property or promoting a product, let's talk.
            </p>
            <div className="final-cta-action-row">
              <Link to="/contact" className="btn btn-primary cta-action-btn">
                <span>Start a Conversation</span>
                <ArrowUpRight size={18} />
              </Link>
              <Link to="/services" className="btn btn-secondary cta-action-btn">
                <span>Explore Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {activeProjectModal && (
        <PortfolioModal 
          project={activeProjectModal} 
          onClose={() => setActiveProjectModal(null)} 
        />
      )}
    </div>
  );
}
