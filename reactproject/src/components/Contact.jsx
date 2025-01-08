import React, { useState } from 'react';
import '../styles/style.css';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa'; // Importing icons for social media, email, and phone

function Contact() {
  return (
    <div className="contact-page">
      <div className="container py-5">
        <h1 className="text-center mb-4 text-primary">Contact Us</h1>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <ScheduleMeeting />
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <ContactForm />
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <CustomerCare />
          </div>
        </div>
      </div>
    </div>
  );
}

function ScheduleMeeting() {
  return (
    <div className="schedule-meeting bg-light p-4 rounded shadow-sm">
      <h2 className="text-primary">Schedule a Meeting</h2>
      <p>Need a one-on-one consultation? Schedule a meeting with us.</p>
      <button className="btn btn-primary w-100">Schedule Now</button>
    </div>
  );
}

function ContactForm() {
  const [countryCode, setCountryCode] = useState('+91'); // Default country code

  // List of country codes
  const countryList = [
    { code: '+1', country: 'United States' },
    { code: '+44', country: 'United Kingdom' },
    { code: '+91', country: 'India' },
    { code: '+61', country: 'Australia' },
    { code: '+81', country: 'Japan' },
    { code: '+49', country: 'Germany' },
    { code: '+33', country: 'France' },
    { code: '+39', country: 'Italy' },
  ];

  return (
    <div className="contact-form bg-light p-4 rounded shadow-sm">
      <h2 className="text-primary">We're Here to Help</h2>
      <p>Got a question or need support? Reach out to us, and we’ll get back to you within 1-2 business days.</p>

      <form className="contact-form-fields">
        <input type="text" placeholder="Your Name" required className="form-control mb-3" />
        <input type="email" placeholder="Your Email" required className="form-control mb-3" />

        {/* Country Code and Phone Number Section */}
        <div className="input-group mb-3">
          <select
            className="form-select"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
          >
            {countryList.map((country) => (
              <option key={country.code} value={country.code}>
                {country.code} - {country.country}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Your Phone Number"
            required
            className="form-control"
            pattern="\d*"
            minLength="10"
            maxLength="15"
          />
        </div>

        <input type="text" placeholder="Subject (Optional)" className="form-control mb-3" />
        <textarea placeholder="Your Message..." required className="form-control mb-3" rows="4"></textarea>
        <button type="submit" className="btn btn-success w-100">Send Message</button>
      </form>
    </div>
  );
}

function CustomerCare() {
  return (
    <div className="customer-care bg-light p-4 rounded shadow-sm">
      <h2 className="text-primary">Connect to Customer Care</h2>
      <p>For further assistance, please reach out to our support team directly.</p>

      {/* Replaced the words "Email" and "Phone" with icons */}
      <p>
        <FaEnvelope size={20} className="me-2" />
        <a href="mailto:support@workkik.com" className="text-decoration-none">supportbeta@.in</a>
      </p>
      <p>
        <FaPhone size={20} className="me-2" />
        <a href="tel:+1234567890" className="text-decoration-none">11111111</a>
      </p>

      {/* Social Media Icons */}
      <div className="social-icons mt-3">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon btn btn-outline-primary me-2">
          <FaFacebook size={24} /> {/* Facebook Icon */}
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon btn btn-outline-danger me-2">
          <FaInstagram size={24} /> {/* Instagram Icon */}
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon btn btn-outline-info">
          <FaTwitter size={24} /> {/* Twitter Icon */}
        </a>
      </div>
    </div>
  );
}

export default Contact;
