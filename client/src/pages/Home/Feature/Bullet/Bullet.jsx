import React, { useEffect, useState } from 'react';  
import BulletScreen, { StyledBullet } from 'rc-bullets';  
import './Bullet.scss';
import head from "../../../../assets/images/head.jpg"   

const headUrl = head;  

export default function Demo() {  
  const [screen, setScreen] = useState(null);  
  const [bullet, setBullet] = useState('');  

  useEffect(() => {  
    // 初始化弹幕屏幕  
    const s = new BulletScreen('.screen', { duration: 20 });  
    setScreen(s);  
  }, []);  

  const handleChange = ({ target: { value } }) => setBullet(value);  

  const handleSend = () => {  
    if (bullet) {  
      screen.push(  
        <StyledBullet  
          head={headUrl}  
          msg={bullet}  
          backgroundColor={'#fff'}  
          size='large'  
        />  
      );  
      setBullet(''); // 发送后清空输入框  
    }  
  };  

  return (  
    <div className="bullet-container">
      <div className="screen"></div>  
      <input value={bullet} onChange={handleChange} />  
      <button onClick={handleSend}>发送</button>  
    </div>  
  );  
}