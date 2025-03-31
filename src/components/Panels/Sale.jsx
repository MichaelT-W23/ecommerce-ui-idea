import Data from "../../../src/assets/PanelMenuData.json";
import {
  DoubleCol,
  ImageGrid
} from "./PanelComponents";

const SalePanel = () => {
  return (
    <div className="flex text-sm text-gray-800 bg-white">
      <div className="flex-1">
        <DoubleCol data={Data.Sale.DoubleCol} />
      </div>

      <div className="flex-1">
        <DoubleCol data={Data.Sale.DoubleColTwo} />
      </div>

      <div className="hidden lg:block w-[240px] p-6">
        <ImageGrid images={Data.Sale.Images} />
      </div>
    </div>
  );
};

export default SalePanel;
