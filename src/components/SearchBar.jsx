import React, { useState } from "react";

const SearchBar = ({ searchText, setSearchText }) => {
  const items = ["Chicken", "bird", "lion", "fish", "Bear"];
  
  const filteredItems = items.filter(item => 
    item.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="relative w-64 bg-gray-100 p-2 rounded-lg shadow-md">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search..."
        className="w-full p-2 rounded-md border border-gray-300 focus:outline-none"
      />
      <div className="mt-2 w-full bg-gray-100 border-t border-gray-300 rounded-md max-h-40 overflow-auto">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div key={index} className="p-2 hover:bg-gray-200 cursor-pointer">
              {item}
            </div>
          ))
        ) : (
          <div className="p-2 text-gray-500">No results found</div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;