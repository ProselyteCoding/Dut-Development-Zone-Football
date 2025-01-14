import React from "react";
import "./Feature.scss";
import feature from "../../../assets/images/feature.jpg";
// import texture from "../../../assets/images/texture.png";
import Typewriter from "./Typewriter/Typewriter";
import Bullet from "./Bullet/Bullet";

const Feature = () => {
  

  return (
    <div className="feature-container">
      <div className="feature-screen-container">
        {/* <div className="feature-top">
          <img src={123} alt="icon"></img>
          <img src={123} alt="icon"></img>
          <img src={123} alt="icon"></img>
        </div>
        <div className="feature-content">
          <div className="feature-title"></div>
          <div className="feature-description"></div>
        </div> */}
        <div className="feature-decorator-left"></div>
        <div className="feature-decorator-right"></div>
        <img src={feature} alt="feature" />
        {/* <div className="feature-bottom">
          <button className="prev"></button>
          <button className="play"></button>
          <button className="next"></button>
        </div> */}
      </div>
      {/* <div className="feature-dots-container">
        <button className="feature-btn-dot"></button>
        <button className="feature-btn-dot"></button>
        <button className="feature-btn-dot"></button>
      </div> */}
      <Bullet />
      <Typewriter />
      {/* <div className="feature-bottom">
        <img src={texture} alt="texture" />
      </div> */}
    </div>
  );
};

export default Feature;
