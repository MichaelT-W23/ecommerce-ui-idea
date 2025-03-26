import styles from "./ImageGrid.module.css";

const imageMap = import.meta.glob('/src/assets/images/**/*.{png,jpg,jpeg}', {
  eager: true,
  import: 'default',
});

const ImageGrid = ({ images }) => {
  return (
    <div className={styles.grid}>
      {images.map((image) => {
        const imagePath = `/src/assets/images/${image.path}`;
        const src = imageMap[imagePath];

        return (
          <div key={image.id} className={styles.imageItem}>
            <img src={src} alt={image.text} />
            <p>{image.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ImageGrid;
