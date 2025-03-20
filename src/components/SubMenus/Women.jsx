import React from "react";
import { SubMenuTitle, ItemList } from "./SubMenuComponents";
import Data from "../../assets/SubMenuData.json"; 

const WomenSubMenu = () => {

  return (
    <div>
      <SubMenuTitle title={Data.Women.Title} />

      <ItemList 
        title={Data.Women.Data.title}
        highlightLast={Data.Women.Data.highlightLast}
        items={Data.Women.Data.items} 
      />
    </div>
  );
};

export default WomenSubMenu;
