import React from "react";
import Data from "../../assets/SubMenuData.json";
import { 
  SubMenuTitle, 
  ItemList,
  BoldText,
  ImageList
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

      <ItemList 
        title={Data.Men.DataTwo.title}
        bottomBorder={Data.Men.DataTwo.bottomBorder}
        items={Data.Men.DataTwo.items} 
      />
      
      <ImageList images={Data.Men.Images} />
    </div>
  );
};

export default MenSubMenu;
