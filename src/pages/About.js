import React from 'react';
import '../styles/AboutUs.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <img 
              src="/logo.png" 
              alt="Balance Center Logo" 
              className="hero-logo"
            />
            <h1>About Balance Center</h1>
            <div className="divider"></div>
            <p className="tagline">Transforming Lives Through Compassionate Care</p>
          </div>
        </div>
      </section>

      <div className="content-wrapper">
        <div className="about-content">
          <section className="about-summary">
            <h2>Our Story</h2>
            <p>
              At Balance Center, we are dedicated to providing exceptional care and support services 
              that enhance the quality of life for our clients. With over a decade of experience, 
              our team of skilled professionals delivers personalized care solutions that meet the 
              unique needs of each individual we serve.
            </p>
            <p>
              We take pride in our commitment to excellence, maintaining the highest standards of 
              care while fostering a supportive and nurturing environment. Our approach combines 
              professional expertise with genuine compassion, ensuring that every client receives 
              the attention and respect they deserve.
            </p>
          </section>

          <section className="quick-stats">
            <div className="stat">
              <span className="stat-value">13+</span>
              <span className="stat-label">Years of Excellence</span>
            </div>
            <div className="vertical-divider"></div>
            <div className="stat">
              <span className="stat-value">24/7</span>
              <span className="stat-label">Care Available</span>
            </div>
            <div className="vertical-divider"></div>
            <div className="stat">
              <span className="stat-value">1000+</span>
              <span className="stat-label">Families Served</span>
            </div>
          </section>

          <section className="contact-section">
            <h2>Get in Touch</h2>
            <div className="contact-grid">
              <div className="contact-info">
                <div className="contact-item">
                  <div className="icon-wrapper">
                    <FaMapMarkerAlt className="contact-icon" />
                  </div>
                  <div className="info-text">
                    <h3>Location</h3>
                    <p>123 Care Avenue</p>
                    <p>San Francisco, CA 94110</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon-wrapper">
                    <FaPhone className="contact-icon" />
                  </div>
                  <div className="info-text">
                    <h3>Phone</h3>
                    <p>(555) 123-4567</p>
                    <p className="availability">Available 24/7</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon-wrapper">
                    <FaEnvelope className="contact-icon" />
                  </div>
                  <div className="info-text">
                    <h3>Email</h3>
                    <p>info@balancecenter.com</p>
                    <p className="response-time">Response within 24 hours</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="icon-wrapper">
                    <FaClock className="contact-icon" />
                  </div>
                  <div className="info-text">
                    <h3>Hours</h3>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Weekend support available for clients</p>
                  </div>
                </div>
              </div>

              <div className="cta-section">
                <button className="cta-button">Schedule a Consultation</button>
                <p className="cta-note">Free initial consultation available</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About; 