import Data from "../../../src/assets/PanelMenuData.json";
import styles from "../../styles/components/Panel.module.css";
import {
  DoubleCol,
  SingleCol,
  ImageGrid
} from "./PanelComponents";

const WomenPanel = () => {
  return (
    <div className={styles['panel-container']}>

      <div className="flex-1">
        <DoubleCol data={Data.Women.DoubleCol} />
      </div>

      <div className="flex-1">
        <SingleCol data={Data.Women.SingleCol} />
      </div>

      <div className={styles['image-grid']}>
        <ImageGrid images={Data.Women.Images} />
      </div>
      
    </div>
  );
};

export default WomenPanel;
