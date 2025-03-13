import React, { useState } from "react";
import styles from "../styles/components/Navbar.module.css";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-title"]}>MyApp</div>
      <SearchBar />
      <div className={styles["navbar-controls"]}>
        <button className={`${styles.button} ${styles["button-blue"]}`}>Button 1</button>
        <button className={`${styles.button} ${styles["button-green"]}`}>Button 2</button>
      </div>
    </nav>
  );
};

export default Navbar;