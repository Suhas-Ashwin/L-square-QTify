import React from "react";
import Logo from "../Logo/Logo"
import Search from "../Search/Search"
import Button from "../Button/Button"
import styles from "./Navbar.module.css"

export default function Navbar(){

  return(
    <>
      <nav className={styles.navbar}>
        <a href="/">
          <Logo/>
        </a>
        <Search display={"Search a album of your choice"}/>
        <Button children={"Give Feedback"}/>
      </nav>
    </>
  )
}