import React from "react";
import { useTransitionCarousel } from "react-spring-carousel";
import AnimeCardVariant from "./AnimeCardVariant/AnimeCardVariant.jsx";
import styles from "./animecarousel.module.css"
import { useSpringCarousel } from 'react-spring-carousel'
import { BiRightArrowAlt,BiLeftArrowAlt } from "react-icons/bi"
const mockedItems = [
  {
    alt: "asd",
    id: 1,
    color:"black"
  },
  {
    alt: "asd",
    id: 2,
    color:"red"

  },
  {
    alt: "asd",
    id: 3,
    color:"blue"

  },
  {
    alt: "asd",
    id: 4,
    color:"green"

  },
  {
    alt: "asd",
    id: 5,
    color:"purple"

  },
  {
    alt: "asd",
    id: 6,
  },
  {
    alt: "asd",
    id: 7,
  },
  {
    alt: "asd",
    id: 8,
  },
  {
    alt: "asd",
    id: 9,
  },
];

const AnimeCarousel = () => {
    const { carouselFragment, slideToNextItem ,slideToPrevItem } = useSpringCarousel({
        itemsPerSlide: 4 ,
        withLoop: true,
        items: mockedItems.map((i) => ({
          id: i.id,
          renderItem: (
                <AnimeCardVariant></AnimeCardVariant>
          ),
        })),
      });
  return <div className={styles["container"]}>
    <button onClick={() => slideToPrevItem() } className={styles["left-button"]}> <BiLeftArrowAlt>left</BiLeftArrowAlt> </button>
    {carouselFragment}
    <button onClick={() => slideToNextItem() } className={styles["right-button"]}> <BiRightArrowAlt>right</BiRightArrowAlt></button>
  </div>;
};

export default AnimeCarousel;
