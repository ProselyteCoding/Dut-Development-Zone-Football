import React from "react";
import feature from "../../../../assets/images/feature.png";

const Screen = () => {
  return (
    <div className="feature-screen-container">
      <div className="feature-top">
        <img src={123} alt="icon"></img>
        <img src={123} alt="icon"></img>
        <img src={123} alt="icon"></img>
      </div>
      <div className="feature-content">
        <div className="feature-content-switchbar">
            <button className="feature-infor-btn"></button>
            <button className="feature-comment-btn"></button>
        </div>
        <div className="feature-infor-container">
          <div className="feature-background-container">
            <div className="feature-author">
              <img className="author-face"></img>
              <div className="author-infor"></div>
            </div>
            <div className="feature-title">Feature Title</div>
          </div>
          <div className="feature-switch-container">
            <div className="feature-switch-title"></div>
            <div className="feature-switch-menu">
              <div className="feature-switch-item"></div>
              <div className="feature-switch-item"></div>
              <div className="feature-switch-item"></div>
              <div className="feature-switch-item"></div>
              <div className="feature-switch-item"></div>
            </div>
          </div>
        </div>
        <div className="feature-comment-container">
            <div className="comment-editor">
                <input type="text" />
                <button className="comment-submit"></button>
            </div>
        </div>
      </div>
      <div className="feature-decorator-left"></div>
      <div className="feature-decorator-right"></div>
      <img src={feature} alt="feature" />
      <div className="feature-bottom">
        <button className="prev"></button>
        <button className="play"></button>
        <button className="next"></button>
      </div>
    </div>
  );
};

export default Screen;
