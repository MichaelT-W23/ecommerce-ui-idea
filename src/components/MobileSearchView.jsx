import { useEffect, useRef } from "react";
import styles from "../styles/components/MobileSearchView.module.css";
import { LensIcon, CancelIcon } from "../assets/depop-svg";

const MobileSearchView = ({ closeSearchView }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className={styles.overlay}>
      <div onClick={closeSearchView} className={styles.cancelIcon}>
        <CancelIcon />
      </div>
      
      <div className={styles.searchContainer}>
        <span className={styles.searchIcon}>
          <LensIcon />
        </span>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search for anything"
          className={styles.searchInput}
        />
      </div>
      
      <h1>Search view</h1>
    </div>
  );
};

export default MobileSearchView;
