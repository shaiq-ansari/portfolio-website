import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import styles from './HomeHero.module.css';

import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss } from "react-icons/si";

const HomeHero = () => {
  const techNames = ["HTML5", "CSS3", "JavaScript", "React", "TailwindCSS"];
  const [currentTech, setCurrentTech] = useState("HTML5");

  const getTechIcon = (tech) => {
    const animationStyle = {
      animation: 'fadeIn 0.5s ease-in-out, float 3s ease-in-out infinite'
    };

    switch (tech) {
      case "HTML5":
        return <SiHtml5 color="#E34F26" size={60} style={animationStyle} />;
      case "CSS3":
        return <SiCss3 color="#1572B6" size={60} style={animationStyle} />;
      case "JavaScript":
        return <SiJavascript color="#F7DF1E" size={60} style={animationStyle} />;
      case "React":
        return <SiReact color="#61DAFB" size={60} style={animationStyle} />;
      case "TailwindCSS":
        return <SiTailwindcss color="#38B2AC" size={60} style={animationStyle} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prevTech) => {
        const currentIndex = techNames.indexOf(prevTech);
        return techNames[(currentIndex + 1) % techNames.length];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Hi, I am Shaiq Ansari</h1>

        <Typewriter
          options={{ 
            strings: ["Frontend Developer", "Web Developer", "Software Engineer"],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 70,
          }}
        />

        <p className={styles.subtitle}>
          I create modern, responsive, and user-friendly web applications using
        </p>

        <div className={styles.techIcons}>
          {getTechIcon(currentTech)}
        </div>

        <a href="/projects"
        className={styles.ctaButton}>
          View My Work
        </a>
      </div>

      {/* CSS Animations */}
      <style >{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes float {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default HomeHero;
