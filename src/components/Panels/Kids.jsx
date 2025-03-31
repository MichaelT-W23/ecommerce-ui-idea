import Data from "../../../src/assets/PanelMenuData.json";
import { SingleCol, ImageGrid } from "./PanelComponents";
import styles from "../../styles/components/Panel.module.css";


const KidsPanel = () => {
  return (
    <div className={styles['panel-container']}>
      
      <div className="flex-1">
        <SingleCol data={Data.Kids.SingleCol} />
      </div>
      <div className="flex-1">
        <SingleCol data={Data.Kids.SingleColTwo} />
      </div>
      <div className="flex-1">
        <SingleCol data={Data.Kids.SingleColThree} />
      </div>
      
      <div className={styles['image-grid']}>
        <ImageGrid 
          title={Data.Kids.ImageData.Title}
          images={Data.Kids.ImageData.Images} 
        />
      </div>
      
    </div>
  )
}

export default KidsPanel;