import React, { useEffect } from "react";
import styles from "./CarouselLeftNavigation.module.css";
import {ReactComponent as LeftArrow} from "../../../assets/LeftArrow.svg";
import {useSwiper} from "swiper/react";
import { useState } from "react";

export default function CrouselLeftNavigation(){
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);


  useEffect(() => {
    swiper.on("slideChange", function(){
      setIsBeginning(swiper.isBeginning);
    })
  }, []);

  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  )
}

