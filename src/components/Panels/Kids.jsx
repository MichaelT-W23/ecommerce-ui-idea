import Data from "../../../src/assets/PanelMenuData.json";
import { SingleCol } from "./PanelComponents";

const KidsPanel = () => {
  return (
    <div className="p-6 grid grid-cols-3 gap-4 text-sm text-gray-800 bg-white">
      <SingleCol data={Data.Kids.SingleCol} />
      <SingleCol data={Data.Kids.SingleColTwo} />
      <SingleCol data={Data.Kids.SingleColThree} />
    </div>
  )
}

export default KidsPanel;