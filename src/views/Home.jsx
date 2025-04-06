import React from 'react';
import styles from "../styles/views/Home.module.css";
import ManHomePage from '../assets/images/Home/ManHomePage.jpg';
import WomenHomePage from '../assets/images/Home/WomenHomePage.jpg';

function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src={ManHomePage} alt="Man Home Page" className={styles.image} />
        <div className={styles.overlay}>
          <h2 className={styles.title}>Men</h2>
          <button className={styles.button}>Shop Now</button>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <img src={WomenHomePage} alt="Women Home Page" className={styles.image} />
        <div className={styles.overlay}>
          <h2 className={styles.title}>Women</h2>
          <button className={styles.button}>Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
