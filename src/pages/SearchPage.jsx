import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './SearchPage.module.css'; // Import SearchPage CSS
import projectData from "../data/projectsData";
import Navbar from '../global/Navbar';

const SearchPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('query')?.toLowerCase() || '';

  // Filter projects based on the search term
  const filteredProjects = projectData.filter(project =>
    project.title.toLowerCase().includes(searchQuery) ||
    project.description.toLowerCase().includes(searchQuery) ||
    project.type.toLowerCase().includes(searchQuery) ||
    project.category.toLowerCase().includes(searchQuery) ||
    project.technologies.some(tech => tech.toLowerCase().includes(searchQuery))
  );

  return (
    <>
    <Navbar />
    <div className={styles.searchPage}>
      <h2>Search Results for "{searchQuery}"</h2>
      <div className={styles.projectsContainer}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map(project => (
            <div key={project.id} className={styles.projectCard}>
              <img src={project.imageUrl} alt={project.title} className={styles.projectImage} />
              <div className={styles.projectDetails}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <br/>
                <p className={styles.projectDescription}>{project.description}</p>
                <br/>
                {/* <p className={styles.projectCategory}>Category: {project.category}</p> */}
                <p className={styles.projectType}>Type: {project.type}</p>
                {/* <p className={styles.projectTechnologies}>Technologies: {project.technologies.join(', ')}</p> */}
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={styles.liveLink}>Live Demo</a>
              </div>
            </div>
          ))
        ) : (
          <p>No projects found.</p>
        )}
      </div>
    </div>
    </>
  );
};

export default SearchPage;
