import React from 'react'
import './Feature.css'
import feature from '../../../assets/images/feature.jpg'
import texture from '../../../assets/images/texture.png'

const Feature = () => {
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
        <span className='typewriter-text'></span>
      </div>
    </div>
  )
}

export default Feature
