import React from 'react'
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.header}>Header
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login / Sign Up</Link>
      </nav>
    </div>
  );
}

export default Header