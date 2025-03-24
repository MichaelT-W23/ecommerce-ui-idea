import React, { useState, useEffect, useRef, useMemo } from "react";
import styles from "../styles/components/SearchBar.module.css";
import searchData from "../assets/SearchData.json";
import { LensIcon, ArrowForwardIcon } from "../assets/depop-svg";


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [trendingSearches, setTrendingSearches] = useState([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [maxLength, setMaxLength] = useState(0);
  const [recentSearches, setRecentSearches] = useState([]);
  const [isSuggestionsOpen, setSuggestionsOpen] = useState(false);
  const [didUserStartedTyping, setDidUserStartedTyping] = useState(false);
  const [isManualSelection, setIsManualSelection] = useState(false);

  const searchBarRef = useRef(null);

  const searchTips = useMemo(() => 
    searchData["search-for-tips"].map(item => `"${item.text}"`), 
  []);

  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [displayedTip, setDisplayedTip] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [pauseAfterDelete, setPauseAfterDelete] = useState(false);

  useEffect(() => {
    setTrendingSearches(searchData["trending-searches"]);
    const storedRecentSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecentSearches(storedRecentSearches);

    const handleClickOutside = (event) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const firstLetter = searchTerm[0].toLowerCase();
      if (searchData["search-data"][firstLetter]) {
        const suggestions = searchData["search-data"][firstLetter];
        setFilteredSuggestions(suggestions);

        const longestSuggestion = suggestions.reduce((max, item) =>
          item.search.length > max ? item.search.length : max, 0
        );

        setMaxLength(longestSuggestion);
      } else {
        setFilteredSuggestions([]);
        setMaxLength(0);
      }
    } else {
      setFilteredSuggestions([]);
      setMaxLength(0);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (pauseAfterDelete) {
      setTimeout(() => {
        setPauseAfterDelete(false);
        setCurrentTipIndex((prev) => (prev + 1) % searchTips.length);
      }, 750);
      return;
    }

    const typingSpeed = isDeleting ? 10 : 20;
    const pauseTime = 1000;
    const currentTip = searchTips[currentTipIndex];

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
  }, [charIndex, isDeleting, currentTipIndex, pauseAfterDelete, searchTips]);

  // const handleSelectSuggestion = (item) => {
  //   setSearchTerm(item.search);
  //   setIsFocused(false);
  //   setSuggestionsOpen(false);

  //   const updatedRecentSearches = [item.search, ...recentSearches.filter(search => search !== item.search)].slice(0, 5);
  //   setRecentSearches(updatedRecentSearches);
  //   localStorage.setItem("recentSearches", JSON.stringify(updatedRecentSearches));
  // };
  const handleSelectSuggestion = (item) => {
    setSearchTerm(item.search);
    setIsFocused(false);
    setSuggestionsOpen(false);
    setIsManualSelection(true);
  
    const updatedRecentSearches = [item.search, ...recentSearches.filter(search => search !== item.search)].slice(0, 5);
    setRecentSearches(updatedRecentSearches);
    localStorage.setItem("recentSearches", JSON.stringify(updatedRecentSearches));
  };
  

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem("recentSearches");
  };

  const highlightMatch = (text, searchTerm) => {
    const index = text.toLowerCase().indexOf(searchTerm.toLowerCase());
    if (index !== -1) {
      return (
        <>
          {text.substring(0, index)}
          <b>{text.substring(index, index + searchTerm.length)}</b>
          {text.substring(index + searchTerm.length)}
        </>
      );
    }
    return text;
  };

  const handleClearInput = () => {
    setSearchTerm("");
    setDidUserStartedTyping(false);
    setSuggestionsOpen(false);
  };

  return (
    <div
      className={`${styles.inputContainer} ${
        // isFocused &&
        // searchTerm.length <= maxLength &&
        // (searchTerm === "" || filteredSuggestions.length > 0)
        isFocused &&
        (isManualSelection || searchTerm.length <= maxLength) &&
        (searchTerm === "" || filteredSuggestions.length > 0)
          ? styles.active
          : ""
      }`}
      ref={searchBarRef}
    >
      <div className={styles.inputWrapper}>
        <div className={styles.searchIcon}>
          <LensIcon />
        </div>
        <input
          type="text"
          className={`${styles.inputField} ${
            !isManualSelection && searchTerm.length > maxLength && isFocused 
              ? styles.noResultsShadow 
              : ""
          }`}          
          placeholder={
            didUserStartedTyping ? 
            "Search for items, brands, or styles..."
            : `Search for ${displayedTip}`
          }
          value={searchTerm}
          onChange={(e) => {
            setDidUserStartedTyping(true);
            setIsManualSelection(false);
            setSearchTerm(e.target.value);
            setSuggestionsOpen(true);
          }}
          onFocus={() => setIsFocused(true)}
        />
        {searchTerm ? (
          <button className={styles.closeButton} onClick={handleClearInput}>
            clear
          </button>
        ) : null}

        {searchTerm ? (
          <button className={styles.forwardButton}>
            <ArrowForwardIcon width={20}/>
          </button>
        ) : null}
      </div>
      {/* {isFocused && 
        searchTerm.length <= maxLength &&
        (searchTerm === "" || filteredSuggestions.length > 0) && ( */}
      {isFocused &&
       (isManualSelection || searchTerm.length <= maxLength) &&
       (searchTerm === "" || filteredSuggestions.length > 0) && (
          <ul className={styles.suggestionsList}>
            {searchTerm && isSuggestionsOpen ? (
              filteredSuggestions.map((item, index) => (
                <li key={index} onMouseDown={() => handleSelectSuggestion(item)}>
                  {highlightMatch(item.search, searchTerm)}
                  {index < 2 && item.category && (
                    <span className={styles["category-text"]}>
                      {item.category}
                    </span>
                  )}
                </li>
              ))
            ) : (
              <>
                {recentSearches.length > 0 && (
                  <>
                    <li className={styles.trendingTitle}>
                      Recent
                      <span className={styles.clearButton} onClick={clearRecentSearches}>Clear</span>
                    </li>
                    {recentSearches.map((search, index) => (
                      <li key={index} onMouseDown={() => handleSelectSuggestion({ search })}>
                        {search}
                      </li>
                    ))}
                  </>
                )}
                <li className={styles.trendingTitle}>Trending searches</li>
                {trendingSearches.map((search) => (
                  <li
                    key={search.id}
                    onMouseDown={() =>
                      handleSelectSuggestion({ search: search.text })
                    }
                  >
                    {search.text}
                  </li>
                ))}
              </>
            )}
          </ul>
        )}
    </div>
  );
};

export default SearchBar;
