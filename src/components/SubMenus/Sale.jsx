import React from "react";
import ItemList from "./Components/ItemList";
import Data from "../../assets/SubMenuData.json"; 

const SaleSubMenu = () => {

  return (
    <div>
      <h1 
        className="font-bold -mt-3 mb-9 text-center"
        style={{ 
          fontSize: "20px",
          color: "#262626",
        }}
      >
        {Data.Sale.Title}
      </h1>
      <ItemList 
        title={Data.Sale.Data.title} 
        items={Data.Sale.Data.items} 
      />
    </div>
  );
};

export default SaleSubMenu;
