import React, {useState} from "react";
import styles from "./Section.module.css"
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

export default function Section({title,data,type}){
  const [crouselToggle, setCrouselToggle] = useState(true);
  if(type === "songs")
    console.log(data);
  const handleToggle = () =>{
    setCrouselToggle((prevState) => !prevState);
  }

  return(
    <div>
      { type === "album" ? ( 
        <div className={styles.header}>
          <h3>{title}</h3>
          <h4 className={styles.toggleText} onClick={handleToggle}>{!crouselToggle ? "Collapse All" : "Show All"}</h4>
        </div>
      ):(
        <div>
          <h3>{title}</h3>
          <div className={styles.genres}>
            <h4 > All  </h4>
            <h4> Rock </h4>
            <h4> Pop  </h4>
            <h4> Jazz </h4>
            <h4> Blues</h4>
          </div>
        </div>
      )}  
        
      
      { data.length === 0 ? ( <CircularProgress/>
      ) : (
        <div className={styles.cardWrapper}>
          {!crouselToggle ? (
            <div className={styles.wrapper}>
              {data.map((ele) => {
                return <Card data={ele} type={type}/>
              })}
            </div>
          ) :(
            //crousle logic
            <Carousel 
            data={data}
            renderComponent={(data) => <Card data={data} type={type}/> }
            />
          )}
        </div>
      )}
    </div>
  )
}