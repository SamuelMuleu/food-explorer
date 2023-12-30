import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import Button from "../ButtonRed";
import Container from "./styles";

const CarouselComponent = () => {
  <Swiper
  modules={[Navigation, Pagination, Scrollbar, A11y]}
  spaceBetween={50}
  slidesPerView={3}
  navigation
  pagination={{ clickable: true }}
  scrollbar={{ draggable: true }}
  onSwiper={(swiper) => console.log(swiper)}
  onSlideChange={() => console.log('slide change')}
  >
    <SwiperSlide> Slide 1 </SwiperSlide>
    <SwiperSlide> Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
  </Swiper>;
  return (
    <Container>
      <Button placeholder="Incluir" />
    </Container>
  );
};

export { CarouselComponent };
