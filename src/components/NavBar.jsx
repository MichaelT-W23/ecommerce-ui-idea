import React, { useState } from "react";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <nav className="bg-white p-4 flex justify-between items-center">
      <div className="text-black text-xl font-bold">MyApp</div>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <div className="space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Button 1
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
          Button 2
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
