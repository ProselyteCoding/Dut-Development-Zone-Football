import React from "react";
import "./Feature.scss";
import feature from "../../../assets/images/feature.jpg";
import texture from "../../../assets/images/texture.png";
import Typewriter from "./Typewriter/Typewriter";
import Bullet from "./Bullet/Bullet";

const Feature = () => {
  

  return (
    <div className="feature-container">
      <div className="feature-image-container">
        <div className="feature-decorator-left"></div>
        <div className="feature-decorator-right"></div>
        <img src={feature} alt="feature" />
      </div>
      <div className="feature-dots-container">
        <button className="feature-btn-dot"></button>
        <button className="feature-btn-dot"></button>
        <button className="feature-btn-dot"></button>
      </div>
      {/* <Bullet /> */}
      <Typewriter />
      <div className="feature-bottom">
        <img src={texture} alt="texture" />
      </div>
    </div>
  );
};

export default Feature;
