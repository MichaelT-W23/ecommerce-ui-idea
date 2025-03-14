import React from "react";
import styles from "../styles/components/Navbar.module.css";
import SearchBar from "./SearchBar";
import { DepopLogo } from "../assets/svg/DepopLogo";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-title"]}>MyApp</div>
      <DepopLogo />
      <SearchBar />
      <div className={styles["navbar-controls"]}>
        <button className={`${styles.button} ${styles["button-blue"]}`}>Button 1</button>
        <button className={`${styles.button} ${styles["button-green"]}`}>Button 2</button>
      </div>
    </nav>
  );
};

export default Navbar;