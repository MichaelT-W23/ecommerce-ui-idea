import Data from "../../../src/assets/PanelMenuData.json";
import {
  DoubleCol,
  ImageGrid
} from "./PanelComponents";

const SalePanel = () => {
  return (
    <div className="grid grid-cols-3 text-sm text-gray-800 bg-white">

      <DoubleCol data={Data.Sale.DoubleCol} />

      <DoubleCol data={Data.Sale.DoubleColTwo} />

      <ImageGrid images={Data.Sale.Images} />
    </div>
  );
};

export default SalePanel;
