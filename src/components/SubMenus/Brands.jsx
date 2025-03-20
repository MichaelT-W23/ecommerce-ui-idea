import React from "react";
import ItemList from "./Components/ItemList";
import Data from "../../assets/SubMenuData.json"; 

const BrandSubMenu = () => {

  return (
    <div>
      <h1 
        className="font-bold -mt-3 mb-9 text-center"
        style={{ 
          fontSize: "20px",
          color: "#262626",
        }}
      >
        {Data.Brands.Title}
      </h1>
      <ItemList 
        title={Data.Brands.Data.title} 
        items={Data.Brands.Data.items} 
      />
    </div>
  );
};

export default BrandSubMenu;
