import React from "react";
import Data from "../../assets/SubMenuData.json";
import { 
  SubMenuTitle, 
  ItemList,
  BoldText
} from "./SubMenuComponents"

const MenSubMenu = () => {
  return (
    <div>
      <SubMenuTitle title={Data.Men.Title}/>

      <ItemList 
        title={Data.Men.Data.title}
        highlightLast={Data.Men.Data.highlightLast}
        items={Data.Men.Data.items} 
      />

      <BoldText text={Data.Men.BoldText}/>
    </div>
  );
};

export default MenSubMenu;
