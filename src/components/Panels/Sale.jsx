import Data from "../../../src/assets/PanelMenuData.json";
import {
  DoubleCol
} from "./PanelComponents";

const SalePanel = () => {
  return (
    <div className="p-6 grid grid-cols-3 gap-4 text-sm text-gray-800 bg-white">

      <DoubleCol data={Data.Sale.DoubleCol} />

      <DoubleCol data={Data.Sale.DoubleColTwo} />
    </div>
  );
};

export default SalePanel;
