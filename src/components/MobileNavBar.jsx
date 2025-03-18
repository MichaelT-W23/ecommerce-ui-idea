import { useState } from "react";
import styles from "../styles/components/MobileNavBar.module.css";
import { DepopLogo } from "../assets/svg/DepopLogo";
import { LikeIcon } from "../assets/svg/Like";
import { BagIcon } from "../assets/svg/Bag";
import { MenuIcon } from "../assets/svg/Menu";
import { LensIcon } from "../assets/svg/Lens";
import SideMenu from "./SideMenu";

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.topSection}>
        {/* Menu Button to Toggle Sidebar */}
        <button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon />
        </button>

        <div className={styles.rightIcons}>
          <div className={styles["heart-icon"]}>
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
          <input type="text" placeholder="Search for anything" className={styles.searchInput} />
        </div>
      </div>

      {/* Sidebar Component (Controlled by isOpen state) */}
      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};

export default MobileNavBar;
