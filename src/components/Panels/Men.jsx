import Data from "../../../src/assets/PanelMenuData.json";
import styles from "../../styles/components/Panel.module.css";
import {
  DoubleCol,
  SingleCol,
  ImageGrid
} from "./PanelComponents";

const MenPanel = () => {

  return (
    <div className={styles['panel-container']}>

      <div className="flex-1">
        <DoubleCol data={Data.Men.DoubleCol} />
      </div>

      <div className="flex-1">
        <SingleCol data={Data.Men.SingleCol} />
      </div>

      <div className={styles['image-grid']}>
        <ImageGrid images={Data.Men.Images} />
      </div>

    </div>
  );
};

export default MenPanel;
