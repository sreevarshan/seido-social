import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight, 
  CheckCircle2, 
  AlertCircle, 
  Send,
  MessageSquare
} from 'lucide-react';
import './Contact.css';

const REQUIREMENT_OPTIONS = [
  { value: "personal-branding", label: "Personal Branding" },
  { value: "social-media-management", label: "Social Media Management" },
  { value: "political-personal-branding", label: "Political Personal Branding" },
  { value: "content-creation", label: "Content Creation" },
  { value: "shopify-website", label: "Shopify Website" },
  { value: "drone-photography", label: "Drone Photography" },
  { value: "drone-videography", label: "Drone Videography" },
  { value: "influencer-marketing", label: "Influencer Marketing" },
  { value: "other", label: "Other" }
];

export default function Contact() {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    requirementType: preselectedService ? (preselectedService === 'shopify-development' ? 'shopify-website' : preselectedService) : 'personal-branding',
    company: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (preselectedService) {
      const match = preselectedService === 'shopify-development' ? 'shopify-website' : preselectedService;
      if (REQUIREMENT_OPTIONS.some(o => o.value === match)) {
        setFormData(prev => ({ ...prev, requirementType: match }));
      }
    }
  }, [preselectedService]);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.location.trim()) errs.location = 'City / Location is required';
    if (!formData.message.trim()) errs.message = 'Please provide details about your requirement';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Simulate modular submission / API dispatch
      await new Promise(resolve => setTimeout(resolve, 1200));
      setIsSubmitted(true);
    } catch (err) {
      setSubmitError('Unable to send enquiry. Please contact us directly via email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      location: '',
      requirementType: 'personal-branding',
      company: '',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="contact-page">
      {/* Header Banner */}
      <section className="contact-hero-section">
        <div className="container">
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            <span className="section-tag-text">GET IN TOUCH</span>
          </div>
          <h1 className="contact-main-title">LET'S WORK TOGETHER.</h1>
          <p className="contact-main-subtitle">
            Tell us what you're looking to build, manage or promote. We evaluate every inquiry with privacy and discretion.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Direct Contact Channels */}
      <section className="contact-form-section">
        <div className="container contact-layout-grid">
          {/* Left Column: Interactive Form */}
          <div className="contact-form-container">
            {isSubmitted ? (
              <div className="contact-success-state">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={48} className="success-icon" />
                </div>
                <h3 className="success-heading">Enquiry Received</h3>
                <p className="success-message">
                  Thank you, <strong>{formData.name}</strong>. Your enquiry regarding{' '}
                  <strong>{REQUIREMENT_OPTIONS.find(o => o.value === formData.requirementType)?.label}</strong> has been registered. A member of our executive team will review your requirements and reach out within 24 hours.
                </p>
                <button onClick={handleReset} className="btn btn-secondary">
                  <span>Send Another Message</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                {submitError && (
                  <div className="form-alert-error">
                    <AlertCircle size={18} />
                    <span>{submitError}</span>
                  </div>
                )}

                <div className="form-row-two-col">
                  {/* Name */}
                  <div className="form-field-group">
                    <label htmlFor="name" className="field-label">
                      Full Name <span className="req-star">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Eleanor Vance"
                      className={`form-input ${errors.name ? 'has-error' : ''}`}
                    />
                    {errors.name && <span className="field-error-msg">{errors.name}</span>}
                  </div>

                  {/* Phone */}
                  <div className="form-field-group">
                    <label htmlFor="phone" className="field-label">
                      Phone Number <span className="req-star">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className={`form-input ${errors.phone ? 'has-error' : ''}`}
                    />
                    {errors.phone && <span className="field-error-msg">{errors.phone}</span>}
                  </div>
                </div>

                <div className="form-row-two-col">
                  {/* Email */}
                  <div className="form-field-group">
                    <label htmlFor="email" className="field-label">
                      Email Address <span className="req-star">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="eleanor@domain.com"
                      className={`form-input ${errors.email ? 'has-error' : ''}`}
                    />
                    {errors.email && <span className="field-error-msg">{errors.email}</span>}
                  </div>

                  {/* Location */}
                  <div className="form-field-group">
                    <label htmlFor="location" className="field-label">
                      Location / City <span className="req-star">*</span>
                    </label>
                    <input
                      id="location"
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. New York, London, Dubai"
                      className={`form-input ${errors.location ? 'has-error' : ''}`}
                    />
                    {errors.location && <span className="field-error-msg">{errors.location}</span>}
                  </div>
                </div>

                <div className="form-row-two-col">
                  {/* Requirement Type */}
                  <div className="form-field-group">
                    <label htmlFor="requirementType" className="field-label">
                      Requirement Type <span className="req-star">*</span>
                    </label>
                    <select
                      id="requirementType"
                      name="requirementType"
                      value={formData.requirementType}
                      onChange={handleChange}
                      className="form-select"
                    >
                      {REQUIREMENT_OPTIONS.map(opt => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Company / Organisation (Optional) */}
                  <div className="form-field-group">
                    <label htmlFor="company" className="field-label">
                      Company / Organisation <span className="opt-tag">(Optional)</span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Vance Capital / Private Office"
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="form-field-group">
                  <label htmlFor="message" className="field-label">
                    Message / Project Context <span className="req-star">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe what you are looking to build, manage or promote..."
                    className={`form-textarea ${errors.message ? 'has-error' : ''}`}
                  />
                  {errors.message && <span className="field-error-msg">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary form-submit-btn"
                >
                  {isSubmitting ? (
                    <span>Transmitting Enquiry...</span>
                  ) : (
                    <>
                      <span>Send Enquiry</span>
                      <ArrowUpRight size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Contact & Channels */}
          <div className="contact-channels-sidebar">
            <div className="channels-card">
              <span className="channels-tag">DIRECT COMMUNICATIONS</span>
              <h3 className="channels-heading">Reach Out Directly</h3>
              <p className="channels-sub">
                For confidential briefings, executive representation, or urgent media inquiries:
              </p>

              <div className="channels-items-list">
                <a href="mailto:hello@seidosocial.com" className="channel-item-link">
                  <div className="channel-icon-frame">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="channel-label">Email</span>
                    <span className="channel-val">hello@seidosocial.com</span>
                  </div>
                </a>

                <a href="tel:+15550192834" className="channel-item-link">
                  <div className="channel-icon-frame">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="channel-label">Phone</span>
                    <span className="channel-val">+1 (555) 019-2834</span>
                  </div>
                </a>

                <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="channel-item-link">
                  <div className="channel-icon-frame">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <span className="channel-label">WhatsApp</span>
                    <span className="channel-val">Direct Studio Chat</span>
                  </div>
                </a>
              </div>

              <div className="channels-social-section">
                <span className="channel-label">Social Media</span>
                <div className="social-links-row">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-chip">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                    <span>Instagram</span>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-chip">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect width="4" height="12" x="2" y="9"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              <div className="discretion-notice">
                <span className="discretion-title">Privacy & Discretion</span>
                <p>
                  All consultations and materials submitted are governed by strict confidentiality protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
