import React, { useState } from 'react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
    onClose();
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
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
              />
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

          <div className="form-footer">
            <button type="submit" className="submit-button">Schedule Consultation</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ScheduleAppointment; 