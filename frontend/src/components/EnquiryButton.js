import React from 'react';
import styles from './EnquiryButton.module.css';

const EnquiryButton = () => {
  const handleEnquiry = () => {
    const phoneNumber = '7715012096'; // Replace with your WhatsApp Business number
    const message = encodeURIComponent('Hello, I would like to make an enquiry about your events.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button className={styles.enquiryButton} onClick={handleEnquiry}>
      Contact Us on WhatsApp
    </button>
  );
};

export default EnquiryButton; 