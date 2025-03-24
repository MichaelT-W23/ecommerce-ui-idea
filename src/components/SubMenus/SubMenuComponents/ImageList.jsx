import React from "react";
import styles from "./ImageList.module.css";

const imageMap = import.meta.glob('/src/assets/images/**/*.{png,jpg,jpeg}', {
  eager: true,
  import: 'default',
});

const ImageList = ({ images }) => {
  return (
    <div className={styles.imageContainer}>
      {images.map((image) => {
        const imagePath = `/src/assets/images/${image.path}`;
        const src = imageMap[imagePath];

        if (!src) {
          console.warn(`Image not found: ${imagePath}`);
          return null;
        }

        const shouldShowCaption = image.text && !image["unused-text"];

        return (
          <div
            key={image.id}
            tabIndex={0}
            className={styles.imageCard}
          >
            <img
              src={src}
              alt={image.text || ""}
              className={styles.image}
            />
            {shouldShowCaption && (
              <div className={styles.caption}>
                {image.text}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageList;
