import React from "react";
import ItemList from "./Components/ItemList";
import Data from "../../assets/SubMenuData.json"; 

const WomenSubMenu = () => {
  const womenData = Data.Women.Data.map((item) => item.text);

  return (
    <div>
      <h1 
        className="font-bold -mt-3 mb-9 text-center"
        style={{ 
          fontSize: "20px",
          color: "#262626",
        }}
      >
        {Data.Women.MetaData.Title}
      </h1>
      <ItemList 
        title={Data.Women.MetaData.Subtitle} 
        items={womenData} 
      />
    </div>
  );
};

export default WomenSubMenu;
