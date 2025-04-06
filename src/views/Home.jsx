import React from 'react';
import styles from "../styles/views/Home.module.css";
import ManHomePage from '../assets/images/Home/ManHomePage.jpg';
import WomenHomePage from '../assets/images/Home/WomenHomePage.jpg';

function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <div className={styles.imageContainer}>
          <img src={ManHomePage} alt="Man Home Page" className={styles.image} />
          <div className={styles.overlay}>
            <h2 className={styles.title}>Men</h2>
            <button className={styles.button}>Shop Now</button>
          </div>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <div className={styles.imageContainer}>
          <img src={WomenHomePage} alt="Women Home Page" className={styles.image} />
          <div className={styles.overlay}>
            <h2 className={styles.title}>Women</h2>
            <button className={styles.button}>Shop Now</button>
          </div>
        </div>
      </div>

      {/* <div className={styles.bottomSection}>
        <p className={styles.subTitle}>Buy for less. Sell for free. Keep fashion circular.</p>
        <button className={styles.sellNowBtn}>Sell now</button>
      </div> */}

    </div>
  );
}

export default HomePage;
