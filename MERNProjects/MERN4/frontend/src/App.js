import React, { useRef } from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import AnimeShowcase from "./Components/AnimeShowcase/AnimeShowcase.jsx";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Footer from "./Components/Footer/Footer.jsx";
import AnimeCarousel from "./Components/AnimeCarousel/AnimeCarousel.jsx";
import styles from "./app.module.css"
import { BsStar } from "react-icons/bs"

const App = () => {

  const parallaxRef = useRef();

  const navbarClickHandler = (index) => {
    if (index === 0) 
      parallaxRef.current.scrollTo(0.3);
    else if(index === 3)
      parallaxRef.current.scrollTo(1.3);
  };

  const scrollHandler = () => 
  {

  }

  return (
    <>
      <Parallax pages={2.2  } ref={parallaxRef} onScroll={scrollHandler}>
        <ParallaxLayer offset={0} factor={0.3}>
          <Navbar onClicked={navbarClickHandler}></Navbar>
        </ParallaxLayer>

        <ParallaxLayer offset={0.3}>
          <AnimeShowcase></AnimeShowcase>
        </ParallaxLayer>

        <ParallaxLayer offset={1.2} factor={0.3}>
          <div className={styles["info"]}>
            <BsStar className={styles["info-icon"]}></BsStar>
          <h2>Newest Episodes</h2>
          </div>
          <AnimeCarousel></AnimeCarousel>
        </ParallaxLayer>

        <ParallaxLayer offset={1.9} factor={0.4} speed={0.5}>
          <Footer> </Footer>
        </ParallaxLayer>

      </Parallax>
    </>
  );
};

export default App;
