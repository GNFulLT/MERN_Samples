import React from 'react'
import styles from "./navbar.module.css"
import iconImage from "../../images/websiteIcon.png";
import { useState } from 'react'
import {FaSearch} from "react-icons/fa"

const Navbar = ( props ) => {

  const [activeElement, setActiveElement] = useState(0);



  return (
    <div className={styles["navbar"]}>
        <img className={styles["top_left_image"]}src={iconImage}></img>
        <ul className={styles["pagination"]}>
            <li><a onClick={() => {setActiveElement(0); props.onClicked(0)}}>Home</a><span className={`${activeElement == 0 && styles["active"]}`}></span></li>
            <li><a onClick={() => setActiveElement(1)}>Mangas</a><span className={`${activeElement == 1 && styles["active"]}`}></span></li>
            <li><a onClick={() => setActiveElement(2)}>Help</a><span className={`${activeElement == 2 && styles["active"]}`}></span></li>
            <li><a onClick={() => {props.onClicked(3)}}>Contact Us</a><span></span></li>
        </ul>
        <div className={styles["search-bar-container"]}>
          <form className={styles["search-bar"]}>
            <input type="text" placeholder="Find your best mangas"></input>
            <button type="submit"><FaSearch className={styles["icon"]}></FaSearch></button>
          </form>
        </div>
    </div>
  );
}

export default Navbar