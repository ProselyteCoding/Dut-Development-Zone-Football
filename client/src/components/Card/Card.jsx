import React from "react";
import { useState, useRef } from "react";
import "./Card.css";

const Card = () => {
  const imgRef = useRef(null);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const imgRect = imgRef.current.getBoundingClientRect();
    setOffset({
      x: e.clientX - imgRect.left,
      y: e.clientY - imgRect.top,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const imgRect = imgRef.current.getBoundingClientRect();

      let x = e.clientX - offset.x;
      let y = e.clientY - offset.y;

      // 限制拖动范围
      if (x < containerRect.left) x = containerRect.left;
      if (x + imgRect.width > containerRect.right)
        x = containerRect.right - imgRect.width;
      if (y < containerRect.top) y = containerRect.top;
      if (y + imgRect.height > containerRect.bottom)
        y = containerRect.bottom - imgRect.height;

      // 更新图片位置
      imgRef.current.style.left = `${x - containerRect.left}px`;
      imgRef.current.style.top = `${y - containerRect.top}px`;
    }
  };

  return (
    <div className="card-container">
      <div
        className="card"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp} // 在鼠标离开容器时也停止拖动
      >
        <img
          className="face"
          ref={imgRef}
          src="https://via.placeholder.com/100" // 替换为你的图片URL
          alt="Draggable"
          onMouseDown={handleMouseDown}
          style={{ position: 'absolute' }} // 确保图片可以自由移动
        />

        <div className="data">
          <div className="overall">91</div>
          <div className="position">ST</div>
          <div className="name">Haaland</div>
          <ul className="data-list">
            <li className="data-item" id="pac">88</li>
            <li className="data-item" id="sho">92</li>
            <li className="data-item" id="pas">70</li>
            <li className="data-item" id="dri">81</li>
            <li className="data-item" id="def">45</li>
            <li className="data-item" id="phy">88</li>
          </ul>
          <ul className="logo-list">
            <li className="logo-item" id="nationality">x</li>
            <li className="logo-item" id="league">y</li>
            <li className="logo-item" id="club">z</li>
          </ul>
        </div>

        <div className="controls">
          <div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Card;
