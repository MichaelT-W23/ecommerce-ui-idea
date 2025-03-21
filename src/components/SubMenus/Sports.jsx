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

      <ItemList 
        title={Data.Sports.DataTwo.title}
        bottomBorder={Data.Men.DataTwo.bottomBorder}
        items={Data.Sports.DataTwo.items} 
      />
      
      <ItemList 
        title={Data.Sports.DataThree.title}
        bottomBorder={Data.Men.DataTwo.bottomBorder}
        items={Data.Sports.DataThree.items} 
      />

    </div>
  );
};

export default SportSubMenu;
