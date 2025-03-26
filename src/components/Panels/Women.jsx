import Data from "../../../src/assets/PanelMenuData.json";
import {
  DoubleCol,
  SingleCol
} from "./PanelComponents";

const WomenPanel = () => {
  return (
    <div className="grid grid-cols-3 text-sm text-gray-800 bg-white">

      <DoubleCol data={Data.Women.DoubleCol} />

      <SingleCol data={Data.Women.SingleCol} />
      
    </div>
  );
};

export default WomenPanel;
