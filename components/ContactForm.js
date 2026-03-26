'use client';

import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'MERN Stack',
    message: ''
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({ name: '', email: '', phone: '', course: 'MERN Stack', message: '' });
      } else {
        throw new Error('Failed to send inquiry. Please try again later.');
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message });
    }
  };

  return (
    <div className={styles.formWrapper}>
      <h2 className={styles.formTitle}>Quick <span className={styles.accent}>Enroll</span></h2>
      <p className={styles.formSubtitle}>Send us your details and we'll reach out to you within 24 hours.</p>

      <form onSubmit={handleSubmit} className={styles.formBox}>
        <div className={styles.inputGroup}>
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className={styles.inputRow}>
          <div className={styles.inputGroup}>
            <input 
              type="email" 
              name="email" 
              placeholder="Email Address" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className={styles.inputGroup}>
            <input 
              type="tel" 
              name="phone" 
              placeholder="Phone Number" 
              value={formData.phone} 
              onChange={handleChange} 
              required 
            />
          </div>
        </div>
        <div className={styles.inputGroup}>
          <select name="course" value={formData.course} onChange={handleChange}>
            <option value="MERN Stack">MERN Stack Development</option>
            <option value="Java">Java Full Stack</option>
            <option value="Python">Python Development</option>
            <option value="C/C++">C / C++ Programming基础</option>
            <option value="Testing">Software Testing (Manual+Auto)</option>
          </select>
        </div>
        <div className={styles.inputGroup}>
          <textarea 
            name="message" 
            rows="4" 
            placeholder="Tell us about your background or goals..." 
            value={formData.message} 
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button 
          type="submit" 
          className={styles.submitBtn} 
          disabled={status.loading}
        >
          {status.loading ? 'Sending...' : 'Send Inquiry'}
        </button>

        {status.success && <p className={styles.successMsg}>✓ Inquiry sent! We'll call you soon.</p>}
        {status.error && <p className={styles.errorMsg}>✕ {status.error}</p>}
      </form>
    </div>
  );
}
