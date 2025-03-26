import React, { useState } from 'react';

const DoubleCol = ({ data }) => {
  const [hoveredColOneId, setHoveredColOneId] = useState(null);
  const [hoveredColTwoId, setHoveredColTwoId] = useState(null);
  const [focusedColOneId, setFocusedColOneId] = useState(null);
  const [focusedColTwoId, setFocusedColTwoId] = useState(null);
  const [boldHovered, setBoldHovered] = useState(false);
  const [boldFocused, setBoldFocused] = useState(false);

  const getRowStyle = ({ isHovered, isFocused, color }) => ({
    borderBottom: '1px solid #f3f3f3',
    padding: '0.5rem',
    transition: 'background-color 0.2s',
    backgroundColor: isHovered ? '#f3f3f3' : 'transparent',
    cursor: isHovered ? 'pointer' : 'default',
    color: color || 'inherit',
    outline: isFocused ? '4px dotted transparent' : 'none',
    boxShadow: isFocused ? 'inset 0 0 0 4px #ffda0a' : 'none',
  });

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">{data.Title}</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          {data.ColOne.map((item) => (
            <div
              key={item.id}
              tabIndex={0}
              style={getRowStyle({
                isHovered: hoveredColOneId === item.id,
                isFocused: focusedColOneId === item.id,
              })}
              onMouseEnter={() => setHoveredColOneId(item.id)}
              onMouseLeave={() => setHoveredColOneId(null)}
              onFocus={() => setFocusedColOneId(item.id)}
              onBlur={() => setFocusedColOneId(null)}
            >
              {item.text}
            </div>
          ))}
        </div>
        <div>
          {data.ColTwo.map((item) => (
            <div
              key={item.id}
              tabIndex={0}
              style={getRowStyle({
                isHovered: hoveredColTwoId === item.id,
                isFocused: focusedColTwoId === item.id,
                color: item.color,
              })}
              onMouseEnter={() => setHoveredColTwoId(item.id)}
              onMouseLeave={() => setHoveredColTwoId(null)}
              onFocus={() => setFocusedColTwoId(item.id)}
              onBlur={() => setFocusedColTwoId(null)}
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>
      <div
        className="font-bold mt-4 px-2 py-2"
        tabIndex={0}
        style={getRowStyle({
          isHovered: boldHovered,
          isFocused: boldFocused,
        })}
        onMouseEnter={() => setBoldHovered(true)}
        onMouseLeave={() => setBoldHovered(false)}
        onFocus={() => setBoldFocused(true)}
        onBlur={() => setBoldFocused(false)}
      >
        {data.BoldText}
      </div>
    </div>
  );
};

export default DoubleCol;
