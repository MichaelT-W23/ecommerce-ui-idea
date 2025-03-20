import React from "react";
import ItemList from "./Components/ItemList";
import Data from "../../assets/SubMenuData.json"; 

const WomenSubMenu = () => {

  return (
    <div>
      <h1 
        className="font-bold -mt-3 mb-9 text-center"
        style={{ 
          fontSize: "20px",
          color: "#262626",
        }}
      >
        {Data.Women.Title}
      </h1>
      <ItemList 
        title={Data.Women.Data.title} 
        items={Data.Women.Data.items} 
      />
    </div>
  );
};

export default WomenSubMenu;
