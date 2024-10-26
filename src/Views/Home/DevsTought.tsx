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
      <button
        className="custom-prev p-3 rounded-full absolute bg-Low_Yellow_border  z-10"
        style={{ left: "5%", top: "50%", transform: "translateY(-50%)" }}
      >
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
        autoplay={{ delay: 5000 }}
        loop
      >
        <SwiperSlide>
          <Slidermaker
            username="AliAbbasiS"
            thought="Coffee should taste like a wake-up slap with a side of attitude—bitter, bold, and just caffeinated enough to make you feel like a superhero... or at least functional"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slidermaker
            username="saeed0920"
            thought="A good coffee should result from extracting 36 grams from 18 grams of coffee beans, all within 30 seconds"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slidermaker
            username="RezaNezhadSalari"
            thought="Black Ivory Coffee is created through a process whereby coffee cherries are naturally refined by Thai elephants in the remote rural province of Surin, Thailand"
          />
        </SwiperSlide>
      </Swiper>

      <button
        className="custom-next p-3 rounded-full absolute bg-Low_Yellow_border z-10"
        style={{ right: "5%", top: "50%", transform: "translateY(-50%)" }}
      >
        <ArrowForwardIcon className="" boxSize={6} />
      </button>
    </div>
  );
};

export default DevsToughtSlider;
