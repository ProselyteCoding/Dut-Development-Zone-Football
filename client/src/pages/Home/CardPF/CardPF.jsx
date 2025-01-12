import React from 'react'
import {useNavigate} from 'react-router-dom'
import './CardPF.scss'
import banner1 from '../../../assets/images/banner1.png'
import banner2 from '../../../assets/images/banner2.png'
import banner3 from '../../../assets/images/banner3.png'
import banner4 from '../../../assets/images/banner4.png'
import banner5 from '../../../assets/images/banner5.png'
import banner6 from '../../../assets/images/banner6.png'
import banner7 from '../../../assets/images/banner7.png'
import banner8 from '../../../assets/images/banner8.png'

const CardPF = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/card');
  }

  return (
    <div className='cardpf-container'>
      <div className='content'>
        <div className='text'>制作专属于你的</div>
        <div className='text'>独一无二的球星卡</div>
        <button onClick={handleClick}>立即尝试</button>
      </div>
      <div className='banner'>
        <div className="slider" style={{"--quantity": 8}}>
          <div className="item" style={{"--position": 1}}>
            <img src={banner1} alt="banner1" />
          </div>
          <div className="item" style={{"--position": 2}}>
            <img src={banner2} alt="banner2" />
          </div>
          <div className="item" style={{"--position": 3}}>
            <img src={banner3} alt="banner3" />
          </div>
          <div className="item" style={{"--position": 4}}>
            <img src={banner4} alt="banner4" />
          </div>
          <div className="item" style={{"--position": 5}}>
            <img src={banner5} alt="banner5" />
          </div>
          <div className="item" style={{"--position": 6}}>
            <img src={banner6} alt="banner6" />
          </div>
          <div className="item" style={{"--position": 7}}>
            <img src={banner7} alt="banner7" />
          </div>
          <div className="item" style={{"--position": 8}}>
            <img src={banner8} alt="banner8" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPF
