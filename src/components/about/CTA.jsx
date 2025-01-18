import styles from './CTA.module.css';
import { FaPaperPlane, FaFileDownload, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.content}>
        <h2>Interested in Working Together?</h2>
        <p>Let's build something amazing! Reach out to discuss your project or view my work.</p>
     
        <div className={styles.buttonGroup}>
     
          <a href="https://www.fiverr.com/shaiq07?public_mode=true" target='_blank' className={styles.hireButton}>
            <FaPaperPlane /> Hire Me
          </a>

          <Link to="/projects" className={styles.portfolioButton}>
          <FaBriefcase /> View Projects
          </Link>
          
          <a href="/Shaiq_Resume.pdf" download className={styles.resumeButton}>
            <FaFileDownload /> Download Resume
          </a>

          <a href="mailto:muhammadshaiq77@gmail.com" className={styles.resumeButton}>
            <FaEnvelope /> Email me
          </a>

        </div>
      </div>
    </section>
  );
};

export default CTA;
