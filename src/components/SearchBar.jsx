import React, { useState } from "react";
import styles from "../styles/components/SearchBar.module.css";
import { LensIcon } from "../assets/svg/Lens";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const suggestions = ["nice", "Cool", "versace", "shoes", "friend"];
  const filteredSuggestions = suggestions.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectSuggestion = (item) => {
    setSearchTerm(item);
    setIsFocused(false);
  };

  return (
    <div className={styles.inputContainer}>
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
          onBlur={() => setIsFocused(false)}
        />
      </div>
      {isFocused && filteredSuggestions.length > 0 && (
        <ul className={styles.suggestionsList}>
          {filteredSuggestions.map((item, index) => (
            <li key={index} onMouseDown={() => handleSelectSuggestion(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;

