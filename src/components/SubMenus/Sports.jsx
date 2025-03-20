import React from "react";
import ItemList from "./Components/ItemList";
import Data from "../../assets/SubMenuData.json"; 

const SportSubMenu = () => {

  return (
    <div>
      <h1 
        className="font-bold -mt-3 mb-9 text-center"
        style={{ 
          fontSize: "20px",
          color: "#262626",
        }}
      >
        {Data.Sports.Title}
      </h1>
      <ItemList 
        title={Data.Sports.Data.title} 
        items={Data.Sports.Data.items} 
      />
    </div>
  );
};

export default SportSubMenu;
