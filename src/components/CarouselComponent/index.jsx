import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../ButtonRed";
import Container from "./styles";



const CarouselComponent = ({ dishes }) => {
const settings = {
  dots: true,
  infinite: true,
  speed: 100,
  slidesToShow: 2, 
  slidesToScroll: 1,
};

  return (
    <Container>


    <Slider {...settings}>
      {dishes.map((dish,index) => (
        <div key={index}>
          <img src={dish.image}></img>
          <h3>{dish.description}</h3>
          <Button />
        </div>
    ))}
    </Slider>

    </Container>
  );
};

export default CarouselComponent;
