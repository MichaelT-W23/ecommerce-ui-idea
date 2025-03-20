import React from "react";
import ItemList from "./Components/ItemList";
import Data from "../../assets/SubMenuData.json"; 

const MenSubMenu = () => {
  const menData = Data.Men.Data.map((item) => item.text);

  return (
    <div>
      <h1 
        className="font-bold -mt-3 mb-9 text-center"
        style={{ 
          fontSize: "20px",
          color: "#262626",
        }}
      >
        {Data.Men.MetaData.Title}
      </h1>
      <ItemList 
        title={Data.Men.MetaData.Subtitle} 
        items={menData} 
      />
    </div>
  );
};

export default MenSubMenu;
