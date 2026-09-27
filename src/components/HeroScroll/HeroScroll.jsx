import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, Sparkles, Shield, Compass } from 'lucide-react';
import './HeroScroll.css';

const STAGES = [
  {
    step: "01",
    label: "FOUNDATION",
    title: "YOUR PRESENCE",
    subtitle: "IS YOUR STORY.",
    desc: "Building digital presence through personal branding, content, technology and media.",
    category: "PERSON"
  },
  {
    step: "02",
    label: "IDENTITY",
    title: "YOUR STORY",
    subItems: ["YOUR VOICE", "YOUR IMAGE", "YOUR VALUES"],
    desc: "Before algorithms, there is authenticity. We extract your distinctive perspective and translate it into a recognizable digital identity.",
    category: "IDENTITY"
  },
  {
    step: "03",
    label: "EXPRESSION",
    title: "CONTENT & SOCIAL",
    subItems: ["PERSONAL BRANDING", "CONTENT PRODUCTION", "REPUTATION MANAGEMENT"],
    desc: "Producing documentary-caliber video, thought-leadership essays, and consistent touchpoints across key networks.",
    category: "CONTENT"
  },
  {
    step: "04",
    label: "SYNTHESIS",
    title: "DIGITAL PRESENCE",
    subtitle: "SEIDO SOCIAL",
    desc: "We build digital presence around people, products and properties.",
    category: "AUTHORITY"
  }
];

export default function HeroScroll() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate progress between 0 and 1
      const totalScrollable = containerHeight - windowHeight;
      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);
      
      setScrollProgress(progress);

      // Determine active stage
      if (progress < 0.25) {
        setActiveStageIndex(0);
      } else if (progress < 0.55) {
        setActiveStageIndex(1);
      } else if (progress < 0.82) {
        setActiveStageIndex(2);
      } else {
        setActiveStageIndex(3);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeStage = STAGES[activeStageIndex];

  // Helper to jump to a stage on click
  const jumpToStage = (idx) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight;
    const windowHeight = window.innerHeight;
    const totalScrollable = containerHeight - windowHeight;
    const targetScroll = containerTop + (idx / (STAGES.length - 1)) * totalScrollable;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <section className="hero-scroll-container" ref={containerRef}>
      {/* Sticky Viewport pinned at 100vh */}
      <div className="hero-sticky-viewport">
        {/* Ambient Glow & Grid Backdrop */}
        <div className="hero-ambient-glow" style={{ opacity: 0.15 + scrollProgress * 0.15 }}></div>
        <div className="hero-subtle-grid"></div>

        {/* Dynamic Editorial Visual Reveal */}
        <div 
          className="hero-backdrop-visual"
          style={{
            transform: `scale(${1.08 - scrollProgress * 0.08}) translateY(${(1 - scrollProgress) * 20}px)`,
            opacity: 0.22 + scrollProgress * 0.45
          }}
        >
          <img 
            src="/assets/personal-branding-hero.jpg" 
            alt="Seido Social Editorial" 
            className="hero-backdrop-img"
          />
          <div className="hero-backdrop-overlay"></div>
        </div>

        {/* Foreground Content */}
        <div className="container hero-content-grid">
          {/* Top Metadata Row */}
          <div className="hero-top-row">
            <div className="hero-brand-pill">
              <span className="hero-pill-dot"></span>
              <span className="hero-pill-text">SEIDO SOCIAL</span>
              <span className="hero-pill-divider">/</span>
              <span className="hero-pill-category">{activeStage.category}</span>
            </div>

            <div className="hero-pillars-label-group">
              <span className="pillar-tag">PEOPLE</span>
              <span className="pillar-tag-sep">•</span>
              <span className="pillar-tag">PRODUCTS</span>
              <span className="pillar-tag-sep">•</span>
              <span className="pillar-tag">PROPERTIES</span>
            </div>
          </div>

          {/* Central Animated Narrative Canvas */}
          <div className="hero-stage-canvas">
            {/* Stage Indicator Tracker */}
            <div className="stage-tracker">
              <span className="stage-step-num">{activeStage.step}</span>
              <span className="stage-step-sep">/</span>
              <span className="stage-step-total">04</span>
              <span className="stage-step-label">{activeStage.label}</span>
            </div>

            {/* Dynamic Typography Transition */}
            <div className="stage-headline-block">
              {activeStageIndex === 0 && (
                <div className="stage-content stage-0-fade">
                  <h1 className="hero-massive-headline">
                    <span className="headline-line">YOUR PRESENCE</span>
                    <span className="headline-line accent-gradient">IS YOUR STORY.</span>
                  </h1>
                </div>
              )}

              {activeStageIndex === 1 && (
                <div className="stage-content stage-1-fade">
                  <div className="stage-subheading-tag">IDENTITY FORMATION</div>
                  <h2 className="hero-massive-headline">
                    <span className="headline-line">YOUR STORY</span>
                    <span className="headline-subline">YOUR VOICE • YOUR IMAGE</span>
                  </h2>
                </div>
              )}

              {activeStageIndex === 2 && (
                <div className="stage-content stage-2-fade">
                  <div className="stage-subheading-tag">MEDIA PRODUCTION</div>
                  <h2 className="hero-massive-headline">
                    <span className="headline-line">PERSONAL BRANDING</span>
                    <span className="headline-subline">SOCIAL MEDIA • CONTENT</span>
                  </h2>
                </div>
              )}

              {activeStageIndex === 3 && (
                <div className="stage-content stage-3-fade">
                  <div className="stage-subheading-tag">THE SYNTHESIS</div>
                  <h2 className="hero-massive-headline">
                    <span className="headline-line accent-gradient">DIGITAL PRESENCE</span>
                    <span className="headline-line seido-callout">SEIDO SOCIAL</span>
                  </h2>
                </div>
              )}
            </div>

            {/* Stage Description */}
            <p className="hero-supporting-description">
              {activeStage.desc}
            </p>

            {/* CTA Group */}
            <div className="hero-action-group">
              <Link to="/services" className="btn btn-primary hero-btn">
                <span>Explore Services</span>
                <ArrowUpRight size={18} />
              </Link>

              <Link to="/contact" className="btn btn-secondary hero-btn">
                <span>Start a Conversation</span>
              </Link>
            </div>
          </div>

          {/* Bottom Interactive Scroll Navigation */}
          <div className="hero-bottom-controls">
            {/* Interactive Progress Segments */}
            <div className="stage-scrubber" role="tablist" aria-label="Hero stages">
              {STAGES.map((stg, i) => (
                <button
                  key={stg.step}
                  onClick={() => jumpToStage(i)}
                  className={`scrubber-segment ${i === activeStageIndex ? 'is-active' : ''}`}
                  aria-label={`Jump to stage ${stg.step}: ${stg.label}`}
                >
                  <div className="scrubber-bar">
                    <div 
                      className="scrubber-fill"
                      style={{
                        width: i < activeStageIndex ? '100%' : i === activeStageIndex ? `${((scrollProgress - i * 0.25) / 0.25) * 100}%` : '0%'
                      }}
                    ></div>
                  </div>
                  <span className="scrubber-label">{stg.label}</span>
                </button>
              ))}
            </div>

            {/* Scroll Indicator Prompt */}
            <div className="hero-scroll-prompt">
              <span className="scroll-prompt-text">Scroll to explore</span>
              <div className="scroll-mouse-icon">
                <ArrowDown size={14} className="bounce-arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
