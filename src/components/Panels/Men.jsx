import Data from "../../../src/assets/PanelMenuData.json";
import {
  DoubleCol,
  SingleCol,
  ImageGrid
} from "./PanelComponents";

const MenPanel = () => {

  return (
    <div className="grid grid-cols-3 text-sm text-gray-800 bg-white">

      <DoubleCol data={Data.Men.DoubleCol} />

      <SingleCol data={Data.Men.SingleCol} />

      <ImageGrid images={Data.Men.Images} />

    </div>
  );
};

export default MenPanel;
