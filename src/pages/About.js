import React from 'react';

function About() {
  return (
    <div className="about-page">
      <div className="hero-banner">
        <div className="hero-content">
          <h1>Our Journey of Care</h1>
          <p className="hero-text">Transforming Lives Through Compassionate Care Since 2010</p>
        </div>
      </div>

      <div className="about-container">
        <div className="vision-section">
          <div className="vision-card">
            <div className="vision-content">
              <h2>Who We Are</h2>
              <p>Balance Center represents a commitment to excellence in care services, founded on the 
              belief that every individual deserves personalized attention and support. Our journey 
              began with a vision to transform the way care is delivered, and today, we continue to 
              set new standards in comprehensive care solutions.</p>
            </div>
            <div className="stats-row">
              <div className="stat-item">
                <span className="stat-number">13+</span>
                <span className="stat-label">Years of Service</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">200+</span>
                <span className="stat-label">Care Professionals</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pillars-section">
          <h2>Our Foundation</h2>
          <div className="pillars-grid">
            <div className="pillar-item">
              <div className="pillar-icon">🎯</div>
              <h3>Mission</h3>
              <p>To provide exceptional care services that enhance quality of life and promote independence</p>
            </div>
            <div className="pillar-item">
              <div className="pillar-icon">👁️</div>
              <h3>Vision</h3>
              <p>To be the most trusted and respected care provider in our community</p>
            </div>
            <div className="pillar-item">
              <div className="pillar-icon">⭐</div>
              <h3>Values</h3>
              <p>Excellence, Compassion, Integrity, and Dedication in everything we do</p>
            </div>
          </div>
        </div>

        <div className="expertise-section">
          <div className="expertise-content">
            <div className="expertise-text">
              <h2>Our Expertise</h2>
              <p>With over a decade of experience, we've developed comprehensive care programs that address 
              the unique needs of our clients. Our approach combines professional excellence with genuine 
              compassion.</p>
            </div>
            <div className="expertise-cards">
              <div className="expertise-card">
                <h3>Personalized Care</h3>
                <ul>
                  <li>Customized care plans</li>
                  <li>Regular assessments</li>
                  <li>Flexible scheduling</li>
                </ul>
              </div>
              <div className="expertise-card">
                <h3>Professional Team</h3>
                <ul>
                  <li>Licensed caregivers</li>
                  <li>Ongoing training</li>
                  <li>24/7 availability</li>
                </ul>
              </div>
              <div className="expertise-card">
                <h3>Quality Assurance</h3>
                <ul>
                  <li>Regular monitoring</li>
                  <li>Family feedback</li>
                  <li>Continuous improvement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="leadership-section">
          <h2>Leadership Team</h2>
          <div className="leadership-grid">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & CEO",
                experience: "20+ years in healthcare",
                photo: "👤"
              },
              {
                name: "Dr. Michael Chen",
                role: "Medical Director",
                experience: "Board-certified geriatrician",
                photo: "👤"
              },
              {
                name: "Emily Rodriguez",
                role: "Care Services Director",
                experience: "15+ years in care coordination",
                photo: "👤"
              }
            ].map((leader, index) => (
              <div key={index} className="leader-card">
                <div className="leader-photo">{leader.photo}</div>
                <div className="leader-info">
                  <h3>{leader.name}</h3>
                  <p className="leader-role">{leader.role}</p>
                  <p className="leader-exp">{leader.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-banner">
          <div className="contact-content">
            <h2>Ready to Learn More?</h2>
            <p>Contact us today to discuss how we can support your care needs.</p>
            <button className="contact-button">Schedule a Consultation</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; 