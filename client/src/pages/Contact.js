import React from 'react';
import PageLayout from '../components/PageLayout/PageLayout';
import { EmailIcon, PhoneIcon, SupportIcon } from './customIcons'; // Import custom icons

const ContactUs = () => {
  return (
    <PageLayout>
      <div className="contact-section">
        <div className="contact-image-container">
          <img src="/images/contactus.jpeg" alt="Contact Us" />
        </div>
        <div className="contact-info">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-description">
            Have any questions or need information about our products? Feel free to contact us anytime, we're available 24/7.
          </p>
          <ul className="contact-details">
            <li>
              <EmailIcon />: www.help@ecommerceapp.com
            </li>
            <li>
              <PhoneIcon />: 012-3458789
            </li>
            <li>
              <SupportIcon />: 1800-0200-1000 (toll free)
            </li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
};

export default ContactUs;
