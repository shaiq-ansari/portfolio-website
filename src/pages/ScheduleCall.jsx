import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ScheduleCall.module.css';
import Navbar from '../global/Navbar';

const ScheduleCall = () => {
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
          setStatusMessage('✅ Call request sent successfully!');
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
      <section className={styles.scheduleCallSection}>
        <h2 className={styles.heading}>Schedule a Call</h2>
        <form ref={form} onSubmit={sendEmail} className={styles.scheduleCallForm}>
          <input type="hidden" name="request_type" value="Schedule Call" />

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
            type="datetime-local"
            name="call_datetime"
            required
            className={styles.inputField}
          />
          <input
            type="text"
            name="call_topic"
            placeholder="Call Topic"
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

export default ScheduleCall;
