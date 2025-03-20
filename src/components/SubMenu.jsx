import styles from "../styles/components/SubMenu.module.css";
import { CancelIcon } from "../assets/svg/Cancel";
import { ArrowBackIcon } from "../assets/svg/ArrowBack";

const SubMenu = ({ activeMenu, setActiveMenu, setIsOpen }) => {
  return (
    <div className={`${styles.subMenu} ${activeMenu ? styles.visible : ""}`}>
      <div className={styles.subMenuHeader}>
        <button onClick={() => setActiveMenu(null)} className={styles.backButton}>
          <ArrowBackIcon />
        </button>
        <button onClick={() => { setActiveMenu(null); setIsOpen(false); }} className={styles.closeButton}>
          <CancelIcon />
        </button>
      </div>
      <h3>{activeMenu}</h3>
      <p>Content for {activeMenu}</p>
    </div>
  );
};

export default SubMenu;
