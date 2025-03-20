import React from "react";
import { SubMenuTitle, ItemList } from "./SubMenuComponents"
import Data from "../../assets/SubMenuData.json"; 

const KidSubMenu = () => {
  
  return (
    <div>
      <SubMenuTitle title={Data.Kids.Title} />
      
      <ItemList 
        title={Data.Kids.Data.title} 
        items={Data.Kids.Data.items} 
      />
    </div>
  );
};

export default KidSubMenu;
