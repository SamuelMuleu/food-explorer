import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import CardCarousel from "../CardCarousel";
import Container from "./styles";

const CarouselComponent = ({ dataArray }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      spacing: -110,
    },

    range: 2,
    loop: true,
    mode: "auto",
    breakpoints: {
      "(min-width:1090px)": {
        slides: {
          spacing: -1050,
        },
      },
    },

    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const handleOpacity = (index) => {
    const distance = Math.abs(currentSlide - index);
    const maxDistance = 10;
    const opacity = 0.8 - Math.min(distance, maxDistance) / maxDistance;
    return opacity;
  };

  return (
    <Container>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {dataArray.map((item) => (
            <div
              key={item.id}
              className="keen-slider__slide"
              style={{ opacity: handleOpacity(item.id) }}
            >
              <CardCarousel item={item} />
            </div>
          ))}
        </div>
      </div>
      {loaded && instanceRef.current && (
        <>
          <Arrow
            className="arrow"
            left
            onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
          />

          <Arrow
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 10
            }
          />
        </>
      )}
    </Container>
  );
};

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#ffff"
      cursor="pointer"
      fillOpacity="0.2"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
export default CarouselComponent;
