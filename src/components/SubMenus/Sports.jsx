import React from "react";
import ItemList from "./Components/ItemList";
import Data from "../../assets/SubMenuData.json"; 

const SportSubMenu = () => {
  const sportData = Data.Sports.Data.map((item) => item.text);

  return (
    <div>
      <h1 
        className="font-bold -mt-3 mb-9 text-center"
        style={{ 
          fontSize: "20px",
          color: "#262626",
        }}
      >
        {Data.Sports.MetaData.Title}
      </h1>
      <ItemList 
        title={Data.Sports.MetaData.Subtitle} 
        items={sportData} 
      />
    </div>
  );
};

export default SportSubMenu;
