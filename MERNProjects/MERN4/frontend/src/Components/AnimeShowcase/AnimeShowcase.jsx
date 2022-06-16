import React from 'react'
import styles from "./showcase.module.css";
import AnimeCard from "./AnimeCard/AnimeCard.jsx"

const AnimeShowcase = () => {
  return (
    <section id='home' className={styles["showcase-section"]}>
    <div className={styles["showcase-container"]}>
      <div className={styles["info"]}>Let us explore for you from inside the most read and loved mangas</div>
        <div className={styles["showcase-minicontainer"]}>
            <AnimeCard alt="sas"></AnimeCard>
            <AnimeCard></AnimeCard>
            <AnimeCard></AnimeCard>
            <AnimeCard></AnimeCard>
            <AnimeCard></AnimeCard>
            <AnimeCard></AnimeCard>

        </div>
    </div>
    </section>
  )
}

export default AnimeShowcase