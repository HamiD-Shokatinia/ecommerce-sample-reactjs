import React from "react";
import styles from "./Navbar.module.css";
import Logo from '../images/logo.png'
const Navbar = () => {
  return(
  <header className={styles.header}>
    <div className={styles.listContainer}>
      <ul className={styles.list}>
        <li>Home Page</li>
        <li>Products</li>
        <li>About Us</li>
      </ul>
    </div>
    <div >
      <img className={styles.logo} src={Logo}  alt="Logo" />
    </div>
  </header>
  )
};

export default Navbar;
