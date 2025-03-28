import { useState } from "react";
import styles from "../styles/components/MobileNavBar.module.css";
import SideMenu from "./SideMenu";
import MobileSearchView from "./MobileSearchView";
import { Link } from 'react-router-dom';
import {
  DepopLogo,
  LikeIcon,
  BagIcon,
  MenuIcon,
  LensIcon
} from "../assets/depop-svg";


const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.topSection}>
        <button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon />
        </button>
        
        <Link to="/" className={styles['depop-logo']}>
          <DepopLogo />
        </Link>

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
          <input
            type="text"
            placeholder="Search for anything"
            className={styles.searchInput}
            onFocus={() => setIsSearchFocused(true)}
          />
        </div>
      </div>

      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />

      {isSearchFocused && (
        <MobileSearchView closeSearchView={() => setIsSearchFocused(false)} />
      )}
    </nav>
  );
};

export default MobileNavBar;
