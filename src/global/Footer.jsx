import React from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Navigation Links */}
        <div className={styles.navLinks}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/about" className={styles.navLink}>About</Link>
          <Link to="/projects" className={styles.navLink}>Projects</Link>
          <Link to="/contact" className={styles.navLink}>Contact</Link>
        </div>

        {/* Social Media Links */}
        <div className={styles.socialLinks}>
          <a
            href="https://www.linkedin.com/in/shaiq-ansari/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/shaiqansarii/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/shaiq-ansari"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/shaiqansari07/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaFacebook />
          </a>
        </div>

        {/* Copyright Text */}
        <div className={styles.copyText}>
          <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
