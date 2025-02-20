import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaCalendar, FaClock, FaComments } from 'react-icons/fa';

const ScheduleAppointment = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    serviceType: '',
    message: ''
  });

  const [phoneError, setPhoneError] = useState('');

  if (!isOpen) return null;

  const validatePhone = (phone) => {
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneRegex.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      if (!validatePhone(value)) {
        setPhoneError('Please enter a valid phone number (e.g., 123-456-7890)');
      } else {
        setPhoneError('');
      }
    }
    
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePhone(formData.phone)) {
      setPhoneError('Please enter a valid phone number before submitting');
      return;
    }
    console.log('Schedule Request:', formData);
    onClose();
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
    maxWidth: '500px',
    maxHeight: '90vh',
    overflow: 'auto',
    position: 'relative'
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

  const inputGroupStyle = {
    marginBottom: '1rem',
    position: 'relative'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    paddingLeft: '2.5rem',
    border: '1px solid #e0e0e0',
    borderRadius: '5px',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s ease'
  };

  const iconStyle = {
    position: 'absolute',
    left: '0.75rem',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#4a90e2'
  };

  const buttonStyle = {
    width: '100%',
    padding: '1rem',
    backgroundColor: '#4a90e2',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    marginTop: '1rem'
  };

  return (
    <div style={modalStyle}>
      <div style={contentStyle}>
        <button style={closeButtonStyle} onClick={onClose}>×</button>
        
        <h2 style={{ 
          color: '#4a90e2', 
          textAlign: 'center', 
          marginBottom: '0.5rem',
          fontSize: '2rem'
        }}>Schedule Now</h2>
        
        <p style={{ 
          textAlign: 'center', 
          color: '#666', 
          marginBottom: '2rem' 
        }}>Let's discuss how we can help you or your loved ones</p>

        <form onSubmit={handleSubmit}>
          <div style={inputGroupStyle}>
            <FaUser style={iconStyle} />
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
            <FaEnvelope style={iconStyle} />
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
            <FaPhone style={iconStyle} />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number (e.g., 123-456-7890)"
              value={formData.phone}
              onChange={handleChange}
              required
              style={{
                ...inputStyle,
                borderColor: phoneError ? '#ff4444' : '#e0e0e0'
              }}
            />
            {phoneError && (
              <p style={{ 
                color: '#ff4444', 
                fontSize: '0.8rem', 
                marginTop: '0.25rem',
                marginBottom: 0 
              }}>{phoneError}</p>
            )}
          </div>

          <div style={inputGroupStyle}>
            <FaCalendar style={iconStyle} />
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
            <FaClock style={iconStyle} />
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
            <FaComments style={iconStyle} />
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
                paddingLeft: '0.75rem'
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

export default ScheduleAppointment; 