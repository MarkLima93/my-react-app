import React from 'react';

function AboutUs() {
  return (
    <div className="about-page">
      <div className="page-header-pro about-header">
        <div className="header-content">
          <h1>About Balance Center</h1>
          <p className="header-subtitle">Dedicated to Exceptional Care and Support Since 2010</p>
        </div>
      </div>

      <div className="about-container">
        <div className="mission-section">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              At Balance Center, we are committed to providing exceptional care services that enhance 
              the quality of life for individuals with special needs and their families. Our approach 
              combines professional expertise with compassionate care, ensuring each person we serve 
              receives individualized attention and support.
            </p>
          </div>
        </div>

        <div className="values-section">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Excellence</h3>
              <p>Delivering the highest standard of care through continuous improvement and professional development</p>
            </div>
            <div className="value-card">
              <h3>Compassion</h3>
              <p>Providing care with empathy, understanding, and respect for individual dignity</p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>Embracing new approaches and technologies to enhance care delivery and outcomes</p>
            </div>
            <div className="value-card">
              <h3>Integrity</h3>
              <p>Maintaining the highest ethical standards in all our interactions and services</p>
            </div>
          </div>
        </div>

        <div className="expertise-section">
          <h2>Our Expertise</h2>
          <div className="expertise-content">
            <p className="expertise-intro">
              With over 13 years of experience, our team brings extensive knowledge and 
              specialized skills to support individuals with various needs:
            </p>
            <div className="expertise-cards">
              <div className="expertise-card">
                <h3>Specialized Care</h3>
                <ul>
                  <li>Developmental disabilities support</li>
                  <li>Autism spectrum care</li>
                  <li>Physical disabilities assistance</li>
                  <li>Behavioral support services</li>
                </ul>
              </div>
              <div className="expertise-card">
                <h3>Professional Team</h3>
                <ul>
                  <li>Licensed care professionals</li>
                  <li>Certified special needs specialists</li>
                  <li>Experienced support staff</li>
                  <li>Ongoing professional development</li>
                </ul>
              </div>
              <div className="expertise-card">
                <h3>Comprehensive Support</h3>
                <ul>
                  <li>Individualized care plans</li>
                  <li>Family collaboration</li>
                  <li>Community integration</li>
                  <li>24/7 availability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-section">
          <h2>Contact Us</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <div className="contact-details">
                <p><strong>Address:</strong> 123 Care Avenue, Suite 100<br />San Francisco, CA 94105</p>
                <p><strong>Phone:</strong> (555) 123-4567</p>
                <p><strong>Email:</strong> info@balancecenter.com</p>
                <p><strong>Hours:</strong> 24/7 Care Available</p>
              </div>
            </div>
            <div className="contact-form">
              <h3>Send Us a Message</h3>
              <form className="inquiry-form">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Your Phone" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="submit-button">Send Message</button>
              </form>
            </div>
          </div>
        </div>

        <div className="certification-section">
          <h2>Our Certifications</h2>
          <div className="certification-grid">
            <div className="certification-item">
              <h3>Licensed Care Provider</h3>
              <p>State certified and fully licensed care facility</p>
            </div>
            <div className="certification-item">
              <h3>Quality Assurance</h3>
              <p>Regular audits and quality monitoring</p>
            </div>
            <div className="certification-item">
              <h3>Safety Standards</h3>
              <p>Adherence to highest safety protocols</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs; 