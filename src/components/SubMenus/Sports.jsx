import React from "react";
import Data from "../../assets/SubMenuData.json";
import { 
  SubMenuTitle, 
  ItemList,
  BoldText
} from "./SubMenuComponents";

const SportSubMenu = () => {

  return (
    <div>
      <SubMenuTitle title={Data.Sports.Title} />

      <ItemList 
        title={Data.Sports.Data.title} 
        items={Data.Sports.Data.items} 
      />
      
      <BoldText text={Data.Sports.BoldText} />

    </div>
  );
};

export default SportSubMenu;
