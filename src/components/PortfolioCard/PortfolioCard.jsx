import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './PortfolioCard.css';

export default function PortfolioCard({ project, onSelect }) {
  return (
    <div className="portfolio-item-card" onClick={() => onSelect(project)}>
      <div className="portfolio-media-frame">
        <img 
          src={project.coverImage} 
          alt={project.title} 
          className="portfolio-cover-img"
          loading="lazy"
        />
        <div className="portfolio-media-overlay">
          <span className="view-case-study-badge">
            <span>View Case Study</span>
            <ArrowUpRight size={14} />
          </span>
        </div>
      </div>

      <div className="portfolio-content-meta">
        <div className="portfolio-tags-row">
          <span className="portfolio-client-pill">{project.clientType}</span>
          <span className="portfolio-year">{project.year}</span>
        </div>

        <h3 className="portfolio-card-title">{project.title}</h3>
        <p className="portfolio-card-desc">{project.shortDescription}</p>

        <div className="portfolio-services-tags">
          {project.services.map((svc, i) => (
            <span key={i} className="service-micro-tag">{svc}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
