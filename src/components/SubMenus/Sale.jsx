import React from "react";
import Data from "../../assets/SubMenuData.json";
import { 
  SubMenuTitle,
  ItemList,
  BoldText
} from "./SubMenuComponents";

const SaleSubMenu = () => {

  return (
    <div>
      <SubMenuTitle title={Data.Sale.Title} />
      
      <ItemList 
        title={Data.Sale.Data.title} 
        items={Data.Sale.Data.items} 
      />

      <BoldText text={Data.Sale.BoldText} />

      <ItemList 
        title={Data.Sale.DataTwo.title} 
        items={Data.Sale.DataTwo.items} 
      />

      <BoldText text={Data.Sale.BoldTextTwo} />

    </div>
  );
};

export default SaleSubMenu;
