import { useEffect, useRef, useState, useMemo } from "react";
import styles from "../styles/components/MobileSearchView.module.css";
import { LensIcon, CancelIcon, ArrowForwardIcon } from "../assets/depop-svg";
import searchData from "../assets/SearchData.json";

const MobileSearchView = ({ closeSearchView }) => {
  const inputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [trendingSearches, setTrendingSearches] = useState([]);
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);

  // Typing animation state
  const searchTips = useMemo(
    () => searchData["search-for-tips"].map((item) => `"${item.text}"`),
    []
  );
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [displayedTip, setDisplayedTip] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [pauseAfterDelete, setPauseAfterDelete] = useState(false);
  const [startTyping, setStartTyping] = useState(false);

  // Focus input and initialize data
  useEffect(() => {
    setTrendingSearches(searchData["trending-searches"]);
    const storedRecentSearches =
      JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecentSearches(storedRecentSearches);

    if (inputRef.current) inputRef.current.focus();

    const startTimeout = setTimeout(() => {
      setStartTyping(true);
      setIsDeleting(true);
    }, 3000);

    return () => clearTimeout(startTimeout);
  }, []);

  // Initialize tip display
  useEffect(() => {
    if (searchTips.length > 0) {
      setDisplayedTip(searchTips[0]);
      setCharIndex(searchTips[0].length);
    }
  }, [searchTips]);

  // Typing animation
  useEffect(() => {
    if (!startTyping || searchTips.length === 0) return;

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

  // Filter suggestions
  useEffect(() => {
    if (searchTerm.length > 0) {
      const firstLetter = searchTerm[0].toLowerCase();
      const suggestions = searchData["search-data"][firstLetter] || [];
      const filtered = suggestions.filter((s) =>
        s.search.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setIsSuggestionsOpen(true);
    } else {
      setFilteredSuggestions([]);
      setIsSuggestionsOpen(false);
    }
  }, [searchTerm]);

  const handleClearInput = () => {
    setSearchTerm("");
    setIsSuggestionsOpen(false);
  };

  const handleSelectSuggestion = (item) => {
    const selected = item.search || item;
    setSearchTerm(selected);
    setIsSuggestionsOpen(false);

    const updatedRecent = [selected, ...recentSearches.filter((s) => s !== selected)].slice(0, 5);
    setRecentSearches(updatedRecent);
    localStorage.setItem("recentSearches", JSON.stringify(updatedRecent));
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem("recentSearches");
  };

  const highlightMatch = (text, term) => {
    const index = text.toLowerCase().indexOf(term.toLowerCase());
    if (index === -1) return text;
    return (
      <>
        {text.substring(0, index)}
        <b>{text.substring(index, index + term.length)}</b>
        {text.substring(index + term.length)}
      </>
    );
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.searchHeader}>
        <h1>Search</h1>
      </div>

      <div onClick={closeSearchView} className={styles.cancelIcon}>
        <CancelIcon width={24} />
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
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {searchTerm && (
          <button className={styles.closeButton} onClick={handleClearInput}>
            clear
          </button>
        )}

        {searchTerm && (
          <button
            className={styles.forwardButton}
            onClick={() => console.log("Search submitted:", searchTerm)}
          >
            <ArrowForwardIcon width={20} />
          </button>
        )}
      </div>

      <ul className={styles.suggestionsList}>
        {isSuggestionsOpen && filteredSuggestions.length > 0 ? (
          filteredSuggestions.map((item, index) => (
            <li key={index} onMouseDown={() => handleSelectSuggestion(item)}>
              {highlightMatch(item.search, searchTerm)}
              {index < 2 && item.category && (
                <span className={styles["category-text"]}>{item.category}</span>
              )}
            </li>
          ))
        ) : (
          <>
            {recentSearches.length > 0 && (
              <>
                <li className={styles.trendingTitle}>
                  Recent
                  <span className={styles.clearButton} onClick={clearRecentSearches}>
                    Clear
                  </span>
                </li>
                {recentSearches.map((search, index) => (
                  <li key={index} onMouseDown={() => handleSelectSuggestion(search)}>
                    {search}
                  </li>
                ))}
              </>
            )}
            <li className={styles.trendingTitle}>Trending searches</li>
            {trendingSearches.map((search) => (
              <li
                key={search.id}
                onMouseDown={() => handleSelectSuggestion(search.text)}
              >
                {search.text}
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
};

export default MobileSearchView;
