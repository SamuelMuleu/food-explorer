import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import CardCarousel from "../../components/CardCarousel";

const CarouselComponent = ({index}) => {
  return (
    <Swiper
      slidesPerView={index}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}

    >
     
        <SwiperSlide  >
          <CardCarousel />
        </SwiperSlide>
     
    </Swiper>
  );
};

export default CarouselComponent;
