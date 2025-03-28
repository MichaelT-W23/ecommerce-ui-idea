import Data from "../../../src/assets/PanelMenuData.json";
import { SingleCol, ImageGrid } from "./PanelComponents";

const KidsPanel = () => {
  return (
    <div className="grid grid-cols-3 text-sm text-gray-800 bg-white">
      <SingleCol data={Data.Kids.SingleCol} />
      <SingleCol data={Data.Kids.SingleColTwo} />
      {/* <SingleCol data={Data.Kids.SingleColThree} /> */}

      <ImageGrid 
        title={Data.Kids.ImageData.Title}
        images={Data.Kids.ImageData.Images} 
      />
    </div>
  )
}

export default KidsPanel;