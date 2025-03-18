import { DepopLogo } from "../assets/svg/DepopLogo";
import { CancelIcon } from "../assets/svg/Cancel";
import styles from "../styles/components/SideMenu.module.css";

const SideMenu = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`${styles.sideMenu} ${isOpen ? styles.open : ""}`}>
      <div className={styles.header}>
        {/* DepopLogo on the top-left */}
        <div className={styles.logoContainer}>
          <DepopLogo />
        </div>
        {/* Close Button on the top-right */}
        <button onClick={() => setIsOpen(false)} className={styles.closeButton}>
          <CancelIcon />
        </button>
      </div>

      <h2 className={styles.title}>Sidebar Menu</h2>
      <ul className={styles.menuList}>
        <li className={styles.menuItem}>Home</li>
        <li className={styles.menuItem}>About</li>
        <li className={styles.menuItem}>Services</li>
        <li className={styles.menuItem}>Contact</li>
      </ul>
    </div>
  );
};

export default SideMenu;
