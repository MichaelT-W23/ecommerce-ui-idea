import React, { useState } from "react";

const SearchBar = ({ searchText, setSearchText }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-64">
      {isFocused && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70 rounded-lg z-10"></div>
      )}
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="relative w-full px-4 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 z-20"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
