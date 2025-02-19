import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

function ScheduleAppointment({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const [phoneError, setPhoneError] = useState('');
  const [submitStatus, setSubmitStatus] = useState({ message: '', isError: false });

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key
  }, []);

  const formatPhoneNumber = (value) => {
    // Remove all non-digits
    const phoneNumber = value.replace(/\D/g, '');
    
    // Format the number as XXX-XXX-XXXX
    if (phoneNumber.length <= 3) {
      return phoneNumber;
    } else if (phoneNumber.length <= 6) {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
    } else {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }
  };

  const validatePhoneNumber = (phoneNumber) => {
    // Remove all non-digits for validation
    const cleaned = phoneNumber.replace(/\D/g, '');
    
    // Check if it's a valid 10-digit number
    if (cleaned.length !== 10) {
      return 'Please enter a valid 10-digit phone number';
    }
    
    // Check if the area code is valid (no 0 or 1 as first digit)
    if (cleaned[0] === '0' || cleaned[0] === '1') {
      return 'Please enter a valid area code';
    }
    
    return '';
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    const formatted = formatPhoneNumber(input);
    
    // Only update if we haven't reached max length
    if (input.replace(/\D/g, '').length <= 10) {
      setFormData({...formData, phone: formatted});
    }
    
    // Validate and set error
    setPhoneError(validatePhoneNumber(formatted));
  };

  const sendEmail = async (templateParams) => {
    try {
      const response = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          to_email: 'BalanceCenterCare@gmail.com',
          from_name: templateParams.name,
          from_email: templateParams.email,
          phone_number: templateParams.phone,
          service_type: templateParams.serviceType,
          preferred_date: templateParams.preferredDate,
          preferred_time: templateParams.preferredTime,
          message: templateParams.message
        }
      );

      if (response.status === 200) {
        setSubmitStatus({
          message: 'Consultation scheduled successfully! We will contact you soon.',
          isError: false
        });
        setTimeout(() => {
          onClose();
          setSubmitStatus({ message: '', isError: false });
        }, 3000);
      }
    } catch (error) {
      setSubmitStatus({
        message: 'Failed to schedule consultation. Please try again.',
        isError: true
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if there are any validation errors
    const phoneValidation = validatePhoneNumber(formData.phone);
    if (phoneValidation) {
      setPhoneError(phoneValidation);
      return;
    }
    
    // Send email
    await sendEmail(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="schedule-modal-overlay">
      <div className="schedule-modal">
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2>Schedule a Consultation</h2>
        <p className="modal-subtitle">Let us help you find the perfect care solution</p>
        
        <form onSubmit={handleSubmit} className="schedule-form">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handlePhoneChange}
                placeholder="XXX-XXX-XXXX"
                required
              />
              {phoneError && <span className="error-message" style={{ color: 'red', fontSize: '0.8rem' }}>{phoneError}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="serviceType">Service Type</label>
              <select
                id="serviceType"
                value={formData.serviceType}
                onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                required
              >
                <option value="">Select a service</option>
                <option value="senior">Senior Care</option>
                <option value="child">Child Care</option>
                <option value="special">Special Needs Care</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="preferredDate">Preferred Date</label>
              <input
                type="date"
                id="preferredDate"
                value={formData.preferredDate}
                onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="preferredTime">Preferred Time</label>
              <select
                id="preferredTime"
                value={formData.preferredTime}
                onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                required
              >
                <option value="">Select a time</option>
                <option value="morning">Morning (9AM - 12PM)</option>
                <option value="afternoon">Afternoon (12PM - 4PM)</option>
                <option value="evening">Evening (4PM - 7PM)</option>
              </select>
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="message">Additional Information</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows="4"
            ></textarea>
          </div>

          {submitStatus.message && (
            <div className={`submit-status ${submitStatus.isError ? 'error' : 'success'}`} 
                 style={{ 
                   color: submitStatus.isError ? 'red' : 'green',
                   textAlign: 'center',
                   marginTop: '1rem'
                 }}>
              {submitStatus.message}
            </div>
          )}

          <div className="form-footer">
            <button type="submit" className="submit-button">Schedule Consultation</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ScheduleAppointment; 