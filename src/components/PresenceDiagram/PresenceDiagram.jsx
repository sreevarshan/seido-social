import React, { useState } from 'react';
import { 
  User, 
  Sparkles, 
  Film, 
  Globe2, 
  Award, 
  ArrowRight,
  Shield,
  Layers,
  Check
} from 'lucide-react';
import './PresenceDiagram.css';

const PIPELINE_NODES = [
  {
    id: "you",
    step: "STAGE 01",
    label: "YOU",
    sublabel: "The Individual",
    icon: User,
    headline: "Everything Starts With The Person.",
    description: "We do not manufacture personas from thin air or impose generic corporate templates. We interview you, extract your authentic worldview, your professional philosophy, and the hard-won insights that define your career.",
    features: [
      "In-depth narrative extraction interviews",
      "Executive voice and domain boundary audit",
      "Identification of signature topics & perspectives"
    ]
  },
  {
    id: "identity",
    step: "STAGE 02",
    label: "STORY • VOICE • IMAGE",
    sublabel: "The Narrative Architecture",
    icon: Sparkles,
    headline: "Translating Essence Into Recognizable Identity.",
    description: "How do you sound? How do you look? What should people immediately associate with your name? We formulate your core thesis, editorial visual language, and consistent communication rules.",
    features: [
      "Personal thesis and opinion framework",
      "Curated typography, portraiture & color palette",
      "Public-facing speaker bio and media kit"
    ]
  },
  {
    id: "content",
    step: "STAGE 03",
    label: "CONTENT",
    sublabel: "The Media Engine",
    icon: Film,
    headline: "Cinema-Grade Media & Structured Insights.",
    description: "Turning thoughts into high-production assets. From multi-camera studio shoots and keynote recaps to in-depth essays, every piece of content communicates discernment and institutional seriousness.",
    features: [
      "4K/6K documentary and interview production",
      "High-substance long-form writing & newsletters",
      "Platform-native vertical video cutdowns"
    ]
  },
  {
    id: "social",
    step: "STAGE 04",
    label: "SOCIAL MEDIA",
    sublabel: "The Distribution Channels",
    icon: Globe2,
    headline: "Disciplined Management & Reputation Stewardship.",
    description: "Publishing is only half the work. We manage your presence daily across LinkedIn, X, and digital channels—curating discussions, engaging peers, and safeguarding your public reputation.",
    features: [
      "Proactive editorial calendar management",
      "Strict peer moderation and relationship curation",
      "Crisis shielding and reputation listening"
    ]
  },
  {
    id: "presence",
    step: "STAGE 05",
    label: "DIGITAL PRESENCE",
    sublabel: "The Compound Asset",
    icon: Award,
    headline: "An Enduring, Recognizable Reputation.",
    description: "The synthesis: when clients, journalists, investors, or voters search your name, they encounter an authoritative, cohesive, and compelling digital presence that commands immediate respect.",
    features: [
      "Unshakable credibility prior to any meeting",
      "Direct inbound opportunities & media invitations",
      "Compounding personal equity over decades"
    ]
  }
];

export default function PresenceDiagram() {
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);
  const activeNode = PIPELINE_NODES[activeNodeIndex];
  const IconComponent = activeNode.icon;

  return (
    <section className="presence-diagram-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-block text-center-wrap">
          <div className="section-tag center-tag">
            <span className="section-tag-dot"></span>
            <span className="section-tag-text">HOW PRESENCE IS BUILT</span>
          </div>
          <h2 className="section-title">The Digital Presence Architecture</h2>
          <p className="section-subtitle center-subtitle">
            How Seido Social transforms individual substance into enduring authority and recognizable reputation.
          </p>
        </div>

        {/* Interactive Visual Pipeline Rail */}
        <div className="pipeline-rail-wrap">
          <div className="pipeline-nodes-row">
            {PIPELINE_NODES.map((node, index) => {
              const NodeIcon = node.icon;
              const isActive = index === activeNodeIndex;
              const isPast = index < activeNodeIndex;

              return (
                <div key={node.id} className="pipeline-step-item">
                  <button
                    className={`pipeline-node-btn ${isActive ? 'is-active' : ''} ${isPast ? 'is-past' : ''}`}
                    onClick={() => setActiveNodeIndex(index)}
                    aria-label={`Select stage: ${node.label}`}
                  >
                    <div className="pipeline-node-icon-box">
                      <NodeIcon size={20} />
                    </div>
                    <div className="pipeline-node-text-box">
                      <span className="node-step-tag">{node.step}</span>
                      <span className="node-label-title">{node.label}</span>
                    </div>
                  </button>

                  {index < PIPELINE_NODES.length - 1 && (
                    <div className={`pipeline-connector ${isPast ? 'is-active' : ''}`}>
                      <div className="connector-pulse-dot"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Detail Card */}
        <div className="pipeline-detail-card">
          <div className="pipeline-card-glow"></div>
          
          <div className="detail-card-inner">
            <div className="detail-meta-header">
              <div className="detail-badge-group">
                <span className="badge-pill">{activeNode.step}</span>
                <span className="detail-sublabel">{activeNode.sublabel}</span>
              </div>
              <div className="detail-stage-counter">
                {activeNodeIndex + 1} of {PIPELINE_NODES.length}
              </div>
            </div>

            <div className="detail-body-grid">
              <div className="detail-main-col">
                <h3 className="detail-main-headline">{activeNode.headline}</h3>
                <p className="detail-main-description">{activeNode.description}</p>

                <div className="detail-features-list">
                  {activeNode.features.map((feat, i) => (
                    <div key={i} className="detail-feature-item">
                      <div className="feature-check-dot">
                        <Check size={13} />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="detail-side-col">
                <div className="detail-visual-box">
                  <div className="visual-icon-frame">
                    <IconComponent size={40} className="visual-hero-icon" />
                  </div>
                  <div className="visual-caption">
                    <span className="caption-tag">SEIDO METHODOLOGY</span>
                    <span className="caption-title">{activeNode.label}</span>
                  </div>
                </div>

                <div className="pipeline-nav-arrows">
                  <button
                    className="btn-icon"
                    onClick={() => setActiveNodeIndex(Math.max(0, activeNodeIndex - 1))}
                    disabled={activeNodeIndex === 0}
                    aria-label="Previous stage"
                  >
                    ←
                  </button>
                  <button
                    className="btn-icon"
                    onClick={() => setActiveNodeIndex(Math.min(PIPELINE_NODES.length - 1, activeNodeIndex + 1))}
                    disabled={activeNodeIndex === PIPELINE_NODES.length - 1}
                    aria-label="Next stage"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
