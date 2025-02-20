import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaCalendar, FaClock, FaComments, FaCheckCircle } from 'react-icons/fa';

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
  const [showSuccess, setShowSuccess] = useState(false);

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
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        serviceType: '',
        message: ''
      });
    }, 2000);
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
    zIndex: 1000,
    padding: '0.5rem'
  };

  const contentStyle = {
    backgroundColor: 'white',
    padding: '1rem 1rem 0.5rem 1rem',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '340px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const successStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    zIndex: 2,
    padding: '2rem',
    boxShadow: 'inset 0 0 20px rgba(74, 144, 226, 0.1)'
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '0.5rem',
    right: '0.5rem',
    background: 'none',
    border: 'none',
    fontSize: '1.25rem',
    cursor: 'pointer',
    color: '#666'
  };

  const formStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  };

  const inputGroupStyle = {
    position: 'relative',
    width: '100%'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    paddingLeft: '1.75rem',
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    fontSize: '0.85rem',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    boxSizing: 'border-box',
    height: '32px'
  };

  const iconStyle = {
    position: 'absolute',
    left: '0.5rem',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#4a90e2',
    fontSize: '0.8rem'
  };

  const buttonStyle = {
    width: '100%',
    padding: '0.5rem',
    backgroundColor: '#4a90e2',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '0.9rem',
    cursor: 'pointer',
    height: '32px',
    marginTop: '0.25rem'
  };

  return (
    <div style={modalStyle}>
      <div style={contentStyle}>
        {showSuccess ? (
          <div style={successStyle}>
            <div style={{
              backgroundColor: '#4a90e2',
              borderRadius: '50%',
              padding: '1rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 4px 12px rgba(74, 144, 226, 0.3)'
            }}>
              <FaCheckCircle size={40} color="white" />
            </div>
            <h3 style={{ 
              color: '#2c3e50',
              marginTop: '1.5rem',
              textAlign: 'center',
              fontSize: '1.5rem',
              fontWeight: '600'
            }}>Thank You!</h3>
            <p style={{ 
              color: '#2c3e50',
              textAlign: 'center',
              fontSize: '1.1rem',
              margin: '0.5rem 0',
              fontWeight: '500'
            }}>Your booking has been confirmed</p>
            <p style={{ 
              color: '#666',
              textAlign: 'center',
              fontSize: '0.9rem',
              margin: '0.5rem 0',
              maxWidth: '280px',
              lineHeight: '1.4'
            }}>We'll contact you within 24 hours to discuss the details of your appointment.</p>
          </div>
        ) : (
          <>
            <button style={closeButtonStyle} onClick={onClose}>×</button>
            
            <h2 style={{ 
              color: '#4a90e2', 
              textAlign: 'center', 
              margin: '0 0 0.25rem 0',
              fontSize: '1.5rem',
              lineHeight: '1'
            }}>Schedule Now</h2>
            
            <p style={{ 
              textAlign: 'center', 
              color: '#666', 
              margin: '0 0 0.5rem 0',
              fontSize: '0.8rem',
              lineHeight: '1.2'
            }}>Let's discuss how we can help you or your loved ones</p>

            <form onSubmit={handleSubmit} style={formStyle}>
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
                    height: '60px',
                    paddingLeft: '0.5rem',
                    resize: 'none'
                  }}
                />
              </div>

              <button type="submit" style={buttonStyle}>
                Schedule Now
              </button>
            </form>

            <p style={{ 
              textAlign: 'center', 
              margin: '0.5rem 0 0 0', 
              fontSize: '0.75rem', 
              color: '#666',
              lineHeight: '1.2'
            }}>
              We'll get back to you within 24 hours to confirm your consultation
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ScheduleAppointment; 