import React from "react";
import styles from "../styles/components/Navbar.module.css";
import SearchBar from "./SearchBar";
import { DepopLogo } from "../assets/svg/DepopLogo";
import { LikeIcon } from "../assets/svg/Like";
import { BagIcon } from "../assets/svg/Bag";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles['depop-logo']}>
      <DepopLogo />
      </div>
      <SearchBar />
      <div className={styles["navbar-controls"]}>
        <LikeIcon />

        <div className={styles["bag-icon"]}>
          <BagIcon />
        </div>
        <button className={`${styles.button} ${styles["sell-now-btn"]}`}>Sell now</button>
        <button className={`${styles.button} ${styles["sign-up-btn"]}`}>Sign Up</button>
        <button className={`${styles.button} ${styles["log-in-btn"]}`}>Log in</button>
      </div>
    </nav>
  );
};

export default Navbar;