import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";

const Slider = () => {
  return (
    <div className=" mx-auto mt-4">
      <Swiper style={{ height: "80vh", width: "100vh" }} className="mySwiper">
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/stay-healthy-body-care-living-lifestyle-nutrious-food_53876-121406.jpg?size=626&ext=jpg&uid=R101288307&ga=GA1.2.311772693.1668666155&semt=robertav1_2_sidr"
            alt="Image not found" className="md:w-full w-11/12 mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-vector/positive-lettering-with-food_52683-34388.jpg?size=626&ext=jpg&uid=R101288307&ga=GA1.2.311772693.1668666155&semt=robertav1_2_sidr"
            alt="image not found" className="md:w-full w-11/12 mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide> <img className="md:w-full w-11/12 mx-auto h-full"
            src="https://img.freepik.com/free-photo/dessert-hobby-gluten-bakery-concept_53876-15861.jpg?size=626&ext=jpg&uid=R101288307&ga=GA1.2.311772693.1668666155&semt=robertav1_2_sidr"
          /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
