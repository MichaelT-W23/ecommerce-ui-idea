import React from "react";
import ItemList from "./Components/ItemList";
import Data from "../../assets/SubMenuData.json"; 

const SaleSubMenu = () => {
  const saleData = Data.Sale.Data.map((item) => item.text);

  return (
    <div>
      <h1 
        className="font-bold -mt-3 mb-9 text-center"
        style={{ 
          fontSize: "20px",
          color: "#262626",
        }}
      >
        {Data.Sale.MetaData.Title}
      </h1>
      <ItemList 
        title={Data.Sale.MetaData.Subtitle} 
        items={saleData} 
      />
    </div>
  );
};

export default SaleSubMenu;
