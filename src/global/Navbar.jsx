import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
      setMenuOpen(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={styles.logo}>
        <Link to="/">Shaiq</Link>
      </div>

      <ul className={`${styles.navMenu} ${menuOpen ? styles.active : ''}`}>
        <li><Link to="/" className={styles.navItem}>Home</Link></li>
        <li><Link to="/about" className={styles.navItem}>About</Link></li>
        <li><Link to="/projects" className={styles.navItem}>Projects</Link></li>
        <li><Link to="/contact" className={styles.navItem}>Contact</Link></li>
      </ul>

      <div className={styles.searchContainer}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search Projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className={styles.searchButton} onClick={handleSearch}>
          <FaSearch className={styles.searchIcon} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
