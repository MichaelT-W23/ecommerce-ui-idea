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
      <div className={styles['columns-wrapper']}>
        <div className={styles['double-col']}>
          <DoubleCol data={Data.Women.DoubleCol} />
        </div>

        <div className={styles['single-col']}>
          <SingleCol data={Data.Women.SingleCol} />
        </div>

        <div className={styles['image-grid']}>
          <ImageGrid images={Data.Women.Images} />
        </div>
      </div>
    </div>
  );
};



export default WomenPanel;
