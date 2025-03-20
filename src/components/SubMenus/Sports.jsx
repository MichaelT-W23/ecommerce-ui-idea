import React from "react";
import { SubMenuTitle, ItemList } from "./SubMenuComponents";
import Data from "../../assets/SubMenuData.json"; 

const SportSubMenu = () => {

  return (
    <div>
      <SubMenuTitle title={Data.Sports.Title} />

      <ItemList 
        title={Data.Sports.Data.title} 
        items={Data.Sports.Data.items} 
      />
      
    </div>
  );
};

export default SportSubMenu;
