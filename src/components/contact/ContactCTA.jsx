import React from 'react';
import styles from './ContactCTA.module.css';
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContainer}>
        <h2 className={styles.ctaHeading}>Let’s Work Together!</h2>
        <p className={styles.ctaText}>
          Ready to take your project to the next level? Reach out today and let’s get started!
        </p>
        <div className={styles.ctaButtons}>
          <Link to='/get-a-quote' className={styles.ctaButtonPrimary}>
            Get a Free Quote
          </Link>
          <Link to='/schedule-call' className={styles.ctaButtonSecondary}>
            Schedule a Call Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
