import { useEffect, useRef, useState, useMemo } from "react";
import styles from "../styles/components/MobileSearchView.module.css";
import { LensIcon, CancelIcon } from "../assets/depop-svg";
import searchData from "../assets/SearchData.json";

const MobileSearchView = ({ closeSearchView }) => {
  const inputRef = useRef(null);

  const searchTips = useMemo(
    () => searchData["search-for-tips"].map((item) => `"${item.text}"`), []
  );

  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [displayedTip, setDisplayedTip] = useState(searchTips[0]);
  const [charIndex, setCharIndex] = useState(searchTips[0].length);
  const [isDeleting, setIsDeleting] = useState(false);
  const [pauseAfterDelete, setPauseAfterDelete] = useState(false);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    const startTimeout = setTimeout(() => {
      setStartTyping(true);
      setIsDeleting(true);
    }, 3000);

    return () => clearTimeout(startTimeout);
  }, []);

  useEffect(() => {
    if (!startTyping) return;

    if (pauseAfterDelete) {
      const timeout = setTimeout(() => {
        setPauseAfterDelete(false);
        setCurrentTipIndex((prev) => (prev + 1) % searchTips.length);
      }, 750);
      return () => clearTimeout(timeout);
    }

    const currentTip = searchTips[currentTipIndex];
    const typingSpeed = isDeleting ? 10 : 20;
    const pauseTime = 1000;

    const typingEffect = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentTip.length) {
          setDisplayedTip((prev) => prev + currentTip[charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setIsDeleting(true);
        }
      } else {
        if (charIndex > 0) {
          setDisplayedTip((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setPauseAfterDelete(true);
        }
      }
    }, charIndex === currentTip.length && !isDeleting ? pauseTime : typingSpeed);

    return () => clearTimeout(typingEffect);
  }, [startTyping, charIndex, isDeleting, currentTipIndex, pauseAfterDelete, searchTips]);

  return (
    <div className={styles.overlay}>
      <div className={styles.searchHeader}>
        <h1>Search</h1>
      </div>

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
          placeholder={`Search for ${displayedTip}`}
          className={styles.searchInput}
        />
      </div>
    </div>
  );
};

export default MobileSearchView;
