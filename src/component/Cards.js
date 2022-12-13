import React, { Component } from "react";
import styles from "./Cards.module.css";
import Card from "./Card";
import iphones from "../images/Apples.png";
import iphone13 from "../images/Iphone13.png";
import iphone13w from "../images/Iphone13w.png";
import GalaxyS21 from "../images/GalaxyS21.png";

class Cards extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Card image={iphones} name="Iphone X" cost="500 $" />
        <Card image={iphone13} name="Iphone 13" cost="800 $" />
        <Card image={iphone13w} name="Iphone 13 white" cost="810 $" />
        <Card image={GalaxyS21} name="Galaxy S21 Ultra" cost="970 $" />
      </div>
    );
  }
}

export default Cards;
