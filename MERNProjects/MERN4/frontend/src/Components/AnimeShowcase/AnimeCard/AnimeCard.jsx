import React from 'react'
import styles from "./animecard.module.css"
import bg from "../../../images/bg.png"


const AnimeCard = () => {
  return (
    <div className={styles["card"]}>
        <img src={bg}></img>
    </div>
  )
}

export default AnimeCard