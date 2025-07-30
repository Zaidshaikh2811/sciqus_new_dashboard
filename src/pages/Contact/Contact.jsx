import React from 'react';
import './Contact.scss';

const Contact = () => (
  <div className="contact-page">
    <h2>Contact Us</h2>
    <p className="contact-desc">We'd love to hear from you! Reach out to us using the information below or fill out the form.</p>
    <div className="contact-info">
      <div><strong>Email:</strong> support@sciqus.com</div>
      <div><strong>Phone:</strong> +1 234 567 8901</div>
      <div><strong>Address:</strong> 123 Main St, City, Country</div>
    </div>
    <form className="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required />
      <button type="submit">Send Message</button>
    </form>
  </div>
);
export default Contact;
