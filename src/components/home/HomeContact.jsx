import React from "react";
import styles from "./HomeContact.module.css";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const HomeContact = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Let's Work Together!</h2>
        <p className={styles.description}>
          Ready to bring your ideas to life? Reach out to me today.
        </p>
        
        <div className={styles.contactButtons}>
          {/* 📧 Email Button */}
          <a href="mailto:muhammadshaiq77@gmail.com" className="btn btn-primary">
            <FaEnvelope /> Email Me
          </a>

          {/* 📞 Phone Button */}
          <a href="tel:+923368458145" className="btn btn-outline">
            < FaPhoneAlt  /> Call Me
          </a>

          {/* ✅ Fiverr Button */}
          <a
            href="https://www.fiverr.com/shaiq07?public_mode=true"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-fiverr"
          >
            <img
              src="/fiverr.png"
              alt="Fiverr"
              width={24}
              height={24}
              style={{ marginRight: "8px" }}
            />
            Hire Me on Fiverr
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
