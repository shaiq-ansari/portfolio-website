import React from "react";
import styles from "./ProjectOverview.module.css";
import { FaLaptopCode } from "react-icons/fa";

const ProjectOverview = () => {
  return (
    <section className={styles.projectOverview}>
      <div className={styles.container}>
        {/* Icon and Title */}
        <h2 className={styles.heading}>
          <FaLaptopCode className={styles.icon} /> My Projects
        </h2>

        {/* Description */}
        <p className={styles.description}>
          Explore my diverse range of projects that showcase my skills in web development,
          design, and problem-solving. Each project reflects my passion for creating modern,
          user-friendly, and impactful solutions.
        </p>
      </div>
    </section>
  );
};

export default ProjectOverview;
