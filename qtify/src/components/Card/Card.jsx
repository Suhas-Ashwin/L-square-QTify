import React from "react";
import styles from "./Card.module.css";
import { Tooltip, Chip } from "@mui/material";

export default function Card({data, type}){
  

  const getCard = (type) => {
    switch(type){
      case "album" : {
        const {image, songs, slug, follows, title} = data;
        return(
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <div className={styles.wrapper}>
              <div className={styles.card}>
                <img src={image} alt="song" loading="lazy"/>
                <div className={styles.banner}>
                  <div className={styles.pill}>
                    <p>{`${follows} Follows`} </p>
                  </div>
                </div>
              </div>
              <div className={styles.titletext}>
                <p>{title}</p>
              </div>
            </div>
          </Tooltip>
        );


      }
      case "songs" : {
        const {image, likes, title} = data;
        return(
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt="song" loading="lazy"/> 
              <div className={styles.banner}>
                <div className={styles.pill}>
                  <p>{likes} likes</p>
                </div>
              </div>
            </div>
            <div className={styles.titletext}>
              <p>{title}</p>
            </div>
          </div>
        );
      }

      default: 
        return <></>
    }
  }
  
  return getCard(type);
} 