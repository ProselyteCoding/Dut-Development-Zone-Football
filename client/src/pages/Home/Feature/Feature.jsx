import React from 'react'
import './Feature.css'
import feature from '../../../assets/images/feature.jpg'
import texture from '../../../assets/images/texture.png'
import {init} from 'ityped'
import { useEffect, useRef } from 'react'

const Feature = () => {
  const textRef = useRef(null);
  useEffect(() => {
    if (textRef.current) {
      init(textRef.current, {
        strings: ['享受足球', '挥洒汗水', '收获友谊', '赢得荣誉'],
        typeSpeed: 150,
        backSpeed: 150,
        backDelay: 1700,
        loop: true,
        showCursor: false,
      });
    }
  }, []);

  return (
    <div className='feature-container'>
      <div className='feature-image-container'>
        <div className='feature-decorator-left'></div>
        <div className="feature-decorator-right"></div>
        <img src={feature} alt='feature' />
      </div>
      <div className="feature-dots-container">
          <button className="feature-btn-dot"></button>
          <button className="feature-btn-dot"></button>
          <button className="feature-btn-dot"></button>
        </div>
      <div className='feature-bottom'>
        <img src={texture} alt='texture' />
      </div>
      <div className='typewriter-container'>
        <span className='typewriter-fixed'>在这里</span>
        <span className='typewriter-text' ref={textRef}></span>
      </div>
    </div>
  )
}

export default Feature
