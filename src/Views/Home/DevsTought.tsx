// Import Swiper React components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// Import necessary Swiper modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Slidermaker from "./Slidermaker";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

const DevsToughtSlider = () => {
  return (
    <div className="custom-swiper-container flex justify-center items-center relative">
      {/* Custom navigation buttons positioned around the slides */}
      <button className="custom-prev p-3 rounded-full absolute bg-gray-200 z-10" style={{ left: "5%", top: "50%", transform: "translateY(-50%)" }}>
        <ArrowBackIcon boxSize={6} />
      </button>

      <Swiper
        style={{ height: "250px", width: "50%" }}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={5}
        slidesPerView={1}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
      >
        <SwiperSlide>
          <Slidermaker username="AliAbbasiS" thought="Coding is my superpower!" />
        </SwiperSlide>
        <SwiperSlide>
          <Slidermaker username="saeed0920" thought="Building the future, one line at a time." />
        </SwiperSlide>
        <SwiperSlide>
          <Slidermaker username="RezaNezhadSalari" thought="Innovating through code." />
        </SwiperSlide>
      </Swiper>

      <button className="custom-next p-3 rounded-full absolute bg-gray-200 z-10" style={{ right: "5%", top: "50%", transform: "translateY(-50%)" }}>
        <ArrowForwardIcon boxSize={6} />
      </button>
    </div>
  );
};

export default DevsToughtSlider;
