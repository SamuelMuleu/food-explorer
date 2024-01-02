import { Navigation, Pagination,Scrollbar, A11y,Virtual,} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";
import CardCarousel from "../../components/CardCarousel";

const CarouselComponent = () => {
  const slides = Array.from({ length: 10 }).map(
    (index) => `Slide ${index + 1}`
  );
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      slidesPerView={2}
      virtual={true}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {slides.map((index) => (
        <SwiperSlide key={index}>
          <CardCarousel />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselComponent;
