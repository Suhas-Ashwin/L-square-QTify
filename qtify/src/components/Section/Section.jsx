import React, {useState, useEffect} from "react";
import styles from "./Section.module.css"
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Filters from "../Filters/Filters";

export default function Section({title,data,filterSource,type}){
  const [crouselToggle, setCrouselToggle] = useState(true);
  const [filters,setFilters] = useState([{key:"all", label:"All"}]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);

  const handleToggle = () =>{
    setCrouselToggle((prevState) => !prevState);
  }

  useEffect(() => {
    if(filterSource){
      filterSource().then((response) => {
        const {data} = response;
        setFilters([...filters, ...data]);
      })
    }
  }, []);

  const showFilters = filters.length > 1;
  
  const cardToRender = data.filter((card) => showFilters && selectedFilterIndex !== 0 ? 
  card.genre.key === filters[selectedFilterIndex].key 
  : card );
  return(
    <div>
        <div className={styles.header}>
          <h3>{title}</h3>
          {!showFilters && (<h4 className={styles.toggleText} onClick={handleToggle}>{!crouselToggle ? "Collapse All" : "Show All"}</h4>)}
        </div>

        {showFilters && (
          <div className={styles.filterWrapper}>
            <Filters 
            filters={filters}
            selectedFilterIndex={selectedFilterIndex}
            setSelectedFilterIndex = {setSelectedFilterIndex}
            />
          </div>
        )}
      { cardToRender.length === 0 ? ( <CircularProgress/>
      ) : (
        <div className={styles.cardWrapper}>
          {!crouselToggle ? (
            <div className={styles.wrapper}>
              {cardToRender.map((ele) => {
                return <Card data={ele} type={type}/>
              })}
            </div>
          ) :(
            //crousle logic
            <Carousel 
            data={cardToRender}
            renderComponent={(data) => <Card data={data} type={type}/> }
            />
          )}
        </div>
      )}
    </div>
  )
}