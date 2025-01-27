import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import styles from './GetQuote.module.css';
import Navbar from '../global/Navbar';

const GetQuote = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,  // Using Vite environment variable
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Using Vite environment variable
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY  // Using Vite environment variable
      )
      .then(
        () => {
          setStatusMessage('✅ Quote request sent successfully!');
          form.current.reset();
        },
        () => {
          setStatusMessage('❌ Failed to send the request. Please try again.');
        }
      );
  };

  // Auto dismiss the success message after 4 seconds
  useEffect(() => {
    if (statusMessage) {
      const timer = setTimeout(() => setStatusMessage(''), 4000);
      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  return (
    <>
      <Navbar />
      <section className={styles.getQuoteSection}>
        <h2 className={styles.heading}>Get a Free Quote</h2>
        <form ref={form} onSubmit={sendEmail} className={styles.getQuoteForm}>
          <input type="hidden" name="request_type" value="Get Quote" />

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className={styles.inputField}
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className={styles.inputField}
          />
          <input
            type="text"
            name="project_details"
            placeholder="Project Details"
            required
            className={styles.inputField}
          />
          <input
            type="text"
            name="budget"
            placeholder="Budget Range"
            required
            className={styles.inputField}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className={styles.textarea}
          />
          <button type="submit" className={styles.submitButton}>
            Submit Request
          </button>
        </form>
        {statusMessage && <p className={styles.statusMessage}>{statusMessage}</p>}
      </section>
    </>
  );
};

export default GetQuote;
