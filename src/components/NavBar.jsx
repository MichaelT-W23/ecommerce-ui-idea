import React from "react";

const Navbar = () => {
  return (
    <nav className="relative bg-black p-4 flex justify-between items-center overflow-visible h-20">
      <div className="text-white text-xl font-bold">MyApp</div>

      <div className="space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Button 1
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
          Button 2
        </button>
      </div>

      {/* Centered square */}
      <div className="absolute left-1/2 top-25 transform -translate-x-1/2 -translate-y-1/2 w-32 h-40 bg-gray-700 flex flex-col items-center p-2">
        {/* Input always stays at the top */}
        <input
          type="text"
          placeholder="Enter text"
          className="w-28 p-2 border border-gray-400 rounded-md text-black mb-2"
        />

        {/* Scrollable text content */}
        <div className="flex flex-col items-center overflow-y-auto max-h-24 w-full">
          <div className="text-white text-sm">cool</div>
          <div className="text-white text-sm">lit</div>
          <div className="text-white text-sm">nice</div>
          <div className="text-white text-sm">extra</div>
          <div className="text-white text-sm">more</div>
          <div className="text-white text-sm">stuff</div>
          <div className="text-white text-sm">even more</div>
          <div className="text-white text-sm">overflow test</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
