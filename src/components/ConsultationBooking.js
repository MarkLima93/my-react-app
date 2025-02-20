import React, { useState } from 'react';
import { FaCalendar, FaClock, FaUser, FaPhone, FaEnvelope, FaComments } from 'react-icons/fa';

const ConsultationBooking = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    serviceType: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Consultation Request:', formData);
    // You would typically send this data to your backend
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  };

  const contentStyle = {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '10px',
    width: '90%',
    maxWidth: '600px',
    maxHeight: '90vh',
    overflow: 'auto',
    position: 'relative'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '2rem'
  };

  const formStyle = {
    display: 'grid',
    gap: '1.5rem'
  };

  const inputGroupStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    backgroundColor: '#f8f9fa',
    padding: '0.75rem',
    borderRadius: '5px',
    border: '1px solid #e0e0e0'
  };

  const inputStyle = {
    flex: 1,
    border: 'none',
    background: 'none',
    outline: 'none',
    fontSize: '1rem',
    color: '#333'
  };

  const buttonStyle = {
    backgroundColor: '#4a90e2',
    color: 'white',
    padding: '1rem',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    width: '100%',
    marginTop: '1rem'
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: '#666'
  };

  return (
    <div style={modalStyle}>
      <div style={contentStyle}>
        <button style={closeButtonStyle} onClick={onClose}>&times;</button>
        
        <div style={headerStyle}>
          <h2 style={{ color: '#4a90e2', marginBottom: '0.5rem' }}>Schedule Now</h2>
          <p style={{ color: '#666' }}>Let's discuss how we can help you or your loved ones</p>
        </div>

        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={inputGroupStyle}>
            <FaUser color="#4a90e2" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          <div style={inputGroupStyle}>
            <FaEnvelope color="#4a90e2" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          <div style={inputGroupStyle}>
            <FaPhone color="#4a90e2" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          <div style={inputGroupStyle}>
            <FaCalendar color="#4a90e2" />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          <div style={inputGroupStyle}>
            <FaClock color="#4a90e2" />
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              style={inputStyle}
            >
              <option value="">Select Preferred Time</option>
              <option value="morning">Morning (9AM - 12PM)</option>
              <option value="afternoon">Afternoon (12PM - 4PM)</option>
              <option value="evening">Evening (4PM - 7PM)</option>
            </select>
          </div>

          <div style={inputGroupStyle}>
            <FaComments color="#4a90e2" />
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
              style={inputStyle}
            >
              <option value="">Select Service Type</option>
              <option value="senior">Senior Care</option>
              <option value="child">Child Care</option>
              <option value="special">Special Needs Care</option>
            </select>
          </div>

          <div style={inputGroupStyle}>
            <textarea
              name="message"
              placeholder="Additional Notes or Questions"
              value={formData.message}
              onChange={handleChange}
              style={{
                ...inputStyle,
                minHeight: '100px',
                resize: 'vertical'
              }}
            />
          </div>

          <button type="submit" style={buttonStyle}>
            Schedule Now
          </button>
        </form>

        <p style={{ 
          textAlign: 'center', 
          marginTop: '1rem', 
          fontSize: '0.9rem', 
          color: '#666' 
        }}>
          We'll get back to you within 24 hours to confirm your consultation
        </p>
      </div>
    </div>
  );
};

export default ConsultationBooking; 