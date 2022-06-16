import React from 'react'
import styles from "./animecard.module.css"
import bg from "../../../images/bg.png"


const AnimeCard = ( props ) => {
  return (
    <div className={styles["card"]}>
        <img src={bg} alt={props.alt}></img>
        <div className={styles["content"]}>
          <h1>Anime Name</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, cumque!</p>
          <a href="" className={styles["btn"]}>Read Now!</a>
        </div>
    </div>
  )
}

export default AnimeCard