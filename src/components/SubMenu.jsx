import styles from "../styles/components/SubMenu.module.css";
import { CancelIcon, ArrowBackIcon } from "../assets/depop-svg";
import {
  BrandSubMenu,
  KidSubMenu,
  MenSubMenu,
  SaleSubMenu,
  SportSubMenu,
  WomenSubMenu
} from "./SubMenus";

const SubMenu = ({ activeMenu, setActiveMenu, setIsOpen }) => {
  const renderSubMenu = () => {
    switch (activeMenu) {
      case "Men":
        return <MenSubMenu />;
      case "Women":
        return <WomenSubMenu />;
      case "Kids":
        return <KidSubMenu />;
      case "Sports":
        return <SportSubMenu />;
      case "Brands":
        return <BrandSubMenu />;
      case "Sale":
        return <SaleSubMenu />;
      default:
        return null;
    }
  };

  return (
    <div className={`${styles.subMenu} ${activeMenu ? styles.visible : ""}`}>
      <div className={styles.subMenuHeader}>
        <button onClick={() => setActiveMenu(null)} className={styles.backButton}>
          <ArrowBackIcon />
        </button>
        <button
          onClick={() => {
            setActiveMenu(null);
            setIsOpen(false);
          }}
          className={styles.closeButton}
        >
          <CancelIcon />
        </button>
      </div>
      {renderSubMenu()}
    </div>
  );
};

export default SubMenu;
