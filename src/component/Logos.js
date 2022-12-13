import React from "react";
import styles from "./Logos.module.css";
import Apple from "../images/Apple.png";
import Samsung from "../images/Samsung.png";
import Xiaomi from "../images/Xiaomi.png";

function Logos() {
  return (
    <div className={styles.container}>
      <h3>Who Support Us ?</h3>
      <div>
        <img src={Apple} alt="Supporter" />
        <img src={Samsung} alt="Supporter" />
        <img src={Xiaomi} alt="Supporter" />
      </div>
    </div>
  );
}

export default Logos;
