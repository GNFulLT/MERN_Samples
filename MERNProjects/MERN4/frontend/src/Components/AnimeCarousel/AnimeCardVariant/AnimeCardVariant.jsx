import React from 'react'
import bg from "../../../images/bg.png"
import styles from "./animecardvariant.module.css"

const AmeCardVariant = ( props ) => {
  return (
   <a href='#home' className={styles["card"]}>
      <img src={bg} alt={props.alt}></img>
      <div className={styles["content"]}>
      <h1>Anime Name</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, cumque!</p>
      </div>
   </a>
  )
}

export default AmeCardVariant