import React, { useState } from "react";
import "./Slider.scss";
import slider1 from "../../../assets/images/slider1.jpg";
import slider2 from "../../../assets/images/slider2.jpg";
import slider3 from "../../../assets/images/slider3.jpg";
import slider4 from "../../../assets/images/slider4.jpg";
import slider5 from "../../../assets/images/slider5.jpg";
import slider6 from "../../../assets/images/slider6.jpg";
import slider7 from "../../../assets/images/slider7.jpg";
import slider8 from "../../../assets/images/slider8.jpg";
import slider9 from "../../../assets/images/slider9.jpg";
import leftArrow from "../../../assets/images/left-arrow-button.png";
import rightArrow from "../../../assets/images/right-arrow-button.png";

const Slider = () => {
  const sliders = [
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
    slider6,
    slider7,
    slider8,
    slider9,
  ];
  const [index, setIndex] = useState(0);
  const handlePrev = () => {
    setIndex((index) => {
      if (index === 0) return sliders.length - 3;
      return index - 3;
    });
  };

  const handleNext = () => {
    setIndex((index) => {
      if (index === sliders.length - 3) return 0;
      return index + 3;
    });
  };

  return (
    <div>
      <div className="slider-container">
        <button
          className="slider-btn-prev"
          onClick={handlePrev}
          style={{
            backgroundImage: `url(${leftArrow})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></button>
        <button
          className="slider-btn-next"
          onClick={handleNext}
          style={{
            backgroundImage: `url(${rightArrow})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></button>

        <div className="slider-list">
          <img
            className="slider-item"
            src={sliders[index]}
            alt={`Slider ${index + 1}`}
          />
          <img
            className="slider-item"
            src={sliders[index + 1]}
            alt={`Slider ${index + 2}`}
          />
          <img
            className="slider-item"
            src={sliders[index + 2]}
            alt={`Slider ${index + 3}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
