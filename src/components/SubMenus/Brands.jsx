import React from "react";
import ItemList from "./Components/ItemList";
import Data from "../../assets/SubMenuData.json"; 

const BrandSubMenu = () => {
  const brandData = Data.Brands.Data.map((item) => item.text);

  return (
    <div>
      <h1 
        className="font-bold -mt-3 mb-9 text-center"
        style={{ 
          fontSize: "20px",
          color: "#262626",
        }}
      >
        {Data.Brands.MetaData.Title}
      </h1>
      <ItemList 
        title={Data.Brands.MetaData.Subtitle} 
        items={brandData} 
      />
    </div>
  );
};

export default BrandSubMenu;
