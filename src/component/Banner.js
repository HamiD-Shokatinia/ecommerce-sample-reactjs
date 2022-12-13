import React from "react";
import styles from "./Banner.module.css";
import banner from "../images/homeBanner.png";
const Banner = () => {
  return (
    <div className={styles.container}>
      <img src={banner} alt="Home Banner" />
      <div className={styles.textContainer}>
        <h1>Ecommerce</h1>
        <p>
          Sample WebApp By <span>React</span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
