import { Navigation, Pagination, Scrollbar, A11y, Virtual} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/bundle'
import CardCarousel from "../../components/CardCarousel";

const CarouselComponent = () => {


  const slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );
  return (


    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      virtual
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {slides.map((slideContent,index)=>(
         <SwiperSlide key={slideContent} virtualIndex={index}>

        <CardCarousel />
      </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselComponent;
