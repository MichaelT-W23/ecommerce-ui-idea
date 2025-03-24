import Data from "../../../src/assets/PanelMenuData.json";

const MenPanel = () => {
  return (
    <div className="p-6 grid grid-cols-3 gap-4 text-sm text-gray-800 bg-white">
      <div>
        <h2 className="text-base font-semibold mb-2">
          {Data.Men.DoubleCol.Title}
        </h2>
        <ul>
          {Data.Men.DoubleCol.ColOne.map((item) => (
            <li
              key={item.id}
              className="hover:underline cursor-pointer"
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>


      <div>
        <h2 className="text-base font-semibold mb-2 invisible">.</h2> 
        <ul>
          {Data.Men.DoubleCol.ColTwo.map((item) => (
            <li
              key={item.id}
              className={`hover:underline cursor-pointer ${
                item.color === "red" ? "text-red-500 font-semibold" : ""
              }`}
            >
              {item.text}
            </li>
          ))}
        </ul>
        <p className="mt-2 font-semibold cursor-pointer hover:underline">
          {Data.Men.DoubleCol.BoldText}
        </p>
      </div>

      {/* Featured Section */}
      <div>
        <h2 className="text-base font-semibold mb-2">
          {Data.Men.OneCol.Title}
        </h2>
        <ul>
          {Data.Men.OneCol.ColOne.map((item) => (
            <li
              key={item.id}
              className="hover:underline cursor-pointer"
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenPanel;
