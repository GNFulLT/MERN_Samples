import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import styles from "./section.module.css"

const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <section className={styles["secs"]}></section>
    </>
  );
}

export default App