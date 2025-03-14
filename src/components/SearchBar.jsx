import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/components/SearchBar.module.css";
import { LensIcon } from "../assets/svg/Lens";
import searchData from "../assets/SearchData.json";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [trendingSearches, setTrendingSearches] = useState([]);
  const searchBarRef = useRef(null);

  useEffect(() => {
    setTrendingSearches(searchData["trending-searches"]);

    const handleClickOutside = (event) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const suggestions = ["nice", "Cool", "versace", "shoes", "friend"];
  const filteredSuggestions = searchTerm
    ? suggestions.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const handleSelectSuggestion = (item) => {
    setSearchTerm(item);
    setIsFocused(false);
  };

  return (
    <div className={styles.inputContainer} ref={searchBarRef}>
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
      {isFocused && (
        <ul className={styles.suggestionsList}>
          {searchTerm ? (
            filteredSuggestions.length > 0 ? (
              filteredSuggestions.map((item, index) => (
                <li key={index} onMouseDown={() => handleSelectSuggestion(item)}>
                  {item}
                </li>
              ))
            ) : (
              <li className={styles.noResults}>No results found</li>
            )
          ) : (
            <>
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
      )}
    </div>
  );
};

export default SearchBar;
