import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Container from "./styles";

import CardCarousel from "../../components/CardCarousel";

const CarouselComponent = ({dataArray}) => {


  const [sliderRef] = useKeenSlider({
    slides: {
spacing:-130,
      origin: 'auto',
    },
    

    range: `align`,
    loop: true,
    mode: 'center',


    slideChanged() {},
  });
  
  
  
  
  return (
    <Container >

   <div ref={sliderRef}  className="keen-slider" >
      {dataArray.map(( item ) => (
        <div key={item}  className="keen-slider__slide" >
          <CardCarousel item={item}/>
   
        </div>
      ))}
    </div>
    </Container>
  );
};

export default CarouselComponent;
