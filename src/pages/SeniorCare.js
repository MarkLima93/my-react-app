import React from 'react';

function SeniorCare() {
  return (
    <div className="senior-care-page">
      <div className="page-header-pro">
        <div className="header-content">
          <h1>Senior Care Excellence</h1>
          <p className="header-subtitle">Professional, Compassionate Care for Your Loved Ones</p>
        </div>
      </div>

      <div className="content-container">
        <div className="intro-section">
          <div className="intro-card">
            <h2>Welcome to Premium Senior Care Services</h2>
            <p className="intro-text">
              At Balance Center, we understand that each senior has unique needs. Our comprehensive 
              care programs are designed to provide the highest level of personalized support, 
              ensuring comfort, dignity, and independence for your loved ones.
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
          <h2 className="section-title">Our Premium Care Services</h2>
          <div className="premium-services-grid">
            <div className="premium-service-card">
              <div className="service-icon">👥</div>
              <h3>Personal Care</h3>
              <ul className="service-list">
                <li>Bathing and grooming assistance</li>
                <li>Medication management</li>
                <li>Mobility support</li>
                <li>Dietary monitoring</li>
              </ul>
            </div>
            <div className="premium-service-card">
              <div className="service-icon">🏠</div>
              <h3>Household Care</h3>
              <ul className="service-list">
                <li>Light housekeeping</li>
                <li>Meal preparation</li>
                <li>Laundry assistance</li>
                <li>Shopping & errands</li>
              </ul>
            </div>
            <div className="premium-service-card">
              <div className="service-icon">❤️</div>
              <h3>Companion Care</h3>
              <ul className="service-list">
                <li>Social engagement</li>
                <li>Recreational activities</li>
                <li>Transportation assistance</li>
                <li>Community involvement</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="care-process">
          <h2 className="section-title">Our Care Process</h2>
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Initial Consultation</h3>
              <p>Comprehensive assessment of care needs and preferences</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Care Planning</h3>
              <p>Development of personalized care strategy</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Caregiver Matching</h3>
              <p>Selection of compatible care professional</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3>Ongoing Support</h3>
              <p>Regular monitoring and care plan adjustments</p>
            </div>
          </div>
        </div>

        <div className="quality-assurance">
          <div className="quality-content">
            <h2 className="section-title">Our Quality Commitment</h2>
            <div className="quality-grid">
              <div className="quality-item">
                <div className="quality-icon">✓</div>
                <h3>Licensed Caregivers</h3>
                <p>Thoroughly vetted and certified professionals</p>
              </div>
              <div className="quality-item">
                <div className="quality-icon">✓</div>
                <h3>Regular Training</h3>
                <p>Ongoing education and skill development</p>
              </div>
              <div className="quality-item">
                <div className="quality-icon">✓</div>
                <h3>Care Monitoring</h3>
                <p>Continuous oversight and quality checks</p>
              </div>
              <div className="quality-item">
                <div className="quality-icon">✓</div>
                <h3>Family Updates</h3>
                <p>Regular communication and progress reports</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-section-pro">
          <div className="contact-content">
            <h2>Ready to Discuss Your Care Needs?</h2>
            <p>Schedule a complimentary consultation with our care specialists</p>
            <div className="contact-features">
              <span>✓ Free Assessment</span>
              <span>✓ Customized Care Plans</span>
              <span>✓ Flexible Scheduling</span>
              <span>✓ Insurance Assistance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeniorCare; 