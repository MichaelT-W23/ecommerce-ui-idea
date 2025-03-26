import React, { useState } from 'react';

const DoubleCol = ({ data }) => {
  const [hoveredColOneId, setHoveredColOneId] = useState(null);
  const [hoveredColTwoId, setHoveredColTwoId] = useState(null);
  const [boldHovered, setBoldHovered] = useState(false);

  const getRowStyle = (isHovered, color) => ({
    borderBottom: '1px solid #f3f3f3',
    padding: '0.5rem',
    transition: 'background-color 0.2s',
    backgroundColor: isHovered ? '#f3f3f3' : 'transparent',
    cursor: isHovered ? 'pointer' : 'default',
    color: color || 'inherit',
  });

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">{data.Title}</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          {data.ColOne.map((item) => (
            <div
              key={item.id}
              style={getRowStyle(hoveredColOneId === item.id)}
              onMouseEnter={() => setHoveredColOneId(item.id)}
              onMouseLeave={() => setHoveredColOneId(null)}
            >
              {item.text}
            </div>
          ))}
        </div>
        <div>
          {data.ColTwo.map((item) => (
            <div
              key={item.id}
              style={getRowStyle(hoveredColTwoId === item.id, item.color)}
              onMouseEnter={() => setHoveredColTwoId(item.id)}
              onMouseLeave={() => setHoveredColTwoId(null)}
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>
      <div
        className="font-bold mt-4 px-2 py-2"
        style={getRowStyle(boldHovered)}
        onMouseEnter={() => setBoldHovered(true)}
        onMouseLeave={() => setBoldHovered(false)}
      >
        {data.BoldText}
      </div>
    </div>
  );
};

export default DoubleCol;
