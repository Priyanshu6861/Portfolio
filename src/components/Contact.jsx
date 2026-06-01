import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  AlertCircle,
  BriefcaseBusiness,
  CheckCircle2,
  Github,
  Loader2,
  Mail,
  MapPin,
  Send,
} from 'lucide-react';
import './Contact.css';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const CONTACT_COOLDOWN_KEY = 'portfolio-contact-last-submit';
const CONTACT_COOLDOWN_MS = 30000;

const initialFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
  website: '',
  botcheck: false,
};

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

const getCooldownRemaining = () => {
  try {
    const lastSubmittedAt = Number(sessionStorage.getItem(CONTACT_COOLDOWN_KEY));
    if (!lastSubmittedAt) {
      return 0;
    }

    const remaining = CONTACT_COOLDOWN_MS - (Date.now() - lastSubmittedAt);
    return remaining > 0 ? Math.ceil(remaining / 1000) : 0;
  } catch {
    return 0;
  }
};

const rememberSuccessfulSubmit = () => {
  try {
    sessionStorage.setItem(CONTACT_COOLDOWN_KEY, Date.now().toString());
  } catch {
    // Storage may be unavailable in private browsing modes.
  }
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!isValidEmail(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      nextErrors.subject = 'Please add a subject.';
    }

    if (!formData.message.trim()) {
      nextErrors.message = 'Please tell me a little about the project.';
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: type === 'checkbox' ? checked : value,
    }));

    setErrors((currentErrors) => {
      if (!currentErrors[name]) {
        return currentErrors;
      }

      const nextErrors = { ...currentErrors };
      delete nextErrors[name];
      return nextErrors;
    });

    if (status) {
      setStatus(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus(null);

    if (formData.website || formData.botcheck) {
      setFormData(initialFormData);
      setStatus({
        type: 'success',
        message: 'Thanks, your message has been received.',
      });
      return;
    }

    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus({
        type: 'error',
        message: 'Please fix the highlighted fields and try again.',
      });
      return;
    }

    if (!accessKey) {
      setStatus({
        type: 'error',
        message: 'The contact form is not configured yet. Please email me directly for now.',
      });
      return;
    }

    const cooldownRemaining = getCooldownRemaining();
    if (cooldownRemaining > 0) {
      setStatus({
        type: 'error',
        message: `Your message was just sent. Please try again in ${cooldownRemaining} seconds.`,
      });
      return;
    }

    setIsSubmitting(true);

    const payload = {
      access_key: accessKey,
      from_name: 'Priyanshu.dev Portfolio',
      subject: formData.subject.trim(),
      name: formData.name.trim(),
      email: formData.email.trim(),
      replyto: formData.email.trim(),
      message: formData.message.trim(),
      submitted_at: new Date().toISOString(),
      botcheck: false,
    };

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || result?.success === false) {
        throw new Error(result?.message || 'Unable to send your message right now.');
      }

      rememberSuccessfulSubmit();
      setFormData(initialFormData);
      setErrors({});
      setStatus({
        type: 'success',
        message: 'Thanks for reaching out. I will reply as soon as I can.',
      });
    } catch (error) {
      console.error('Contact form submission error:', error);
      setStatus({
        type: 'error',
        message: 'I could not send your message. Please try again or email me directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-heading">
          <span className="contact-eyebrow">Available for freelance and contract work</span>
          <h2 className="section-title">
            Let's <span className="text-gradient">Connect</span>
          </h2>
        </div>

        <div className="contact-container">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h3>Ready to improve your e-commerce experience?</h3>
              <p className="contact-copy">
                Send the project context and I will get back with a practical next step for Shopware, PHP, Odoo, API, or storefront work.
              </p>
            </div>

            <div className="contact-pill-list" aria-label="Project focus areas">
              <span>Shopware plugins</span>
              <span>API integrations</span>
              <span>Storefront fixes</span>
            </div>

            <div className="contact-methods">
              <div className="contact-method glass">
                <div className="contact-icon">
                  <Mail size={22} />
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:priyanshujoshi2252@gmail.com">priyanshujoshi2252@gmail.com</a>
                </div>
              </div>

              <div className="contact-method glass">
                <div className="contact-icon">
                  <BriefcaseBusiness size={22} />
                </div>
                <div>
                  <h4>Best Fit</h4>
                  <span>Shopware, PHP, APIs, Odoo, e-commerce</span>
                </div>
              </div>

              <div className="contact-method glass">
                <div className="contact-icon">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4>Location</h4>
                  <span>Ahmedabad, India</span>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/Priyanshu6861"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link glass"
                aria-label="GitHub profile"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:priyanshujoshi2252@gmail.com"
                className="contact-social-link glass"
                aria-label="Send email"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-wrapper glass"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="form-header">
              <span>Project inquiry</span>
              <h3>Tell me what you need</h3>
              <p>Share the goal, timeline, and any links that help me understand the work.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <input
                className="contact-honeypot"
                type="text"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
              />
              <input
                className="contact-honeypot"
                type="checkbox"
                name="botcheck"
                checked={formData.botcheck}
                onChange={handleChange}
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="form-grid">
                <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && <p className="form-error" id="name-error">{errors.name}</p>}
                </div>

                <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && <p className="form-error" id="email-error">{errors.email}</p>}
                </div>
              </div>

              <div className={`form-group ${errors.subject ? 'has-error' : ''}`}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Shopware plugin project"
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                />
                {errors.subject && <p className="form-error" id="subject-error">{errors.subject}</p>}
              </div>

              <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about the project, goals, timeline, and any important links."
                  rows="6"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && <p className="form-error" id="message-error">{errors.message}</p>}
              </div>

              {status && (
                <div className={`form-status ${status.type}`} role={status.type === 'error' ? 'alert' : 'status'} aria-live="polite">
                  {status.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                  <span>{status.message}</span>
                </div>
              )}

              <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                {isSubmitting ? <Loader2 size={18} className="submit-spinner" /> : <Send size={18} />}
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
