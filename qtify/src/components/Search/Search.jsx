import React from "react";
import styles from "./Search.module.css";
import {ReactComponent as SearchIcon} from "../../assets/Search icon.svg";

export default function Search(display){

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <form className={styles.wrapper}   onSubmit={ (e) => handleSubmit} >
      <input className={styles.search} required placeholder={display} />
      <button className={styles.searchBtn} type="submit">
        <SearchIcon/>
      </button>
    </form>
  )
}