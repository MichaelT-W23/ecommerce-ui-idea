import React from "react";
import Data from "../../assets/SubMenuData.json";
import { 
  SubMenuTitle, 
  ItemList,
  BoldText,
  ImageList
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

      <ItemList 
        title={Data.Kids.DataTwo.title}
        bottomBorder={Data.Men.DataTwo.bottomBorder}
        items={Data.Kids.DataTwo.items} 
      />
      
      <ItemList 
        title={Data.Kids.DataThree.title}
        bottomBorder={Data.Men.DataTwo.bottomBorder}
        items={Data.Kids.DataThree.items} 
      />

      <ImageList images={Data.Kids.Images} />

    </div>
);
};

export default KidSubMenu;
