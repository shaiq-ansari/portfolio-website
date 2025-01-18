// HomeAbout.jsx
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import styles from './HomeProjects.module.css';
import projectData from '../../data/projectsData';

const HomeProjects = () => {
  // Filter new projects for the homepage
  const newProjects = projectData.filter(project => project.isNew);

  return (
    <section className={styles.aboutHome}>
      <h2 className={styles.title}>Latest Projects</h2>
      <div className={styles.projectList}>
        {newProjects.map(project => (
          <div className={styles.projectCard} key={project.id}>
            <img
              src={project.imageUrl}
              alt={project.title}
              className={styles.projectImage}
            />
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectLinks}>
                <Link to={project.liveLink} target='_blank' className={styles.liveLink}>
                  View Live
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Use Link for internal routing */}
      <Link to="/projects" className={styles.viewAllLink}>
        View All Projects
      </Link>
    </section>
  );
};

export default HomeProjects;
