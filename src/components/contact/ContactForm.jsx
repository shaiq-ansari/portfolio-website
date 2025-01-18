import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,      // Using environment variable
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,     // Using environment variable
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY       // Using environment variable
      )
      .then(
        (result) => {
          setStatusMessage('✅ Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          setStatusMessage('❌ Failed to send the message. Please try again.');
        }
      );
  };

  return (
    <section className={styles.contactSection}>
      <h2 className={styles.heading}>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
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
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className={styles.textarea}
        />
        <button type="submit" className={styles.submitButton}>
          Send Message
        </button>
      </form>
      {statusMessage && <p className={styles.statusMessage}>{statusMessage}</p>}
    </section>
  );
};

export default ContactForm;
