import React from "react";
import Data from "../../assets/SubMenuData.json";
import { 
  SubMenuTitle, 
  ItemList,
  BoldText,
  ImageList
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

      <ImageList images={Data.Brands.Images} />
      
    </div>
  );
};

export default BrandSubMenu;
