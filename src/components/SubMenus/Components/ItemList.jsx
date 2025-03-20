import React from "react";

const ItemList = ({ title, items }) => {
  return (
    <div className="w-full">
      <h2 className="font-bold text-base mb-3 pl-4">{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className="text-left"
            style={{ 
              paddingTop: "12.5px", 
              paddingBottom: "12.5px",
              borderBottom: "1px solid rgb(243, 243, 243)" 
            }}
          >
            <span 
              className="pl-4 block cursor-pointer"
              style={{ 
                fontSize: "16.5px",
                color: "#262626",
              }}
            >
                {item.text}
            </span> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
