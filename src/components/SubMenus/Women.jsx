import React from "react";
import Data from "../../assets/SubMenuData.json"; 
import { 
  SubMenuTitle, 
  ItemList, 
  BoldText 
} from "./SubMenuComponents";


const WomenSubMenu = () => {

  return (
    <div>
      <SubMenuTitle title={Data.Women.Title} />

      <ItemList 
        title={Data.Women.Data.title}
        highlightLast={Data.Women.Data.highlightLast}
        items={Data.Women.Data.items} 
      />

      <BoldText text={Data.Women.BoldText}/>

    </div>
  );
};

export default WomenSubMenu;
