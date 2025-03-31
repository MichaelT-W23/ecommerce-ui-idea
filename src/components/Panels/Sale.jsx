import Data from "../../../src/assets/PanelMenuData.json";
import styles from "../../styles/components/Panel.module.css";
import {
  DoubleCol,
  ImageGrid
} from "./PanelComponents";

const SalePanel = () => {
  return (
    <div className={styles['panel-container']}>
      <div className="flex-1">
        <DoubleCol data={Data.Sale.DoubleCol} />
      </div>

      <div className="flex-1">
        <DoubleCol data={Data.Sale.DoubleColTwo} />
      </div>

      <div className={styles['image-grid']}>
        <ImageGrid images={Data.Sale.Images} />
      </div>
    </div>
  );
};

export default SalePanel;
