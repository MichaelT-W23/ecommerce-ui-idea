import Data from "../../../src/assets/PanelMenuData.json";
import { TripleCol, ImageGrid } from "./PanelComponents";
import styles from "../../styles/components/Panel.module.css";

const BrandsPanel = () => {
  return (
    <div className={styles['panel-container']}>
      {/* Columns grow naturally */}
      <div className="flex-1">
        <TripleCol data={Data.Brands.TripleCol} />
      </div>

      {/* ImageGrid: fixed width, hidden below lg */}
      <div className={styles['image-grid']}>
        <ImageGrid images={Data.Brands.Images} />
      </div>
    </div>
  );
};

export default BrandsPanel;
