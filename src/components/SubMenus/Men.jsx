import React from "react";
import ItemList from "./Components/ItemList";
import Data from "../../assets/SubMenuData.json"; 

const MenSubMenu = () => {
  return (
    <div>
      <h1 
        className="font-bold -mt-3 mb-9 text-center"
        style={{ 
          fontSize: "20px",
          color: "#262626",
        }}
      >
        {Data.Men.Title}
      </h1>
      <ItemList 
        title={Data.Men.Data.title} 
        items={Data.Men.Data.items} 
      />
    </div>
  );
};

export default MenSubMenu;
