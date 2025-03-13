import React, { useState } from "react";
import styles from "../styles/components/Navbar.module.css";

const Navbar = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-title"]}>MyApp</div>
      <div className={styles["navbar-controls"]}>
        <div className={`${styles.inputContainer} ${isFocused ? styles.focused : ""}`}>
          <input
            type="text"
            className={styles.inputField}
            placeholder="Search..."
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {isFocused && (
            <div className={styles.expandedBackground}>
              <p>nice</p>
              <p>Cool</p>
              <p>versace</p>
              <p>shoes</p>
              <p>friend</p>
            </div>
          )}
        </div>
        <button className={`${styles.button} ${styles["button-blue"]}`}>Button 1</button>
        <button className={`${styles.button} ${styles["button-green"]}`}>Button 2</button>
      </div>
    </nav>
  );
};

export default Navbar;