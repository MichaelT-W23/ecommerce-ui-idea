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
    </div>
  );
};

export default SaleSubMenu;
