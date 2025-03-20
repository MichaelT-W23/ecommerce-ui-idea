import styles from "../styles/components/SubMenu.module.css";

const SubMenu = ({ activeMenu, setActiveMenu }) => {
  return (
    <div className={`${styles.subMenu} ${activeMenu ? styles.visible : ""}`}>
      <button onClick={() => setActiveMenu(null)} className={styles.backButton}>
        ← Back
      </button>
      <h3>{activeMenu}</h3>
      <p>Content for {activeMenu}</p>
    </div>
  );
};

export default SubMenu;
