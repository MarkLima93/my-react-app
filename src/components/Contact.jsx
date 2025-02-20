import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaHeadset, FaComments, FaUsers } from 'react-icons/fa';

const Contact = () => {
  const serviceListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0
  };

  const serviceListItemStyle = {
    padding: '12px 0',
    borderBottom: '2px solid rgba(0, 0, 0, 0.2)',
    margin: 0
  };

  const serviceHeadingStyle = {
    borderBottom: '3px solid #4a90e2',
    paddingBottom: '0.5rem',
    display: 'inline-block',
    marginBottom: '1rem'
  };

  const footerStyle = {
    textAlign: 'center',
    padding: '20px',
    color: '#666',
    borderTop: '1px solid #eee',
    marginTop: '40px',
    backgroundColor: '#f8f9fa'
  };

  return (
    <div className="about-page" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div className="page-header-pro" style={{
        background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '4rem 2rem',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="header-content">
          <h1>Contact Us</h1>
          <p className="header-subtitle">We're Here to Help You</p>
        </div>
      </div>

      <div className="content-container" style={{ flex: 1 }}>
        <div className="intro-section">
          <div className="intro-card">
            <h2>Get in Touch</h2>
            <p className="intro-text">
              Whether you have questions about our services, need support, or want to join our team,
              we're here to help. Choose the most convenient way to reach us.
            </p>
          </div>
        </div>

        <div className="contact-section" style={{ 
          maxWidth: '800px', 
          margin: '0 auto',
          padding: '2rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div className="contact-grid" style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <div className="contact-info" style={{ 
              width: '100%',
              maxWidth: '600px'
            }}>
              <div className="contact-item">
                <div className="icon-wrapper">
                  <FaMapMarkerAlt className="contact-icon" />
                </div>
                <div className="info-text">
                  <h3>Location</h3>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=671+E+Mehring+Way+%232403+Cincinnati+OH+45202"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#666',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#4a90e2'}
                    onMouseOut={(e) => e.target.style.color = '#666'}
                  >
                    <p>671 E Mehring Way #2403</p>
                    <p>Cincinnati, OH 45202</p>
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon-wrapper">
                  <FaPhone className="contact-icon" />
                </div>
                <div className="info-text">
                  <h3>Phone</h3>
                  <p>
                    <a 
                      href="tel:+15135492336"
                      style={{
                        color: '#666',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseOver={(e) => e.target.style.color = '#4a90e2'}
                      onMouseOut={(e) => e.target.style.color = '#666'}
                    >
                      (513) 549-2336
                    </a>
                  </p>
                  <p className="availability">Available 24/7</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon-wrapper">
                  <FaEnvelope className="contact-icon" />
                </div>
                <div className="info-text">
                  <h3>Email</h3>
                  <p>balancecentercare@gmail.com</p>
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
          </div>
        </div>

        <div className="contact-features-section">
          <div className="premium-services-grid">
            <div className="premium-service-card">
              <div className="service-icon">
                <FaHeadset size={24} color="#4a90e2" />
              </div>
              <h3 style={serviceHeadingStyle}>24/7 Support</h3>
              <p>Our emergency support line is available 24/7 for urgent matters.</p>
              <ul style={serviceListStyle}>
                <li style={serviceListItemStyle}>Emergency response team</li>
                <li style={serviceListItemStyle}>After-hours support</li>
                <li style={{ ...serviceListItemStyle, borderBottom: 'none' }}>Weekend availability</li>
              </ul>
            </div>

            <div className="premium-service-card">
              <div className="service-icon">
                <FaComments size={24} color="#4a90e2" />
              </div>
              <h3 style={serviceHeadingStyle}>Online Communication</h3>
              <p>Connect with us through various digital channels.</p>
              <ul style={serviceListStyle}>
                <li style={serviceListItemStyle}>Live chat support</li>
                <li style={serviceListItemStyle}>Video consultations</li>
                <li style={{ ...serviceListItemStyle, borderBottom: 'none' }}>Secure messaging platform</li>
              </ul>
            </div>

            <div className="premium-service-card">
              <div className="service-icon">
                <FaUsers size={24} color="#4a90e2" />
              </div>
              <h3 style={serviceHeadingStyle}>Care Coordination</h3>
              <p>Dedicated team for personalized care planning.</p>
              <ul style={serviceListStyle}>
                <li style={serviceListItemStyle}>Care plan development</li>
                <li style={serviceListItemStyle}>Family consultations</li>
                <li style={{ ...serviceListItemStyle, borderBottom: 'none' }}>Service customization</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="contact-section-pro">
          <h2>Ready to Start?</h2>
          <p>Schedule a consultation with our care team today</p>
          <div className="contact-features">
            <span><i className="fas fa-check"></i> Free Initial Consultation</span>
            <span><i className="fas fa-check"></i> Personalized Care Plans</span>
            <span><i className="fas fa-check"></i> Flexible Scheduling</span>
          </div>
        </div>
      </div>

      <footer style={footerStyle}>
        © 2024 by Balance Center LLC
      </footer>
    </div>
  );
};

export default Contact; 