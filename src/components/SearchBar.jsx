import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/components/SearchBar.module.css";
import { LensIcon } from "../assets/svg/Lens";
import searchData from "../assets/SearchData.json";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [trendingSearches, setTrendingSearches] = useState([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [maxLength, setMaxLength] = useState(0);
  const searchBarRef = useRef(null);

  useEffect(() => {
    setTrendingSearches(searchData["trending-searches"]);

    const handleClickOutside = (event) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
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

  const handleSelectSuggestion = (item) => {
    setSearchTerm(item.search);
    setIsFocused(false);
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

  return (
    <div
      className={`${styles.inputContainer} ${
        isFocused &&
        searchTerm.length <= maxLength &&
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
          className={styles.inputField}
          placeholder="Search for items, brands, or styles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
        />
      </div>
      {isFocused &&
        searchTerm.length <= maxLength &&
        (searchTerm === "" || filteredSuggestions.length > 0) && (
          <ul className={styles.suggestionsList}>
            {searchTerm ? (
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
