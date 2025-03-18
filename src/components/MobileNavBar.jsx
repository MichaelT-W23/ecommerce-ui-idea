import { useState } from "react";
import styles from "../styles/components/MobileNavBar.module.css";

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
        Open
      </button>
    </nav>
  );
};

export default MobileNavBar;
