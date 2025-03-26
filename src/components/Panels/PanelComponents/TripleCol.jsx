import React, { useState } from 'react';

const TripleCol = ({ data }) => {
  const [hoveredColOneId, setHoveredColOneId] = useState(null);
  const [hoveredColTwoId, setHoveredColTwoId] = useState(null);
  const [hoveredColThreeId, setHoveredColThreeId] = useState(null);

  const [focusedColOneId, setFocusedColOneId] = useState(null);
  const [focusedColTwoId, setFocusedColTwoId] = useState(null);
  const [focusedColThreeId, setFocusedColThreeId] = useState(null);

  const [boldHovered, setBoldHovered] = useState(false);
  const [boldFocused, setBoldFocused] = useState(false);

  const getRowStyle = ({ isHovered, isFocused, color, withBorder = true }) => ({
    borderBottom: withBorder ? '1px solid #f3f3f3' : 'none',
    fontSize: '1.125rem', // text-lg
    transition: 'background-color 0.2s',
    backgroundColor: isHovered ? '#f3f3f3' : 'transparent',
    cursor: isHovered ? 'pointer' : 'default',
    color: color || 'inherit',
    outline: isFocused ? '4px dotted transparent' : 'none',
    boxShadow: isFocused ? 'inset 0 0 0 4px #ffda0a' : 'none',
  });

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-6 px-6">{data.Title}</h1>
      <div className="grid grid-cols-3 gap-4">
        {/* Column One */}
        <div>
          {data.ColOne.map((item) => (
            <div
              key={item.id}
              tabIndex={0}
              className="pl-6 -ml-2 pr-2 py-3"
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

        {/* Column Two */}
        <div>
          {data.ColTwo.map((item) => (
            <div
              key={item.id}
              tabIndex={0}
              className="pl-6 -ml-2 pr-2 py-3"
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

        {/* Column Three */}
        <div>
          {data.ColThree.map((item) => (
            <div
              key={item.id}
              tabIndex={0}
              className="pl-6 -ml-2 pr-2 py-3"
              style={getRowStyle({
                isHovered: hoveredColThreeId === item.id,
                isFocused: focusedColThreeId === item.id,
                color: item.color,
              })}
              onMouseEnter={() => setHoveredColThreeId(item.id)}
              onMouseLeave={() => setHoveredColThreeId(null)}
              onFocus={() => setFocusedColThreeId(item.id)}
              onBlur={() => setFocusedColThreeId(null)}
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bold row */}
      <div
        className="font-bold py-4 pl-6 -ml-2 pr-2"
        tabIndex={0}
        style={getRowStyle({
          isHovered: boldHovered,
          isFocused: boldFocused,
          withBorder: false,
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
