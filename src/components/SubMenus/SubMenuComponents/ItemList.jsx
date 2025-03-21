import React from "react";

const ItemList = ({ title, items, highlightLast = false, bottomBorder = false }) => {
  return (
    <div className="w-full pt-5">
      <h2 
        className="font-bold mb-3 pl-4"
        style={{ fontSize: 17.5 }}
      >{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className="text-left border-b"
            style={{ 
              paddingTop: "12.5px", 
              paddingBottom: "12.5px",
              borderBottom: bottomBorder && index === items.length - 1 
                ? "1px solid #262626" 
                : "1px solid rgb(243, 243, 243)"
            }}
          >
            <span 
              className="pl-4 block cursor-pointer"
              style={{ 
                fontSize: "16.5px",
                color: highlightLast && index === items.length - 1 ? "#E20020" : "#262626",
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
