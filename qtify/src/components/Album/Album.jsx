import React from "react";
import styles  from "./Album.module.css";
import Card from "../Card/Card";

export default function Album(data,text){
  console.log(data.data);
  return(
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h1 className={styles.text}> Top Album</h1>
        <button className={styles.btn}> Show all </button>
        
      </div>
      <div className={styles.grid}>
        {data.data.map((ele) => <Card data={ele} type={"album"}/>)}
      </div>
    </div>
  )
}