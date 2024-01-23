import React from "react";
import styles from "./Hero.module.css"
import {ReactComponent as Image} from "../../assets/vibrating-headphone 1.svg"
export default function Hero(){

  return (
    <div className={styles.hero}>
      <div className={styles.herotext}>
        <p> 10 Thousand Songs, ad-free </p>
        <p> Over thousands podcast episodes </p>
      </div>
      <Image />
    </div>
  )
}