import React from "react";
import "./Slider.scss";
import slider1 from "../../../assets/images/slider1.jpg";
import slider2 from "../../../assets/images/slider2.jpg";
import slider3 from "../../../assets/images/slider3.jpg";
import slider4 from "../../../assets/images/slider4.jpg";
import slider5 from "../../../assets/images/slider5.jpg";
import leftArrow from "../../../assets/images/left-arrow-button.png";
import rightArrow from "../../../assets/images/right-arrow-button.png";

const Slider = () => {
  const sliders = [slider1, slider2, slider3, slider4, slider5];

  const handlePrev = () => {};

  const handleNext = () => {};

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
          {sliders.map((slider, index) => (
            <img
              className="slider-item"
              key={index}
              src={slider}
              alt={`Slider ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
