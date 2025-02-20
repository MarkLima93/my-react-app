import React from 'react';
import './SeniorCare.css';  // Using the same CSS file since we've made it work for both pages

function ChildCare() {
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
      <div className="page-header-pro child-care-header">
        <div className="header-content">
          <h1>Child Care Services</h1>
          <p className="header-subtitle">Creating Joyful Learning Experiences for Every Child</p>
        </div>
      </div>

      <div className="content-container" style={{ flex: 1 }}>
        <div className="intro-section">
          <div className="intro-card">
            <h2>Welcome to Premium Child Care Services</h2>
            <p className="intro-text">
              At Balance Center, we believe every child deserves a nurturing environment where they can 
              learn, play, and grow. Our child care programs combine educational activities with fun, 
              creating an engaging experience that supports your child's development.
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
          <h2 className="section-title">Our Premium Care Programs</h2>
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
              }}>Early Learning</h3>
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
                }}>Age-appropriate activities</li>
                <li style={{ 
                  padding: '8px 0', 
                  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                  width: '90%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>Educational games</li>
                <li style={{ 
                  padding: '8px 0', 
                  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                  width: '90%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>Social development</li>
                <li style={{ 
                  padding: '8px 0',
                  width: '90%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>Creative expression</li>
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
                  src="https://media.istockphoto.com/id/1421692024/vector/happy-kids-playing.jpg?s=612x612&w=0&k=20&c=dD6qM2LDHRK6hoyw16WEIEiwqiRRQmTvQML5ATSg0iY="
                  alt="Creative Activities Icon"
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
              }}>Creative Activities</h3>
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
                }}>Arts and crafts</li>
                <li style={{ 
                  padding: '8px 0', 
                  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                  width: '90%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>Music and movement</li>
                <li style={{ 
                  padding: '8px 0', 
                  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                  width: '90%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>Imaginative play</li>
                <li style={{ 
                  padding: '8px 0',
                  width: '90%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>Storytelling sessions</li>
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
                  src="https://cdn.vectorstock.com/i/1000v/34/56/logo-of-child-development-club-vector-5523456.jpg"
                  alt="Development Support Icon"
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
              }}>Development Support</h3>
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
                }}>Motor skills development</li>
                <li style={{ 
                  padding: '8px 0', 
                  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                  width: '90%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>Language enrichment</li>
                <li style={{ 
                  padding: '8px 0', 
                  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                  width: '90%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>Social interaction</li>
                <li style={{ 
                  padding: '8px 0',
                  width: '90%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>Emotional growth</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="care-process">
          <h2 className="section-title">Our Care Approach</h2>
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Initial Meeting</h3>
              <p>Understanding your child's needs and interests</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Care Planning</h3>
              <p>Creating a tailored development program</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Caregiver Selection</h3>
              <p>Matching with experienced child care professionals</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3>Regular Updates</h3>
              <p>Continuous communication and progress reports</p>
            </div>
          </div>
        </div>

        <div className="quality-assurance">
          <div className="quality-content">
            <h2 className="section-title">Our Quality Standards</h2>
            <div className="quality-grid">
              <div className="quality-item">
                <div className="quality-icon">✓</div>
                <h3>Certified Caregivers</h3>
                <p>Experienced and background-checked professionals</p>
              </div>
              <div className="quality-item">
                <div className="quality-icon">✓</div>
                <h3>Safe Environment</h3>
                <p>Secure and nurturing care settings</p>
              </div>
              <div className="quality-item">
                <div className="quality-icon">✓</div>
                <h3>Educational Focus</h3>
                <p>Development-oriented activities and learning</p>
              </div>
              <div className="quality-item">
                <div className="quality-icon">✓</div>
                <h3>Parent Partnership</h3>
                <p>Regular updates and open communication</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-section-pro">
          <div className="contact-content">
            <h2>Start Your Child's Journey Today</h2>
            <p>Schedule a consultation to learn more about our child care programs</p>
            <div className="contact-features">
              <span>✓ Free Initial Assessment</span>
              <span>✓ Flexible Care Options</span>
              <span>✓ Age-Appropriate Programs</span>
              <span>✓ Qualified Caregivers</span>
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

export default ChildCare; 