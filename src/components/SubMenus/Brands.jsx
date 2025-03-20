import React from "react";
import Data from "../../assets/SubMenuData.json";
import { 
  SubMenuTitle, 
  ItemList,
  BoldText
} from "./SubMenuComponents";

const BrandSubMenu = () => {

  return (
    <div>
      <SubMenuTitle title={Data.Brands.Title} />
      
      <ItemList 
        title={Data.Brands.Data.title} 
        items={Data.Brands.Data.items} 
      />

      <BoldText text={Data.Brands.BoldText} />

    </div>
  );
};

export default BrandSubMenu;
