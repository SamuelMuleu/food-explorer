
import React from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react'; 

import CardCarousel from "../../components/CardCarousel";

const CarouselComponent = () => {
  const [sliderRef, sliderInstance] = useKeenSlider({

    mode:'free',
    slides:origin|'center'|2,

    slideChanged() {

    },
  });

  const slides = Array.from({ length: 8 }).map(
    (index) => `Slide ${index + 1}`
  );



  return (
    <div ref={sliderRef} className="keen-slider">
      {slides.map((item, index) => (
        <div key={index} className="keen-slider__slide">
          <CardCarousel item={item} />
        </div>
      ))}
    </div>
  );
};

export default CarouselComponent;
