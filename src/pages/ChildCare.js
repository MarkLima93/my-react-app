import React from 'react';

function ChildCare() {
  return (
    <div className="senior-care-page">
      <div className="page-header">
        <h1>Child Care Services</h1>
        <p className="header-subtitle">Creating Joyful Learning Experiences for Every Child</p>
      </div>
      
      <div className="content-wrapper">
        <div className="service-details">
          <div className="welcome-banner">
            <div className="info-card">
              <h2>Growing Minds, Happy Hearts</h2>
              <p className="lead-text">
                At Balance Center, we believe every child deserves a nurturing environment where they can 
                learn, play, and grow. Our child care programs combine educational activities with fun, 
                creating an engaging experience that supports your child's development.
              </p>
            </div>
          </div>

          <div className="age-groups-section">
            <h2>Programs by Age Group</h2>
            <div className="age-groups-grid">
              <div className="age-group-item">
                <div className="age-icon">👶</div>
                <h3>Infants (0-12 months)</h3>
                <ul>
                  <li>Nurturing, safe environment</li>
                  <li>Individual care routines</li>
                  <li>Sensory activities</li>
                  <li>Early development support</li>
                </ul>
              </div>
              <div className="age-group-item">
                <div className="age-icon">🚼</div>
                <h3>Toddlers (1-3 years)</h3>
                <ul>
                  <li>Interactive play</li>
                  <li>Basic skill development</li>
                  <li>Social interaction</li>
                  <li>Creative activities</li>
                </ul>
              </div>
              <div className="age-group-item">
                <div className="age-icon">🎨</div>
                <h3>Preschool (3-5 years)</h3>
                <ul>
                  <li>Educational programs</li>
                  <li>Structured activities</li>
                  <li>School readiness</li>
                  <li>Social development</li>
                </ul>
              </div>
              <div className="age-group-item">
                <div className="age-icon">📚</div>
                <h3>School Age (5+ years)</h3>
                <ul>
                  <li>Homework assistance</li>
                  <li>Enrichment activities</li>
                  <li>Supervised recreation</li>
                  <li>Life skills development</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="daily-activities">
            <div className="info-card">
              <h2>A Day at Balance Center</h2>
              <div className="timeline-grid">
                <div className="timeline-item">
                  <span className="time">Morning</span>
                  <h3>Learning & Discovery</h3>
                  <p>Educational activities, reading time, and creative projects</p>
                </div>
                <div className="timeline-item">
                  <span className="time">Midday</span>
                  <h3>Active Play & Lunch</h3>
                  <p>Physical activities, nutritious meals, and social interaction</p>
                </div>
                <div className="timeline-item">
                  <span className="time">Afternoon</span>
                  <h3>Rest & Quiet Time</h3>
                  <p>Nap time for younger children, quiet activities for older ones</p>
                </div>
                <div className="timeline-item">
                  <span className="time">Late Day</span>
                  <h3>Creative Expression</h3>
                  <p>Art, music, and supervised free play activities</p>
                </div>
              </div>
            </div>
          </div>

          <div className="parent-resources">
            <h2>Parent Resources</h2>
            <div className="resources-grid">
              <div className="resource-card">
                <div className="resource-icon">📱</div>
                <h3>Daily Updates</h3>
                <p>Regular progress reports and activity updates through our parent app</p>
              </div>
              <div className="resource-card">
                <div className="resource-icon">📅</div>
                <h3>Flexible Scheduling</h3>
                <p>Full-time, part-time, and drop-in care options available</p>
              </div>
              <div className="resource-card">
                <div className="resource-icon">🍎</div>
                <h3>Nutrition Guide</h3>
                <p>Healthy meal and snack planning for growing children</p>
              </div>
              <div className="resource-card">
                <div className="resource-icon">📝</div>
                <h3>Development Tracking</h3>
                <p>Regular assessments and milestone tracking</p>
              </div>
            </div>
          </div>

          <div className="enrollment-section">
            <div className="info-card">
              <h2>Start Your Child's Journey</h2>
              <div className="enrollment-grid">
                <div className="enrollment-info">
                  <h3>Enroll Today</h3>
                  <p>Give your child the gift of quality care and education. Schedule a tour to learn more about our programs.</p>
                  <button className="cta-button">Schedule a Tour</button>
                </div>
                <div className="enrollment-features">
                  <div className="feature">✓ Safe, Nurturing Environment</div>
                  <div className="feature">✓ Qualified, Caring Staff</div>
                  <div className="feature">✓ Age-Appropriate Programs</div>
                  <div className="feature">✓ Enriching Activities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChildCare; 