import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import SeniorCare from './pages/SeniorCare';
import ChildCare from './pages/ChildCare';
import SpecialNeeds from './pages/SpecialNeeds';
import About from './pages/About';
import Contact from './components/Contact';
import ScheduleAppointment from './components/ScheduleAppointment';

function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://www.senior1care.com/wp-content/uploads/2023/12/Compassionately-Helping-Those-With-Dementia-as-a-Professional-Caregiver.png",
      title: "Professional Senior Care",
      description: "Compassionate care services tailored to your loved ones' needs"
    },
    {
      image: "https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2021/08/daycare.jpg",
      title: "Quality Child Care",
      description: "Nurturing environment for your child's growth and development"
    },
    {
      image: "https://www.borgenmagazine.com/wp-content/uploads/2014/08/special-needs-children-in-developing-countries_opt.jpg",
      title: "Special Needs Support",
      description: "Specialized care services for individuals with unique needs"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="hero-section">
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              opacity: index === currentSlide ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out'
            }}
          >
            <img 
              src={slide.image} 
              alt={slide.title} 
            />
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
        <div className="slide-indicators">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>

      <div className="service-cards">
        <div className="service-card">
          <div className="service-card-image">
            <img 
              src="https://abetterwayinhomecare.com/wp-content/uploads/2024/11/1fe62bf24d3590aaa6e8fd7c6f9843d9.jpg"
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
          <NavLink to="/child-care" className="explore-button">Learn More</NavLink>
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
          <NavLink to="/special-needs" className="explore-button">Learn More</NavLink>
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img 
                src="https://static.wixstatic.com/media/4ca325_aebf1ad82d38463ba80def4e127d8322~mv2.png/v1/fill/w_194,h_168,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Balance%20Center%20Home%20Care%20Logo%20Small.png"
                alt="Balance Center Logo"
                style={{ height: '40px', width: 'auto' }}
              />
              <h1 style={{ margin: 0, fontSize: '1.5rem', color: '#4a90e2' }}>Balance Center</h1>
            </div>
          </div>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>HOME</NavLink>
            <NavLink to="/senior-care" onClick={() => setIsMenuOpen(false)}>SENIOR CARE</NavLink>
            <NavLink to="/child-care" onClick={() => setIsMenuOpen(false)}>CHILD CARE</NavLink>
            <NavLink to="/special-needs" onClick={() => setIsMenuOpen(false)}>SPECIAL NEEDS</NavLink>
            <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>ABOUT US</NavLink>
            <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>CONTACT</NavLink>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/senior-care" element={<SeniorCare />} />
          <Route path="/child-care" element={<ChildCare />} />
          <Route path="/special-needs" element={<SpecialNeeds />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
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
