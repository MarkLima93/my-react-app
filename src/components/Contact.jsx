import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page">
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

      <div className="content-container">
        <div className="intro-section">
          <div className="intro-card">
            <h2>Get in Touch</h2>
            <p className="intro-text">
              Whether you have questions about our services, need support, or want to join our team,
              we're here to help. Choose the most convenient way to reach us.
            </p>
          </div>
        </div>

        <div className="contact-section">
          <div className="contact-container">
            <div className="contact-grid">
              <div className="contact-info">
                <h3>Direct Contact</h3>
                <ul>
                  <li>
                    <i className="fas fa-phone"></i>
                    <span>Phone: (555) 123-4567</span>
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>
                    <span>Email: info@balancecenter.com</span>
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Address: 123 Care Street, City, State 12345</span>
                  </li>
                  <li>
                    <i className="fas fa-clock"></i>
                    <span>Hours: Monday - Friday: 8:00 AM - 6:00 PM</span>
                  </li>
                </ul>
              </div>
              
              <div className="contact-alternative">
                <h3>Alternative Ways to Reach Us</h3>
                <p>We offer multiple ways to connect with our team:</p>
                <ul>
                  <li>Schedule a video consultation</li>
                  <li>Use our 24/7 messaging system</li>
                  <li>Request a callback at your preferred time</li>
                  <li>Connect with us on social media</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-features-section">
          <div className="premium-services-grid">
            <div className="premium-service-card">
              <div className="service-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h3>24/7 Support</h3>
              <p>Our emergency support line is available 24/7 for urgent matters.</p>
              <ul className="service-list">
                <li>Emergency response team</li>
                <li>After-hours support</li>
                <li>Weekend availability</li>
              </ul>
            </div>

            <div className="premium-service-card">
              <div className="service-icon">
                <i className="fas fa-comments"></i>
              </div>
              <h3>Online Communication</h3>
              <p>Connect with us through various digital channels.</p>
              <ul className="service-list">
                <li>Live chat support</li>
                <li>Video consultations</li>
                <li>Secure messaging platform</li>
              </ul>
            </div>

            <div className="premium-service-card">
              <div className="service-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Care Coordination</h3>
              <p>Dedicated team for personalized care planning.</p>
              <ul className="service-list">
                <li>Care plan development</li>
                <li>Family consultations</li>
                <li>Service customization</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="contact-section-pro">
          <h2>Ready to Start?</h2>
          <p>Schedule a consultation with our care team today</p>
          <button className="contact-button-pro">Schedule Consultation</button>
          <div className="contact-features">
            <span><i className="fas fa-check"></i> Free Initial Consultation</span>
            <span><i className="fas fa-check"></i> Personalized Care Plans</span>
            <span><i className="fas fa-check"></i> Flexible Scheduling</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 