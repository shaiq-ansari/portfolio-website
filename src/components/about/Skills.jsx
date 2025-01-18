import styles from './Skills.module.css';
import SkillsCard from './SkillsCard';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiBootstrap, SiMysql } from 'react-icons/si';

const SkillsSection = () => {
  const skills = [
    { icon: <FaHtml5 color="#E44D26" />, title: 'HTML5' },
    { icon: <FaCss3Alt color="#1572B6" />, title: 'CSS3' },
    { icon: <FaJs color="#F7DF1E" />, title: 'JavaScript' },
    { icon: <FaReact color="#61DAFB" />, title: 'React.js' },
    { icon: <SiNextdotjs color="#000" />, title: 'Next.js' },
    { icon: <SiTailwindcss color="#38B2AC" />, title: 'Tailwind CSS' },
    { icon: <SiBootstrap color="#7952B3" />, title: 'Bootstrap' },  // ✅ Bootstrap Added
    { icon: <FaGitAlt color="#F05032" />, title: 'Git' },
    { icon: <SiTypescript color="#007ACC" />, title: 'TypeScript' },
    { icon: <SiMysql color="#4479A1" />, title: 'MySQL' }           // ✅ MySQL Added
  ];

  return (
    <section className={styles.skillsSection}>
      <h2 data-aos="fade-right">My Skills</h2>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <SkillsCard key={index} icon={skill.icon} title={skill.title} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;