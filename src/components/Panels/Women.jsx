import Data from "../../../src/assets/PanelMenuData.json";
import {
  DoubleCol
} from "./PanelComponents";

const WomenPanel = () => {
  return (
    <div className="p-6 grid grid-cols-3 gap-4 text-sm text-gray-800 bg-white">

      <DoubleCol data={Data.Women.DoubleCol} />

      {/* Featured Section */}
      <div>
        <h2 className="text-base font-semibold mb-2">
          {Data.Women.OneCol.Title}
        </h2>
        <ul>
          {Data.Women.OneCol.ColOne.map((item) => (
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

export default WomenPanel;
