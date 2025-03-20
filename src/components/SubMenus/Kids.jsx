import React from "react";
import ItemList from "./Components/ItemList";
import Data from "../../assets/SubMenuData.json"; 

const KidSubMenu = () => {
  const kidsData = Data.Kids.Data.map((item) => item.text);

  return (
    <div>
      <h1 
        className="font-bold -mt-3 mb-9 text-center"
        style={{ 
          fontSize: "20px",
          color: "#262626",
        }}
      >
        {Data.Kids.MetaData.Title}
      </h1>
      <ItemList 
        title={Data.Kids.MetaData.Subtitle} 
        items={kidsData} 
      />
    </div>
  );
};

export default KidSubMenu;
