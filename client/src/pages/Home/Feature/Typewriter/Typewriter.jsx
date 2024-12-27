import React, { useEffect, useRef } from 'react'
import { init } from "ityped";
import "./Typewriter.scss";

const Typewriter = () => {

    const textRef = useRef(null);
      useEffect(() => {
        if (textRef.current) {
          init(textRef.current, {
            strings: ["享受足球", "挥洒汗水", "收获友谊", "赢得荣誉"],
            typeSpeed: 150,
            backSpeed: 150,
            backDelay: 1700,
            loop: true,
            showCursor: false,
          });
        }
      }, []);
  return (
    <div className="typewriter-container">
        <span className="typewriter-fixed">在这里</span>
        <span className="typewriter-text" ref={textRef}></span>
    </div>
  )
}

export default Typewriter
