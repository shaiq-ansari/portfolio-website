import styles from './AboutHero.module.css';

const AboutHero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h1 className={styles.heading}>Shaiq Ansari</h1>
          <p className={styles.subheading}>A Passionate Web Develloper specializing in building modern Single Page Web Applications.</p>
          <a 
  href="/Shaiq_Resume.pdf" 
  download="Shaiq_Resume.pdf" 
  className={styles.ctaButton}
>
  Download Resume
</a>
        </div>
        <div className={styles.imageWrapper}>
          <img src="/about/aboutme.png" alt="Profile picture of Shaiq" className={styles.profileImage} />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
