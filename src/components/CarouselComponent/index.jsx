import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import CardCarousel from "../CardCarousel";
import { Container } from "./styles";

const CarouselComponent = ({ searchResults, dish }) => {

  const categories = [...new Set(dish.map((dish) => dish.categoria))];


  const [dishesByCategory, setDishesByCategory] = useState({});

  useEffect(() => {

    const dishesGroupedByCategory = {};
    categories.forEach((category) => {
      dishesGroupedByCategory[category] = dish.filter((dishItem) => dishItem.categoria === category);
    });
    setDishesByCategory(dishesGroupedByCategory);
  }, [dish]);



  const filteredDishes = searchResults ? searchResults : [];
  console.log({ filteredDishes })
  return (
    <Container>
{categories.map((category, index) => (
  <div className="div-carousel" key={index}>
    <h2>{category}</h2>
    <Swiper
      slidesPerView={2}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: -80,
        },
      }}
    >

  {filteredDishes.length > 0 && filteredDishes.map((prato, index) => (
              <SwiperSlide key={prato.id}>
                <CardCarousel dish={prato} searchResults={searchResults} />
              </SwiperSlide>
            ))}
            {!filteredDishes.length && dishesByCategory[category] && dishesByCategory[category].map((prato, index) => (
              <SwiperSlide key={prato.id}>
                <CardCarousel dish={prato} />
              </SwiperSlide>
            ))}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </Swiper>
  </div>
))}
    </Container>
  );
};

export default CarouselComponent;
