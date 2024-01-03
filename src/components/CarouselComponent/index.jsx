import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Virtual } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/virtual";

import CardCarousel from "../../components/CardCarousel";
import Container from "./styles";

const CarouselComponent = () => {
  
  const slides = Array.from({ length: 8}).map(
    (index) => `Slide ${index + 2}`
  );

  return (


<Container>

    <Swiper
      modules={[Navigation, Pagination, A11y, Virtual]}
      slidesPerView={2}
      virtual
      spaceBetween={1000}
      navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {slides.map((item) => (
    
        <SwiperSlide key={item.id} >
        <CardCarousel item={item}/>
        </SwiperSlide>
      
      ))}
    </Swiper>
</Container>


  );

};

export default CarouselComponent;
