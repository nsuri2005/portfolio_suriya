import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `Contact from ${encodeURIComponent(formData.name)}`;
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:nsuriya2005@gmail.com?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p className="section-subtitle">Feel free to reach out for opportunities or just a friendly hello</p>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Links */}
          <div className="contact-links">
            <h3>Connect With Me</h3>
            <div className="links-container">
              <a href="mailto:john@example.com" className="contact-link email-link">
                <span className="link-icon">✉️</span>
                <div className="link-content">
                  <h4>Email</h4>
                  <p>nsuriya2005@gmail.com</p>
                </div>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link github-link"
              >
                <span className="link-icon">🔗</span>
                <div className="link-content">
                  <h4>GitHub</h4>
                  <p>https://github.com/nsuri2005</p>
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link linkedin-link"
              >
                <span className="link-icon">💼</span>
                <div className="link-content">
                  <h4>LinkedIn</h4>
                  <p>https://www.linkedin.com/in/suriya-n-4a25b6290/</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
