import React, { useState } from 'react';

const SingleCol = ({ data }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const [focusedId, setFocusedId] = useState(null);
  const [boldHovered, setBoldHovered] = useState(false);
  const [boldFocused, setBoldFocused] = useState(false);

  const getRowStyle = ({ isHovered, isFocused, color }) => ({
    fontSize: '0.95rem',
    transition: 'background-color 0.2s',
    backgroundColor: isHovered ? '#f3f3f3' : 'transparent',
    cursor: isHovered ? 'pointer' : 'default',
    color: color || 'inherit',
    outline: isFocused ? '4px dotted transparent' : 'none',
    boxShadow: isFocused ? 'inset 0 0 0 4px #ffda0a' : 'none',
  });

  return (
    <div className="p-6 text-sm text-gray-800 bg-white">
      <h1 
        className="font-bold mb-6 pl-4"
        style={{ fontSize: '1.15rem' }}>
        {data.Title}
      </h1>
      <div className="flex flex-col">
        {data.ColOne.map((item) => (
          <div
            key={item.id}
            tabIndex={0}
            className="pl-6 -ml-2 pr-2 py-3 border-b border-gray-100"
            style={getRowStyle({
              isHovered: hoveredId === item.id,
              isFocused: focusedId === item.id,
              color: item.color,
            })}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            onFocus={() => setFocusedId(item.id)}
            onBlur={() => setFocusedId(null)}
          >
            {item.text}
          </div>
        ))}
      </div>
      {data.BoldText && (
        <div
          className="font-bold py-4 pl-6 -ml-2 pr-2"
          tabIndex={0}
          style={{
            backgroundColor: boldHovered ? '#f3f3f3' : 'transparent',
            cursor: boldHovered ? 'pointer' : 'default',
            outline: boldFocused ? '4px dotted transparent' : 'none',
            boxShadow: boldFocused ? 'inset 0 0 0 4px #ffda0a' : 'none',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={() => setBoldHovered(true)}
          onMouseLeave={() => setBoldHovered(false)}
          onFocus={() => setBoldFocused(true)}
          onBlur={() => setBoldFocused(false)}
        >
          {data.BoldText}
        </div>
      )}
    </div>
  );
};

export default SingleCol;
