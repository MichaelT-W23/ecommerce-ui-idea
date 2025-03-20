import React from "react";
import { SubMenuTitle, ItemList } from "./SubMenuComponents"
import Data from "../../assets/SubMenuData.json"; 

const MenSubMenu = () => {
  return (
    <div>
      <SubMenuTitle title={Data.Men.Title}/>

      <ItemList 
        title={Data.Men.Data.title} 
        items={Data.Men.Data.items} 
      />
    </div>
  );
};

export default MenSubMenu;
