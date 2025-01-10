import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import SeniorCare from './pages/SeniorCare';
import ChildCare from './pages/ChildCare';
import SpecialNeeds from './pages/SpecialNeeds';
import About from './pages/About';
import ScheduleAppointment from './components/ScheduleAppointment';

function HomePage() {
  return (
    <div className="hero-section">
      <div className="service-cards">
        <div className="service-card">
          <div className="service-card-image">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx4qR2hp1QZqKzv-5NVHXMXHzRgibljrX5EQ&s"
              alt="Happy elderly couple receiving care"
              className="card-image"
            />
          </div>
          <h2>Senior Care</h2>
          <p>Our senior care services are designed to provide the support and assistance needed for a comfortable and fulfilling lifestyle. From companionship to medication reminders, our caregivers are here to help seniors maintain their independence at home.</p>
          <a href="/senior-care" className="explore-button">Learn More</a>
        </div>

        <div className="service-card">
          <div className="service-card-image">
            <img 
              src="https://static.wixstatic.com/media/4ca325_ba3f23f8e44b45d59c2cd9ba607797fa~mv2.jpg/v1/fill/w_515,h_490,al_c,lg_1,q_80,enc_avif,quality_auto/BC%20Child%20care.jpg"
              alt="Children playing and having fun together"
              className="card-image"
            />
          </div>
          <h2>Child Care</h2>
          <p>We understand every child is unique and deserves personalized care. Our caregivers provide a safe, nurturing environment where children can play and learn, tailored to your child's needs, ensuring comfort and happiness, all within the familiarity of your home.</p>
          <Link to="/child-care" className="explore-button">Learn More</Link>
        </div>

        <div className="service-card">
          <div className="service-card-image">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk2DCvVJht5HWCqA3pRzfmPtqYA7gyaXf5KQ&s"
              alt="Special needs care and support"
              className="card-image"
            />
          </div>
          <h2>Special Needs Care</h2>
          <p>We understand the unique needs of individuals with special needs and provide compassionate care to support them. Our trained caregivers offer personalized attention, ensuring their comfort and well-being.</p>
          <Link to="/special-needs" className="explore-button">Learn More</Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <BrowserRouter>
      <div className="App" style={{ backgroundColor: '#e6f3ff', minHeight: '100vh' }}>
        <nav className="navbar">
          <div className="logo">
            <h1 style={{ margin: 0, fontSize: '1.5rem', color: '#4a90e2' }}>Balance Center</h1>
          </div>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>HOME</Link>
            <Link to="/senior-care" onClick={() => setIsMenuOpen(false)}>SENIOR CARE</Link>
            <Link to="/child-care" onClick={() => setIsMenuOpen(false)}>CHILD CARE</Link>
            <Link to="/special-needs" onClick={() => setIsMenuOpen(false)}>SPECIAL NEEDS</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>ABOUT US</Link>
            <Link to="#contact" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/senior-care" element={<SeniorCare />} />
          <Route path="/child-care" element={<ChildCare />} />
          <Route path="/special-needs" element={<SpecialNeeds />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <div className="consultation-banner">
          <div className="consultation-content">
            <h2>Start Your Care Journey Today</h2>
            <button 
              className="get-started-button"
              onClick={() => setIsScheduleModalOpen(true)}
            >
              Schedule Now
            </button>
          </div>
        </div>

        <ScheduleAppointment 
          isOpen={isScheduleModalOpen}
          onClose={() => setIsScheduleModalOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
