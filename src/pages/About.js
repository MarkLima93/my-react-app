import React, { useState } from 'react';
import '../styles/AboutUs.css';
import ConsultationBooking from '../components/ConsultationBooking';

const About = () => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  
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
      <section className="about-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>About Balance Center</h1>
            <div className="divider"></div>
            <p className="tagline">Transforming Lives Through Compassionate Care</p>
          </div>
        </div>
      </section>

      <div className="content-wrapper" style={{ flex: 1 }}>
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

          <section className="promotional-section" style={{
            backgroundColor: '#f8f9fa',
            padding: '60px 20px',
            marginTop: '40px'
          }}>
            <div style={{
              maxWidth: '1200px',
              margin: '0 auto',
              textAlign: 'center'
            }}>
              <h2 style={{
                color: '#4a90e2',
                fontSize: '2.5rem',
                marginBottom: '30px',
                fontWeight: '600'
              }}>Why Choose Balance Center?</h2>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '30px',
                marginTop: '40px'
              }}>
                <div style={{
                  padding: '30px',
                  backgroundColor: 'white',
                  borderRadius: '10px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    marginBottom: '15px',
                    color: '#333'
                  }}>Excellence in Care</h3>
                  <p style={{
                    color: '#666',
                    lineHeight: '1.6'
                  }}>Our dedicated team of professionals delivers exceptional care services tailored to each individual's unique needs.</p>
                </div>

                <div style={{
                  padding: '30px',
                  backgroundColor: 'white',
                  borderRadius: '10px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    marginBottom: '15px',
                    color: '#333'
                  }}>Compassionate Approach</h3>
                  <p style={{
                    color: '#666',
                    lineHeight: '1.6'
                  }}>We combine professional expertise with genuine care and empathy to ensure the best possible experience.</p>
                </div>

                <div style={{
                  padding: '30px',
                  backgroundColor: 'white',
                  borderRadius: '10px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    marginBottom: '15px',
                    color: '#333'
                  }}>Trusted Experience</h3>
                  <p style={{
                    color: '#666',
                    lineHeight: '1.6'
                  }}>With over 13 years of experience and 1000+ families served, we're a name you can trust for quality care.</p>
                </div>
              </div>

              <div style={{
                marginTop: '50px',
                padding: '30px',
                backgroundColor: 'white',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}>
                <h3 style={{
                  fontSize: '1.8rem',
                  color: '#4a90e2',
                  marginBottom: '20px'
                }}>Your Journey to Better Care Starts Here</h3>
                <p style={{
                  color: '#666',
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  maxWidth: '800px',
                  margin: '0 auto 20px'
                }}>Experience the difference with Balance Center's personalized care services. We're committed to enhancing the quality of life for every individual we serve.</p>
                <button 
                  onClick={() => setIsConsultationModalOpen(true)}
                  style={{
                    backgroundColor: '#4a90e2',
                    color: 'white',
                    padding: '15px 30px',
                    border: 'none',
                    borderRadius: '5px',
                    fontSize: '1.1rem',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease'
                  }}
                >Schedule a Consultation</button>
              </div>
            </div>
          </section>
        </div>
      </div>

      <footer style={footerStyle}>
        © 2024 by Balance Center LLC
      </footer>

      <ConsultationBooking 
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </div>
  );
};

export default About; 