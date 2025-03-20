import React from "react";
import { SubMenuTitle, ItemList } from "./SubMenuComponents";
import Data from "../../assets/SubMenuData.json"; 

const SaleSubMenu = () => {

  return (
    <div>
      <SubMenuTitle title={Data.Sale.Title} />
      
      <ItemList 
        title={Data.Sale.Data.title} 
        items={Data.Sale.Data.items} 
      />
    </div>
  );
};

export default SaleSubMenu;
