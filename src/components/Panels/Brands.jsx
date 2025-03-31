import Data from "../../../src/assets/PanelMenuData.json";
import { TripleCol, ImageGrid } from "./PanelComponents";

const BrandsPanel = () => {
  return (
    <div className="flex text-sm text-gray-800 bg-white">
      {/* Columns grow naturally */}
      <div className="flex-grow">
        <TripleCol data={Data.Brands.TripleCol} />
      </div>

      {/* ImageGrid: fixed width, hidden below lg */}
      <div className="hidden lg:block w-[240px] p-6">
        <ImageGrid images={Data.Brands.Images} />
      </div>
    </div>
  );
};

export default BrandsPanel;
