import { DepopLogo } from "../assets/svg/DepopLogo";
import { CancelIcon } from "../assets/svg/Cancel";
import styles from "../styles/components/SideMenu.module.css";

const SideMenu = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`${styles.sideMenu} ${isOpen ? styles.open : ""}`}>
      <div className={styles.header}>
        {/* DepopLogo on the top-left */}
        <button onClick={() => setIsOpen(false)} className={styles.logoContainer}>
          <DepopLogo />
        </button>
        {/* Close Button on the top-right */}
        <button onClick={() => setIsOpen(false)} className={styles.closeButton}>
          <CancelIcon />
        </button>
      </div>

      {/* Buttons below the logo */}
      <div className={styles.menuButtons}>
        <button className={`${styles.menuBtn} ${styles.sellNowBtn}`}>
          Sell now
        </button>
        <button className={`${styles.menuBtn} ${styles.signUpBtn}`}>
          Sign up
        </button>
        <button className={`${styles.menuBtn} ${styles.logInBtn}`}>
          Log in
        </button>
      </div>
    </div>
  );
};

export default SideMenu;
