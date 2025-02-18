import React from 'react';

function SpecialNeeds() {
  return (
    <div className="senior-care-page">
      <div className="page-header-pro special-needs-header">
        <div className="header-content">
          <h1>Special Needs Care</h1>
          <p className="header-subtitle">Empowering Lives Through Personalized Care and Support</p>
        </div>
      </div>

      <div className="content-container">
        <div className="intro-section">
          <div className="intro-card">
            <h2>Welcome to Premium Special Needs Care</h2>
            <p className="intro-text">
              At Balance Center, we believe in creating a supportive environment where individuals with 
              special needs can thrive. Our dedicated team provides personalized care that promotes 
              independence, dignity, and quality of life for every person we serve.
            </p>
            <div className="experience-badges">
              <div className="badge">
                <span className="badge-number">13+</span>
                <span className="badge-text">Years Experience</span>
              </div>
              <div className="badge">
                <span className="badge-number">1000+</span>
                <span className="badge-text">Families Served</span>
              </div>
              <div className="badge">
                <span className="badge-number">24/7</span>
                <span className="badge-text">Care Available</span>
              </div>
            </div>
          </div>
        </div>

        <div className="services-section">
          <h2 className="section-title">Our Specialized Care Programs</h2>
          <div className="premium-services-grid">
            <div className="premium-service-card">
              <div className="service-icon">🌟</div>
              <h3>Developmental Support</h3>
              <ul className="service-list">
                <li>Life skills training</li>
                <li>Social interaction support</li>
                <li>Communication assistance</li>
                <li>Educational guidance</li>
              </ul>
            </div>
            <div className="premium-service-card">
              <div className="service-icon">💪</div>
              <h3>Physical Support</h3>
              <ul className="service-list">
                <li>Mobility assistance</li>
                <li>Personal care support</li>
                <li>Exercise programs</li>
                <li>Physical therapy coordination</li>
              </ul>
            </div>
            <div className="premium-service-card">
              <div className="service-icon">🎯</div>
              <h3>Behavioral Support</h3>
              <ul className="service-list">
                <li>Positive behavior strategies</li>
                <li>Emotional regulation</li>
                <li>Coping skills development</li>
                <li>Routine establishment</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="care-process">
          <h2 className="section-title">Our Care Philosophy</h2>
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Person-Centered Care</h3>
              <p>Tailored support plans focused on individual strengths</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Family Collaboration</h3>
              <p>Active partnership in care planning and decisions</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Continuous Support</h3>
              <p>24/7 availability with consistent care coordination</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3>Professional Excellence</h3>
              <p>Highly trained staff with specialized certifications</p>
            </div>
          </div>
        </div>

        <div className="quality-assurance">
          <div className="quality-content">
            <h2 className="section-title">Our Quality Standards</h2>
            <div className="quality-grid">
              <div className="quality-item">
                <div className="quality-icon">✓</div>
                <h3>Specialized Training</h3>
                <p>Advanced education in various disabilities and care approaches</p>
              </div>
              <div className="quality-item">
                <div className="quality-icon">✓</div>
                <h3>Certified Team</h3>
                <p>Professional certifications in special needs care</p>
              </div>
              <div className="quality-item">
                <div className="quality-icon">✓</div>
                <h3>Ongoing Education</h3>
                <p>Regular training updates and skill development</p>
              </div>
              <div className="quality-item">
                <div className="quality-icon">✓</div>
                <h3>Quality Monitoring</h3>
                <p>Continuous assessment and care plan adjustments</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-section-pro">
          <div className="contact-content">
            <h2>Begin Your Support Journey</h2>
            <p>Schedule a consultation to create your personalized care plan</p>
            <button className="contact-button-pro">Schedule Consultation</button>
            <div className="contact-features">
              <span>✓ Free Initial Assessment</span>
              <span>✓ Flexible Care Options</span>
              <span>✓ Financial Assistance Guidance</span>
              <span>✓ 24/7 Support Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialNeeds; 