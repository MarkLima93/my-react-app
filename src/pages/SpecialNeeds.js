import React from 'react';

function SpecialNeeds() {
  return (
    <div className="senior-care-page">
      <div className="page-header">
        <h1>Special Needs Care Services</h1>
        <p className="header-subtitle">Empowering Lives Through Personalized Care and Support</p>
      </div>
      
      <div className="content-wrapper">
        <div className="service-details">
          <div className="mission-banner">
            <div className="info-card">
              <h2>Our Commitment to Care</h2>
              <p className="lead-text">
                At Balance Center, we believe in creating a supportive environment where individuals with 
                special needs can thrive. Our dedicated team provides personalized care that promotes 
                independence, dignity, and quality of life for every person we serve.
              </p>
            </div>
          </div>

          <div className="support-programs">
            <h2>Specialized Support Programs</h2>
            <div className="programs-grid">
              <div className="program-card">
                <div className="program-icon">🌟</div>
                <h3>Developmental Support</h3>
                <div className="program-content">
                  <ul>
                    <li>Life skills training</li>
                    <li>Social interaction support</li>
                    <li>Communication assistance</li>
                    <li>Educational guidance</li>
                  </ul>
                </div>
              </div>
              <div className="program-card">
                <div className="program-icon">💪</div>
                <h3>Physical Support</h3>
                <div className="program-content">
                  <ul>
                    <li>Mobility assistance</li>
                    <li>Personal care support</li>
                    <li>Exercise programs</li>
                    <li>Physical therapy coordination</li>
                  </ul>
                </div>
              </div>
              <div className="program-card">
                <div className="program-icon">🎯</div>
                <h3>Behavioral Support</h3>
                <div className="program-content">
                  <ul>
                    <li>Positive behavior strategies</li>
                    <li>Emotional regulation</li>
                    <li>Coping skills development</li>
                    <li>Routine establishment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="care-approach">
            <div className="info-card">
              <h2>Our Care Philosophy</h2>
              <div className="approach-grid">
                <div className="approach-item">
                  <span className="approach-number">01</span>
                  <div className="approach-content">
                    <h3>Person-Centered Care</h3>
                    <p>Tailored support plans that focus on individual strengths, preferences, and goals</p>
                  </div>
                </div>
                <div className="approach-item">
                  <span className="approach-number">02</span>
                  <div className="approach-content">
                    <h3>Family Collaboration</h3>
                    <p>Active partnership with families in care planning and decision-making</p>
                  </div>
                </div>
                <div className="approach-item">
                  <span className="approach-number">03</span>
                  <div className="approach-content">
                    <h3>Continuous Support</h3>
                    <p>24/7 availability with consistent care coordination</p>
                  </div>
                </div>
                <div className="approach-item">
                  <span className="approach-number">04</span>
                  <div className="approach-content">
                    <h3>Professional Excellence</h3>
                    <p>Highly trained staff with specialized certifications and ongoing education</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="services-overview">
            <div className="services-grid">
              <div className="service-highlight">
                <div className="highlight-icon">🏠</div>
                <h3>In-Home Care</h3>
                <p>Comprehensive support services provided in the comfort of home</p>
              </div>
              <div className="service-highlight">
                <div className="highlight-icon">👥</div>
                <h3>Community Integration</h3>
                <p>Support for participation in community activities and social events</p>
              </div>
              <div className="service-highlight">
                <div className="highlight-icon">⚕️</div>
                <h3>Medical Coordination</h3>
                <p>Assistance with healthcare management and appointment coordination</p>
              </div>
              <div className="service-highlight">
                <div className="highlight-icon">💝</div>
                <h3>Respite Care</h3>
                <p>Temporary relief care for family caregivers</p>
              </div>
            </div>
          </div>

          <div className="care-team">
            <div className="info-card">
              <h2>Our Specialized Care Team</h2>
              <div className="team-qualifications">
                <div className="qualification">
                  <h3>✓ Advanced Training</h3>
                  <p>Specialized education in various disabilities and care approaches</p>
                </div>
                <div className="qualification">
                  <h3>✓ Professional Certifications</h3>
                  <p>Current certifications in special needs care and emergency response</p>
                </div>
                <div className="qualification">
                  <h3>✓ Ongoing Education</h3>
                  <p>Regular training updates and skill development programs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="get-started-section">
            <div className="info-card">
              <h2>Begin Your Support Journey</h2>
              <div className="consultation-grid">
                <div className="consultation-info">
                  <h3>Schedule a Consultation</h3>
                  <p>Let us create a personalized care plan that meets your unique needs.</p>
                  <button className="cta-button">Request Care Assessment</button>
                </div>
                <div className="consultation-features">
                  <div className="feature">✓ Free Initial Assessment</div>
                  <div className="feature">✓ Flexible Care Options</div>
                  <div className="feature">✓ Financial Assistance Guidance</div>
                  <div className="feature">✓ 24/7 Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialNeeds; 