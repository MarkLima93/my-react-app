import React from 'react';

function SeniorCare() {
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
      <div className="page-header-pro">
        <div className="header-content">
          <h1>Senior Care Excellence</h1>
          <p className="header-subtitle">Professional, Compassionate Care for Your Loved Ones</p>
        </div>
      </div>

      <div className="content-container" style={{ flex: 1 }}>
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
          <h2 className="section-title">Our Premium Care Services</h2>
          <div className="premium-services-grid">
            <div className="premium-service-card" style={{ textAlign: 'center' }}>
              <div className="service-icon" style={{ 
                textAlign: 'center', 
                marginBottom: '1rem',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <img 
                  src="https://static.wixstatic.com/media/4ca325_d080dd236d984a22a22d97c523837041~mv2.png/v1/fill/w_176,h_170,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/personal%20care.png"
                  alt="Personal Care Icon"
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
              }}>Personal Care</h3>
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
                }}>Bathing and grooming assistance</li>
                <li style={{ 
                  padding: '8px 0', 
                  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                  width: '90%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>Medication management</li>
                <li style={{ 
                  padding: '8px 0', 
                  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                  width: '90%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>Mobility support</li>
                <li style={{ 
                  padding: '8px 0',
                  width: '90%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>Dietary monitoring</li>
              </ul>
            </div>
            <div className="premium-service-card">
              <div className="service-icon" style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <img 
                  src="https://static.wixstatic.com/media/4ca325_d133582d0ea3407c8191309b430369d2~mv2.png/v1/fill/w_176,h_170,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cleaning.png"
                  alt="Household Care Icon"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </div>
              <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Household Care</h3>
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
                }}>Light housekeeping</li>
                <li style={{ 
                  padding: '8px 0', 
                  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                  width: '90%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>Meal preparation</li>
                <li style={{ 
                  padding: '8px 0', 
                  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                  width: '90%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>Laundry assistance</li>
                <li style={{ 
                  padding: '8px 0',
                  width: '90%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>Shopping & errands</li>
              </ul>
            </div>
            <div className="premium-service-card">
              <div className="service-icon" style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <img 
                  src="https://static.wixstatic.com/media/4ca325_56f48e79113249af8ee313a8250b83ca~mv2.png/v1/fill/w_176,h_170,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/transport.png"
                  alt="Companion Care Icon"
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </div>
              <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Companion Care</h3>
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
                }}>Social engagement</li>
                <li style={{ 
                  padding: '8px 0', 
                  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                  width: '90%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>Recreational activities</li>
                <li style={{ 
                  padding: '8px 0', 
                  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                  width: '90%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>Transportation assistance</li>
                <li style={{ 
                  padding: '8px 0',
                  width: '90%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>Community involvement</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="care-process">
          <h2 className="section-title">Our Care Process</h2>
          <div className="process-timeline" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            padding: '2rem 0',
            margin: '0 2rem'
          }}>
            <div className="process-step" style={{
              padding: '3rem',
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
                marginBottom: '1.5rem'
              }}>01</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Initial Consultation</h3>
              <p style={{ lineHeight: '1.6' }}>Comprehensive assessment of care needs and preferences</p>
            </div>
            <div className="process-step" style={{
              padding: '3rem',
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
                marginBottom: '1.5rem'
              }}>02</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Care Planning</h3>
              <p style={{ lineHeight: '1.6' }}>Development of personalized care strategy</p>
            </div>
            <div className="process-step" style={{
              padding: '3rem',
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
                marginBottom: '1.5rem'
              }}>03</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Caregiver Matching</h3>
              <p style={{ lineHeight: '1.6' }}>Selection of compatible care professional</p>
            </div>
            <div className="process-step" style={{
              padding: '3rem',
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
                marginBottom: '1.5rem'
              }}>04</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Ongoing Support</h3>
              <p style={{ lineHeight: '1.6' }}>Regular monitoring and care plan adjustments</p>
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

      <footer style={footerStyle}>
        © 2024 by Balance Center LLC
      </footer>
    </div>
  );
}

export default SeniorCare; 