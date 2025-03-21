import React from "react";
import styles from "../styles/components/Navbar.module.css";
import SearchBar from "./SearchBar";
import { DepopLogo } from "../assets/svg/DepopLogo";
import { LikeIcon } from "../assets/svg/Like";
import { BagIcon } from "../assets/svg/Bag";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles['depop-logo']}>
        <DepopLogo />
      </Link>

      <div className={styles['search-bar-wrapper']}>
        <div className={styles['search-bar']}>
          <SearchBar />
        </div>
      </div>
      
      <div className={styles["navbar-controls"]}>

        <div className={styles['heart-icon']}>
          <LikeIcon />
        </div>

        <div className={styles["bag-icon"]}>
          <BagIcon />
        </div>
        
        <button className={`${styles.button} ${styles["sell-now-btn"]}`}>
          Sell now
        </button>
        <button className={`${styles.button} ${styles["sign-up-btn"]}`}>
          Sign Up
        </button>
        <button className={`${styles.button} ${styles["log-in-btn"]}`}>
          Log in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;