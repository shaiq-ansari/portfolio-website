import React, { useState } from "react";
import projectsData from "../../data/projectsData";
import styles from "./ProjectCategories.module.css";

const ProjectCategories = () => {
  const categories = ["All", ...new Set(projectsData.map((item) => item.category))];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className={styles.projectSection}>
      <div className={styles.categories}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.categoryButton} ${
              selectedCategory === category ? styles.active : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.projectGrid}>
        {currentProjects.map((project) => (
          <a
            key={project.id}
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectCard}
          >
            <img src={project.imageUrl} alt={project.title} className={styles.projectImage} />
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.techStack}>
                {project.technologies.map((tech, index) => (
                  <span key={index} className={styles.techBadge}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => (
            <button
              key={number}
              className={`${styles.pageButton} ${
                currentPage === number ? styles.activePage : ""
              }`}
              onClick={() => handlePageChange(number)}
            >
              {number}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProjectCategories;
