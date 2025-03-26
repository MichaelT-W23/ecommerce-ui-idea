import Data from "../../../src/assets/PanelMenuData.json";
import { SingleCol } from "./PanelComponents";

const SportsPanel = () => {
  return (
    <div className="grid grid-cols-3 text-sm text-gray-800 bg-white">
      <SingleCol data={Data.Sports.SingleCol} />
      <SingleCol data={Data.Sports.SingleColTwo} />
      <SingleCol data={Data.Sports.SingleColThree} />
    </div>
  )
}

export default SportsPanel;