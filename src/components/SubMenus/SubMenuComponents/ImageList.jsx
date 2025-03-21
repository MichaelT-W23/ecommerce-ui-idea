import React from "react";

const imageMap = import.meta.glob('/src/assets/images/**/*.{png,jpg,jpeg}', {
  eager: true,
  import: 'default',
});

const ImageList = ({ images }) => {
  return (
    <div>
      {images.map((image) => {
        const imagePath = `/src/assets/images/${image.path}`;
        const src = imageMap[imagePath];

        if (!src) {
          console.warn(`Image not found: ${imagePath}`);
          return null;
        }

        return (
          <div key={image.id} style={{ marginBottom: "1rem" }}>
            <img src={src} alt={image.text} style={{ width: "200px", height: "auto" }} />
            <p>{image.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ImageList;
