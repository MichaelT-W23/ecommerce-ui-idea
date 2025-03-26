import Data from "../../../src/assets/PanelMenuData.json";
import { SingleCol } from "./PanelComponents";

const SportsPanel = () => {
  return (
    <div className="p-6 grid grid-cols-3 gap-4 text-sm text-gray-800 bg-white">
      <SingleCol data={Data.Sports.SingleCol} />
      <SingleCol data={Data.Sports.SingleColTwo} />
      <SingleCol data={Data.Sports.SingleColThree} />
    </div>
  )
}

export default SportsPanel;