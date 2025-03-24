import {
  BrandsPanel,
  KidsPanel,
  MenPanel,
  SalePanel,
  SportsPanel,
  WomenPanel
} from "./Panels";

const panels = {
  Men: <MenPanel />,
  Women: <WomenPanel />,
  Kids: <KidsPanel />,
  Sports: <SportsPanel />,
  Brands: <BrandsPanel />,
  Sale: <SalePanel />
};

const CategoryBar = ({ activeCategory, setActiveCategory }) => {
  const handleMouseEnter = (category) => {
    setActiveCategory(category);
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
  };

  return (
    <div onMouseLeave={handleMouseLeave}>
      {/* Category List */}
      <ul className="flex justify-start items-center h-13.25 text-lg font-bold font-sans pl-3.25 border-t border-b border-gray-300 bg-white z-50 relative">
        {["Men", "Women", "Kids", "Sports", "Brands"].map((item) => (
          <li
            key={item}
            className="h-full flex items-center px-4 cursor-pointer hover:bg-[#262626] hover:text-white"
            onMouseEnter={() => handleMouseEnter(item)}
          >
            {item}
          </li>
        ))}
        <li
          className="h-full flex items-center px-4 cursor-pointer text-[#E20020] hover:bg-[#E20020] hover:text-white"
          onMouseEnter={() => handleMouseEnter("Sale")}
        >
          Sale
        </li>
      </ul>

      {activeCategory && (
        <div className="absolute left-0 w-full shadow-md z-50">
          {panels[activeCategory]}
        </div>
      )}
    </div>
  );
};

export default CategoryBar;