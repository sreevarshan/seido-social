import React, { useState, useEffect } from 'react';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';
import PortfolioModal from '../../components/PortfolioModal/PortfolioModal';
import { projectsData, projectCategories } from '../../data/projects';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import './Work.css';

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [activeModalProject, setActiveModalProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = selectedCategory === "ALL"
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <div className="work-page">
      {/* Header Banner */}
      <section className="work-header-section">
        <div className="container">
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            <span className="section-tag-text">OUR ARCHIVE</span>
          </div>
          <h1 className="work-page-title">Selected Work</h1>
          <p className="work-page-subtitle">
            Curated case studies demonstrating our execution across executive personal branding, Shopify storefront engineering, aerial drone visual media, and creator campaigns.
          </p>

          {/* Filter Bar */}
          <div className="work-filters-bar">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`work-filter-btn ${selectedCategory === cat.id ? 'is-active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="work-grid-section">
        <div className="container">
          <div className="work-projects-grid">
            {filteredProjects.map((project) => (
              <PortfolioCard
                key={project.id}
                project={project}
                onSelect={(proj) => setActiveModalProject(proj)}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="no-projects-box">
              <p>No projects match this category at this time.</p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="work-bottom-cta container">
        <div className="work-cta-card">
          <span className="badge-pill">BESPOKE COMMISSIONS</span>
          <h2 className="work-cta-title">Have a project with distinct parameters?</h2>
          <p className="work-cta-desc">
            We work under strict non-disclosure agreements for high-profile clients and specialized commissions.
          </p>
          <Link to="/contact" className="btn btn-primary work-cta-btn">
            <span>Discuss Your Project</span>
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* Case Study Modal */}
      {activeModalProject && (
        <PortfolioModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </div>
  );
}
