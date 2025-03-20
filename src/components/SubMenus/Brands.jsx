import React from "react";
import { SubMenuTitle, ItemList } from "./SubMenuComponents"
import Data from "../../assets/SubMenuData.json"; 

const BrandSubMenu = () => {

  return (
    <div>
      <SubMenuTitle title={Data.Brands.Title} />
      
      <ItemList 
        title={Data.Brands.Data.title} 
        items={Data.Brands.Data.items} 
      />
    </div>
  );
};

export default BrandSubMenu;
