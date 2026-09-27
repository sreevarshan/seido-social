import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import SeidoLogo from '../SeidoLogo/SeidoLogo';
import { 
  ChevronDown, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  ArrowUpRight,
  User,
  ShoppingBag,
  Camera,
  Share2
} from 'lucide-react';
import { serviceCategories } from '../../data/services';
import './Header.css';

export default function Header() {
  const { theme, toggleTheme, isDark } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Close menus on navigation
  useEffect(() => {
    setServicesOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Scroll detection for sticky header background/border
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getPillarIcon = (id) => {
    switch (id) {
      case 'personal-presence':
        return <User size={16} className="pillar-icon" />;
      case 'ecommerce':
        return <ShoppingBag size={16} className="pillar-icon" />;
      case 'visual-media':
        return <Camera size={16} className="pillar-icon" />;
      case 'influencer-marketing':
        return <Share2 size={16} className="pillar-icon" />;
      default:
        return null;
    }
  };

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-container">
        {/* Left: Logo */}
        <Link to="/" className="header-logo-link" aria-label="Seido Social Home">
          <SeidoLogo variant="badge" size="default" />
        </Link>

        {/* Right: Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          {/* Services Dropdown */}
          <div 
            className="nav-item-dropdown" 
            ref={dropdownRef}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button 
              className={`nav-link dropdown-trigger ${servicesOpen ? 'is-active' : ''}`}
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              <span>Services</span>
              <ChevronDown size={15} className={`chevron-icon ${servicesOpen ? 'rotate' : ''}`} />
            </button>

            {/* Mega Dropdown Menu */}
            <div className={`services-dropdown-panel ${servicesOpen ? 'is-visible' : ''}`}>
              <div className="dropdown-panel-header">
                <div className="dropdown-panel-title">OUR CAPABILITIES</div>
                <Link to="/services" className="dropdown-view-all">
                  <span>Overview</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>

              <div className="dropdown-pillars-grid">
                {serviceCategories.map((pillar) => (
                  <div key={pillar.id} className="dropdown-pillar-col">
                    <div className="pillar-col-header">
                      {getPillarIcon(pillar.id)}
                      <span className="pillar-col-title">{pillar.title}</span>
                    </div>
                    <ul className="pillar-services-list">
                      {pillar.services.map((svc) => (
                        <li key={svc.slug}>
                          <Link 
                            to={`/services/${svc.slug}`} 
                            className="dropdown-service-item"
                          >
                            <span className="service-item-title">{svc.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="dropdown-panel-footer">
                <p className="dropdown-footer-tagline">
                  "We build digital presence around people, products and properties."
                </p>
                <Link to="/contact" className="dropdown-footer-cta">
                  <span>Start a Conversation</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          <NavLink 
            to="/work" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Work
          </NavLink>

          <NavLink 
            to="/contact" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Contact Us
          </NavLink>

          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme} 
            className="theme-toggle-btn"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Get in touch CTA */}
          <Link to="/contact" className="btn btn-primary header-cta">
            <span>Enquire</span>
            <ArrowUpRight size={16} />
          </Link>
        </nav>

        {/* Mobile Header Right Controls */}
        <div className="mobile-header-controls">
          <button 
            onClick={toggleTheme} 
            className="theme-toggle-btn mobile-theme-btn"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button 
            className="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'is-open' : ''}`}>
        <div className="mobile-drawer-content">
          <nav className="mobile-nav-links">
            <div className="mobile-nav-group">
              <button 
                className="mobile-nav-link-expandable"
                onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
              >
                <span>Services</span>
                <ChevronDown size={18} className={`chevron-icon ${mobileServicesExpanded ? 'rotate' : ''}`} />
              </button>

              {mobileServicesExpanded && (
                <div className="mobile-sublinks">
                  <Link to="/services" className="mobile-sublink all-services-link">
                    → All Services Overview
                  </Link>
                  {serviceCategories.map((pillar) => (
                    <div key={pillar.id} className="mobile-pillar-group">
                      <div className="mobile-pillar-label">{pillar.title}</div>
                      {pillar.services.map((svc) => (
                        <Link 
                          key={svc.slug} 
                          to={`/services/${svc.slug}`} 
                          className="mobile-sublink"
                        >
                          {svc.title}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link to="/work" className="mobile-nav-link">
              Work
            </Link>

            <Link to="/contact" className="mobile-nav-link">
              Contact Us
            </Link>
          </nav>

          <div className="mobile-drawer-footer">
            <Link to="/contact" className="btn btn-primary mobile-cta-btn">
              <span>Start a Conversation</span>
              <ArrowUpRight size={18} />
            </Link>
            <div className="mobile-footer-text">
              "We build digital presence around people, products and properties."
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
