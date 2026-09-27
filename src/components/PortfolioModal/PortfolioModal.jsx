import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowUpRight, Calendar, User, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import './PortfolioModal.css';

export default function PortfolioModal({ project, onClose }) {
  // ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="portfolio-modal-backdrop" onClick={onClose}>
      <div 
        className="portfolio-modal-dialog" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
      >
        <button 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="modal-header-meta">
          <div className="modal-category-badge">{project.categoryLabel}</div>
          <h2 id="case-study-title" className="modal-title">{project.title}</h2>
          
          <div className="modal-attributes-row">
            <div className="attr-item">
              <User size={14} className="attr-icon" />
              <span className="attr-label">Client Type:</span>
              <span className="attr-value">{project.clientType}</span>
            </div>
            <div className="attr-item">
              <Calendar size={14} className="attr-icon" />
              <span className="attr-label">Timeline:</span>
              <span className="attr-value">{project.year}</span>
            </div>
            <div className="attr-item">
              <Layers size={14} className="attr-icon" />
              <span className="attr-label">Disciplines:</span>
              <span className="attr-value">{project.services.join(', ')}</span>
            </div>
          </div>
        </div>

        {/* Hero Cover Frame */}
        <div className="modal-cover-frame">
          <img src={project.coverImage} alt={project.title} className="modal-cover-img" />
        </div>

        {/* Case Study Details */}
        <div className="modal-body-content">
          <div className="modal-section-block">
            <h3 className="modal-section-heading">Overview & Strategic Mandate</h3>
            <p className="modal-overview-text">{project.overview}</p>
          </div>

          <div className="modal-two-col-grid">
            <div className="modal-col-card">
              <h4 className="modal-col-title">Core Deliverables</h4>
              <ul className="modal-deliverables-list">
                {project.deliverables.map((item, i) => (
                  <li key={i}>
                    <CheckCircle2 size={16} className="modal-check-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-col-card">
              <h4 className="modal-col-title">Execution Highlights</h4>
              <ul className="modal-deliverables-list">
                {project.highlights.map((item, i) => (
                  <li key={i}>
                    <div className="modal-dot-marker"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Modal Footer CTA */}
          <div className="modal-cta-footer">
            <div className="modal-footer-copy">
              <div className="footer-lead">Require a similar standard of execution?</div>
              <p className="footer-sub">Let's discuss how we can build your presence around people, products, or properties.</p>
            </div>
            <Link 
              to="/contact" 
              className="btn btn-primary"
              onClick={onClose}
            >
              <span>Enquire About This Work</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
