import React, { useEffect, useState } from 'react';
import BulletScreen, {StyledBullet} from 'rc-bullets';

const headUrl='https://zerosoul.github.io/rc-bullets/assets/img/heads/girl.jpg';//设置为用户头像

const Bullet = () => {
  // 弹幕屏幕
  const [screen, setScreen] = useState(null);
  // 弹幕内容
  const [bullet, setBullet] = useState('');
  useEffect(() => {
    // 给页面中某个元素初始化弹幕屏幕，一般为一个大区块。此处的配置项全局生效
    let s = new BulletScreen('.screen',{duration:20});
    setScreen(s);
  }, []);
  // 弹幕内容输入事件处理
  const handleChange = ({ target: { value } }) => {
    setBullet(value);
  };
  // 发送弹幕
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
    }
  };
  return (
    <div className='container'>
      <div className="screen"></div>
      <input value={bullet} onChange={handleChange} />
      <button onClick={handleSend}>发送</button>
    </div>
  );
}

export default Bullet;
