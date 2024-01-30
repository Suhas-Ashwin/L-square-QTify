import React, { useEffect } from "react";
import styles from "./Carousel.module.css"
// import Swiper core and required modules
import { Navigation } from 'swiper';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import CrouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CrouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

const Controls = ({data}) => {
  const swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(0);
  }, [data]);

  return <></>
}

export default function Carousel({data, renderComponent}){
  return (
    <div className={styles.wrapper}>
      <Swiper
        // install Swiper modules
        styles={{padding: "0px 20px"}}
        initialState={0}
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={"auto"}
        allowTouchMove
      >
        <Controls data={data}/>
        <CrouselLeftNavigation/>
        <CrouselRightNavigation/>
        {data.map((ele) => {
          return <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
        })}
      </Swiper>
    </div>
  );
}