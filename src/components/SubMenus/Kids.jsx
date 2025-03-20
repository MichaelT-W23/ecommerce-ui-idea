import React from "react";
import Data from "../../assets/SubMenuData.json";
import { 
  SubMenuTitle, 
  ItemList,
  BoldText
} from "./SubMenuComponents";

const KidSubMenu = () => {
  
  return (
    <div>
      <SubMenuTitle title={Data.Kids.Title} />
      
      <ItemList 
        title={Data.Kids.Data.title} 
        items={Data.Kids.Data.items} 
      />

      <BoldText text={Data.Kids.BoldText}/>
    </div>
);
};

export default KidSubMenu;
