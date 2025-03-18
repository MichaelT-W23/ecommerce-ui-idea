import { useState } from "react";
import styles from "../styles/components/MobileNavBar.module.css";
import { DepopLogo } from "../assets/svg/DepopLogo";
import { LikeIcon } from "../assets/svg/Like";
import { BagIcon } from "../assets/svg/Bag";
import { MenuIcon } from "../assets/svg/Menu";
import { LensIcon } from "../assets/svg/Lens";


const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.topSection}>
        <button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
          <div className={styles["menu-icon"]}>
            <MenuIcon />
          </div>
        </button>
        <div className={styles.rightIcons}>
          <div className={styles['heart-icon']}>
            <LikeIcon />
          </div>
  
          <div className={styles["bag-icon"]}>
            <BagIcon />
          </div>
          <button className={styles.signUpButton}>Sign Up</button>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.searchContainer}>
          <span className={styles.searchIcon}>
            <LensIcon />
          </span>
          <input
            type="text"
            placeholder="Search for anything"
            className={styles.searchInput}
          />
        </div>
      </div>
    </nav>
  );
};

export default MobileNavBar;
