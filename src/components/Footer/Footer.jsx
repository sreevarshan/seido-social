import React from 'react';
import { Link } from 'react-router-dom';
import SeidoLogo from '../SeidoLogo/SeidoLogo';
import { ArrowUpRight } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Main Footer Grid */}
        <div className="footer-top-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-logo-link" aria-label="Seido Social">
              <SeidoLogo variant="badge" size="large" />
            </Link>
            <p className="footer-bio">
              Digital presence, content and creative solutions for people, products and properties.
            </p>
            <div className="footer-tag-quote">
              "We build digital presence around people, products and properties."
            </div>
          </div>

          {/* Nav Col */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/work">Selected Work</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services Col */}
          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links">
              <li><Link to="/services/personal-branding">Personal Branding</Link></li>
              <li><Link to="/services/political-personal-branding">Political Branding</Link></li>
              <li><Link to="/services/social-media-management">Social Media</Link></li>
              <li><Link to="/services/content-creation">Content Creation</Link></li>
              <li><Link to="/services/shopify-development">Shopify Development</Link></li>
              <li><Link to="/services/drone-photography">Drone Photography</Link></li>
              <li><Link to="/services/drone-videography">Drone Videography</Link></li>
              <li><Link to="/services/influencer-marketing">Influencer Marketing</Link></li>
            </ul>
          </div>

          {/* Channels & Enquiries */}
          <div className="footer-col">
            <h4 className="footer-col-title">Channels</h4>
            <ul className="footer-links">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="external-link">
                  <span>Instagram</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="external-link">
                  <span>LinkedIn</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
              <li>
                <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="external-link">
                  <span>WhatsApp</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
            </ul>

            <div className="footer-enquiries-box">
              <span className="enquiries-label">Direct Enquiries</span>
              <a href="mailto:hello@seidosocial.com" className="enquiries-email">
                hello@seidosocial.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            © 2026 Seido Social. All rights reserved.
          </div>
          <div className="footer-legal-links">
            <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
            <span className="dot-sep">•</span>
            <a href="#terms" onClick={(e) => e.preventDefault()}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
