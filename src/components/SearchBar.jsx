import React, { useState } from "react";
import styles from "../styles/components/SearchBar.module.css";

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const suggestions = ["nice", "Cool", "versace", "shoes", "friend"];

  const filteredSuggestions = suggestions.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`${styles.inputContainer} ${isFocused ? styles.focused : ""}`}>
      <input
        type="text"
        className={styles.inputField}
        placeholder="Search for items, brands, or styles..."
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {isFocused && filteredSuggestions.length > 0 && (
        <div className={styles.expandedBackground}>
          <ul>
            {filteredSuggestions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
