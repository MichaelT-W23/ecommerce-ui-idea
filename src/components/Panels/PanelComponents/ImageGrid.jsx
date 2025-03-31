import styles from "./ImageGrid.module.css";

const imageMap = import.meta.glob('/src/assets/images/**/*.{png,jpg,jpeg}', {
  eager: true,
  import: 'default',
});

const ImageGrid = ({ title = "", images }) => {
  return (
    <div className="p-6">
      {title && (
        <h1 className="font-bold mb-6 pl-4" style={{ fontSize: '1.15rem' }}>
          {title}
        </h1>
      )}

      <div className={styles.gridBackground}>
        <div className={`${styles.grid} ${styles[`grid-${images.length}`]}`}>
          {images.map((image) => {
            const imagePath = `/src/assets/images/${image.path}`;
            const src = imageMap[imagePath];

            if (!src) {
              console.warn(`Image not found: ${imagePath}`);
              return null;
            }

            const shouldShowCaption = image.text && !image["unused-text"];

            return (
              <div key={image.id} tabIndex={0} className={styles.imageCard}>
                <img src={src} alt={image.text || "image"} className={styles.image} />
                {shouldShowCaption && (
                  <div className={styles.caption}>{image.text}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
