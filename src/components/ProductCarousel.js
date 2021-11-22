import React from "react";
import { Box } from "@chakra-ui/react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);

export default function ProductCarousel({ images }) {
  return (
    <Swiper navigation={true}>
      {images.map((url, index) => (
        <SwiperSlide key={index}>
          <Box
            height={"60vh"}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundImage={`url(${url})`}
          ></Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
