import React, { useState } from 'react';

const TripleCol = ({ data }) => {
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
    <div className="p-6">
      <h1 className="font-bold mb-6 pl-4" style={{ fontSize: '1.15rem' }}>
        {data.Title}
      </h1>

      <div>
        {data.ColOne.map((col1Item, idx) => {
          const col2Item = data.ColTwo[idx];
          const col3Item = data.ColThree[idx];
          const sharedId = `row-${idx}`;

          return (
            <div
              key={sharedId}
              className="flex border-b"
              style={{ borderBottomColor: '#f3f3f3' }}
            >
              <div
                tabIndex={0}
                className="w-1/3 pl-6 -ml-2 pr-2 py-3"
                style={getRowStyle({
                  isHovered: hoveredId === `${sharedId}-1`,
                  isFocused: focusedId === `${sharedId}-1`,
                })}
                onMouseEnter={() => setHoveredId(`${sharedId}-1`)}
                onMouseLeave={() => setHoveredId(null)}
                onFocus={() => setFocusedId(`${sharedId}-1`)}
                onBlur={() => setFocusedId(null)}
              >
                {col1Item?.text}
              </div>
              <div
                tabIndex={0}
                className="w-1/3 pl-6 -ml-2 pr-2 py-3"
                style={getRowStyle({
                  isHovered: hoveredId === `${sharedId}-2`,
                  isFocused: focusedId === `${sharedId}-2`,
                  color: col2Item?.color,
                })}
                onMouseEnter={() => setHoveredId(`${sharedId}-2`)}
                onMouseLeave={() => setHoveredId(null)}
                onFocus={() => setFocusedId(`${sharedId}-2`)}
                onBlur={() => setFocusedId(null)}
              >
                {col2Item?.text}
              </div>
              <div
                tabIndex={0}
                className="w-1/3 pl-6 -ml-2 pr-2 py-3"
                style={getRowStyle({
                  isHovered: hoveredId === `${sharedId}-3`,
                  isFocused: focusedId === `${sharedId}-3`,
                  color: col3Item?.color,
                })}
                onMouseEnter={() => setHoveredId(`${sharedId}-3`)}
                onMouseLeave={() => setHoveredId(null)}
                onFocus={() => setFocusedId(`${sharedId}-3`)}
                onBlur={() => setFocusedId(null)}
              >
                {col3Item?.text}
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="font-bold py-4 pl-6 -ml-2 pr-2"
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

export default TripleCol;
