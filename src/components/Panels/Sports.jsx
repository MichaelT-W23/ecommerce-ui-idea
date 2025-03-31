import Data from "../../../src/assets/PanelMenuData.json";
import styles from "../../styles/components/Panel.module.css";
import { SingleCol, ImageGrid } from "./PanelComponents";

const SportsPanel = () => {
  return (
    <div className={styles['panel-container']}>
       <div className="flex-1">
         <SingleCol data={Data.Sports.SingleCol} />
       </div>
       <div className="flex-1">
        <SingleCol data={Data.Sports.SingleColTwo} />
        </div>
        <div className="flex-1">
          <SingleCol data={Data.Sports.SingleColThree} />
        </div>

      <div className={styles['image-grid']}>
        <ImageGrid 
          title={Data.Sports.ImageData.Title}
          images={Data.Sports.ImageData.Images} 
        />
      </div>
      
    </div>
  )
}

export default SportsPanel;