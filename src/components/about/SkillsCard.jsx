import styles from './Skills.module.css';
import { motion } from 'framer-motion';

const SkillsCard = ({ icon, title }) => {
  return (
    <motion.div
      className={styles.skillCard}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      data-aos="fade-up"
    >
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
    </motion.div>
  );
};

export default SkillsCard;
