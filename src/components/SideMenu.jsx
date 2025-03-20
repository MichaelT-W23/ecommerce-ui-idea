import { useState } from "react";
import { DepopLogo } from "../assets/svg/DepopLogo";
import { CancelIcon } from "../assets/svg/Cancel";
import { ArrowForwardIcon } from "../assets/svg/ArrowForward";
import SubMenu from "./SubMenu";
import styles from "../styles/components/SideMenu.module.css";

const menuItems = ["Men", "Women", "Kids", "Sports", "Brands", "Sale"];

const SideMenu = ({ isOpen, setIsOpen }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div className={`${styles.sideMenu} ${isOpen ? styles.open : ""}`}>

      <div className={styles.menuWrapper}>
        <div className={`${styles.menuContainer} ${activeMenu ? styles.hidden : ""}`}>
          <div className={styles.header}>
            <button onClick={() => setIsOpen(false)} className={styles.logoContainer}>
              <DepopLogo />
            </button>
            <button onClick={() => setIsOpen(false)} className={styles.closeButton}>
              <CancelIcon />
            </button>
          </div>

          <div className={styles.menuButtons}>
            <button className={`${styles.menuBtn} ${styles.sellNowBtn}`}>Sell now</button>
            <button className={`${styles.menuBtn} ${styles.signUpBtn}`}>Sign up</button>
            <button className={`${styles.menuBtn} ${styles.logInBtn}`}>Log in</button>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.menuList}>
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={styles.menuItem}
                onClick={() => setActiveMenu(item)}
              >
                <span>{item}</span>
                <ArrowForwardIcon />
              </div>
            ))}
          </div>
        </div>

        <SubMenu 
          activeMenu={activeMenu} 
          setActiveMenu={setActiveMenu} 
        />
      </div>
    </div>
  );
};

export default SideMenu;