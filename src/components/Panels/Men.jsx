import Data from "../../../src/assets/PanelMenuData.json";
import {
  DoubleCol,
  SingleCol
} from "./PanelComponents";

const MenPanel = () => {
  return (
    <div className="grid grid-cols-3 text-sm text-gray-800 bg-white">

      <DoubleCol data={Data.Men.DoubleCol} />

      <SingleCol data={Data.Men.SingleCol} />

    </div>
  );
};

export default MenPanel;
