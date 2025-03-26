import Data from "../../../src/assets/PanelMenuData.json";
import { TripleCol } from "./PanelComponents";

const BrandsPanel = () => {
  return (
    <div className="p-6 grid grid-cols-3 gap-4 text-sm text-gray-800 bg-white">
      <TripleCol data={Data.Brands.TripleCol} />
    </div>
  )
}

export default BrandsPanel;