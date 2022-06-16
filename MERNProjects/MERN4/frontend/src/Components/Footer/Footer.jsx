import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["container"]}>
        <h2 className={styles["explore"]}>Explore</h2>
        <ul>
        </ul>
        <div className={styles["right-footer"]}>
        <h1>Contact Us</h1>
        <h2>gnfugur1402@hotmail.com</h2>
        </div>
       
      </div>
    </footer>
  );
};

export default Footer;
