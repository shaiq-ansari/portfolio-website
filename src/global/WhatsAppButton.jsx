import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './WhatsAppButton.module.css';

const WhatsAppButton = () => {
  const phoneNumber = '923368458145'; // Replace with your WhatsApp number without '+' or '-' 

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className={styles.whatsappButton}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className={styles.whatsappIcon} />
    </a>
  );
};

export default WhatsAppButton;
