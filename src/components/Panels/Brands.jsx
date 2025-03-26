import Data from "../../../src/assets/PanelMenuData.json";
import { TripleCol } from "./PanelComponents";

const BrandsPanel = () => {
  return (
    <div className="grid grid-cols-3 text-sm text-gray-800 bg-white">
      <TripleCol data={Data.Brands.TripleCol} />
    </div>
  )
}

export default BrandsPanel;