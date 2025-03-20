import React from "react";
import ItemList from "./Components/ItemList";
import Data from "../../assets/SubMenuData.json"; 

const KidSubMenu = () => {
  
  return (
    <div>
      <h1 
        className="font-bold -mt-3 mb-9 text-center"
        style={{ 
          fontSize: "20px",
          color: "#262626",
        }}
      >
        {Data.Kids.Title}
      </h1>
      <ItemList 
        title={Data.Kids.Data.title} 
        items={Data.Kids.Data.items} 
      />
    </div>
  );
};

export default KidSubMenu;
