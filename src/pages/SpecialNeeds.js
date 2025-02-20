import React from 'react';

function SpecialNeeds() {
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
      <div className="page-header-pro special-needs-header">
        <div className="header-content">
          <h1>Special Needs Care</h1>
          <p className="header-subtitle">Empowering Lives Through Personalized Care and Support</p>
        </div>
      </div>

      <div className="content-container" style={{ flex: 1 }}>
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
                <span className="badge-number">10+</span>
                <span className="badge-text">Years Experience</span>
              </div>
              <div className="badge">
                <span className="badge-number">100+</span>
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
            <div className="premium-service-card" style={{ textAlign: 'center' }}>
              <div className="service-icon" style={{ 
                textAlign: 'center', 
                marginBottom: '1rem',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <img 
                  src="https://e7.pngegg.com/pngimages/229/392/png-clipart-three-alphabet-cubes-child-care-pre-school-learning-class-abc-child-people.png"
                  alt="Early Learning Icon"
                  style={{ 
                    width: '60px', 
                    height: '60px', 
                    objectFit: 'contain',
                    margin: '0 auto'
                  }}
                />
              </div>
              <h3 style={{ 
                textAlign: 'center', 
                marginBottom: '1rem',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 auto 1rem auto'
              }}>Engagement</h3>
              <ul className="service-list" style={{ 
                listStyle: 'none', 
                padding: 0,
                margin: '0 auto',
                textAlign: 'center',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <li style={{ 
                  padding: '8px 0', 
                  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                  width: '90%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>Life skills training</li>
                <li style={{ 
                  padding: '8px 0', 
                  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                  width: '90%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>Social interaction support</li>
                <li style={{ 
                  padding: '8px 0', 
                  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                  width: '90%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>Communication assistance</li>
                <li style={{ 
                  padding: '8px 0',
                  width: '90%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>Educational guidance</li>
              </ul>
            </div>
            <div className="premium-service-card" style={{ textAlign: 'center' }}>
              <div className="service-icon" style={{ 
                textAlign: 'center', 
                marginBottom: '1rem',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <img 
                  src="https://static.wixstatic.com/media/4ca325_8ec4f90602644ac6ab02b9db337c7db7~mv2.png/v1/fill/w_176,h_170,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/meal%20prep.png"
                  alt="Physical Support"
                  style={{ 
                    width: '60px', 
                    height: '60px', 
                    objectFit: 'contain',
                    margin: '0 auto'
                  }}
                />
              </div>
              <h3 style={{ 
                textAlign: 'center', 
                marginBottom: '1rem',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 auto 1rem auto'
              }}>Physical Support</h3>
              <ul className="service-list" style={{ 
                listStyle: 'none', 
                padding: 0,
                margin: '0 auto',
                textAlign: 'center',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <li style={{ 
                  padding: '8px 0', 
                  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                  width: '90%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>Mobility assistance</li>
                <li style={{ 
                  padding: '8px 0', 
                  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                  width: '90%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>Personal care support</li>
                <li style={{ 
                  padding: '8px 0', 
                  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                  width: '90%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>Exercise programs</li>
                <li style={{ 
                  padding: '8px 0',
                  width: '90%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>Physical therapy coordination</li>
              </ul>
            </div>
            <div className="premium-service-card" style={{ textAlign: 'center' }}>
              <div className="service-icon" style={{ 
                textAlign: 'center', 
                marginBottom: '1rem',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <img 
                  src="https://static.wixstatic.com/media/4ca325_d080dd236d984a22a22d97c523837041~mv2.png/v1/fill/w_176,h_170,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/personal%20care.png"
                  alt="Behavioral Support"
                  style={{ 
                    width: '60px', 
                    height: '60px', 
                    objectFit: 'contain',
                    margin: '0 auto'
                  }}
                />
              </div>
              <h3 style={{ 
                textAlign: 'center', 
                marginBottom: '1rem',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 auto 1rem auto'
              }}>Behavioral Support</h3>
              <ul className="service-list" style={{ 
                listStyle: 'none', 
                padding: 0,
                margin: '0 auto',
                textAlign: 'center',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <li style={{ 
                  padding: '8px 0', 
                  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                  width: '90%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>Positive behavior strategies</li>
                <li style={{ 
                  padding: '8px 0', 
                  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                  width: '90%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>Emotional regulation</li>
                <li style={{ 
                  padding: '8px 0', 
                  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                  width: '90%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>Coping skills development</li>
                <li style={{ 
                  padding: '8px 0',
                  width: '90%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>Routine establishment</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="care-process">
          <h2 className="section-title">Our Care Philosophy</h2>
          <div className="process-timeline" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            padding: '2rem 0'
          }}>
            <div className="process-step" style={{
              padding: '2rem',
              border: '1px solid #e0e0e0',
              borderRadius: '10px',
              backgroundColor: 'white',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              textAlign: 'center'
            }}>
              <div className="step-number" style={{
                fontSize: '2.5rem',
                color: '#4a90e2',
                opacity: '0.5',
                marginBottom: '1rem'
              }}>01</div>
              <h3>Person-Centered Care</h3>
              <p>Tailored support plans focused on individual strengths</p>
            </div>
            <div className="process-step" style={{
              padding: '2rem',
              border: '1px solid #e0e0e0',
              borderRadius: '10px',
              backgroundColor: 'white',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              textAlign: 'center'
            }}>
              <div className="step-number" style={{
                fontSize: '2.5rem',
                color: '#4a90e2',
                opacity: '0.5',
                marginBottom: '1rem'
              }}>02</div>
              <h3>Family Collaboration</h3>
              <p>Active partnership in care planning and decisions</p>
            </div>
            <div className="process-step" style={{
              padding: '2rem',
              border: '1px solid #e0e0e0',
              borderRadius: '10px',
              backgroundColor: 'white',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              textAlign: 'center'
            }}>
              <div className="step-number" style={{
                fontSize: '2.5rem',
                color: '#4a90e2',
                opacity: '0.5',
                marginBottom: '1rem'
              }}>03</div>
              <h3>Continuous Support</h3>
              <p>24/7 availability with consistent care coordination</p>
            </div>
            <div className="process-step" style={{
              padding: '2rem',
              border: '1px solid #e0e0e0',
              borderRadius: '10px',
              backgroundColor: 'white',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
              textAlign: 'center'
            }}>
              <div className="step-number" style={{
                fontSize: '2.5rem',
                color: '#4a90e2',
                opacity: '0.5',
                marginBottom: '1rem'
              }}>04</div>
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
            <div className="contact-features">
              <span>✓ Free Initial Assessment</span>
              <span>✓ Flexible Care Options</span>
              <span>✓ Financial Assistance Guidance</span>
              <span>✓ 24/7 Support Available</span>
            </div>
          </div>
        </div>
      </div>

      <footer style={footerStyle}>
        © 2024 by Balance Center LLC
      </footer>
    </div>
  );
}

export default SpecialNeeds; 