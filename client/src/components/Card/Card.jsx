import React from "react";
import { useState, useRef, useEffect } from "react";
import "./Card.css";
import faceImage from "../../assets/images/face.png";

const Card = () => {
  const imgRef = useRef(null);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [imgSize, setImgSize] = useState({ width: 175, height: 175 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [resizeHandle, setResizeHandle] = useState(null); // 存储正在使用的手柄

  const handlePictureMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    const imgRect = imgRef.current.getBoundingClientRect();
    setOffset({
      x: e.clientX - imgRect.left,
      y: e.clientY - imgRect.top,
    });
  };

  const handlePictureMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
  };

  const handlePictureMouseMove = (e) => {
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
    } else if (isResizing && resizeHandle) {
      handleResizeMouseMove(e);
    }

    updateResizeHandles();
  };

  const handleResizeMouseDown = (e, handle) => {
    e.preventDefault();
    setIsResizing(true);
    setResizeHandle(handle);
  };

  const handleResizeMouseMove = (e) => {  
    const imgRect = imgRef.current.getBoundingClientRect();  
    let newWidth = imgSize.width;  
    let newHeight = imgSize.height;  

    if (resizeHandle === "bottom-right") {  
        newWidth = e.clientX - imgRect.left;  
        newHeight = e.clientY - imgRect.top;  
    } else if (resizeHandle === "bottom-left") {  
        newWidth = imgRect.right - e.clientX;  
        newHeight = e.clientY - imgRect.top;  
    } else if (resizeHandle === "top-right") {  
        newWidth = e.clientX - imgRect.left;  
        newHeight = imgRect.bottom - e.clientY;  
    } else if (resizeHandle === "top-left") {  
        newWidth = imgRect.right - e.clientX;  
        newHeight = imgRect.bottom - e.clientY;  
    }  

    // 限制最小尺寸  
    if (newWidth > 50 && newHeight > 50) {  
        setImgSize({ width: newWidth, height: newHeight });  
        updateResizeHandles(); // 调整后更新手柄位置  
    }  
};  

// 在组件挂载时添加文档的 mouseup 事件监听  
useEffect(() => {  
    const handleMouseUp = () => {  
        setIsDragging(false);  
        setIsResizing(false);  
    };  

    document.addEventListener("mouseup", handleMouseUp);  
    return () => {  
        document.removeEventListener("mouseup", handleMouseUp);  
    };  
}, []);

  const updateResizeHandles = () => {
    const handles = document.querySelectorAll(".resizer");
    handles.forEach((handle) => {
      const imgRect = imgRef.current.getBoundingClientRect();
      const handleRect = handle.getBoundingClientRect();
  
      const handleOffset = 5; // 手柄偏移量
  
      const position = handle.classList.contains("top-left")
        ? { left: imgRect.left - handleRect.width + handleOffset + "px", top: imgRect.top - handleRect.height + handleOffset + "px" }
        : handle.classList.contains("top-right")
        ? { left: imgRect.right - handleOffset + "px", top: imgRect.top - handleRect.height + handleOffset + "px" }
        : handle.classList.contains("bottom-left")
        ? { left: imgRect.left - handleRect.width + handleOffset + "px", top: imgRect.bottom - handleOffset + "px" }
        : // bottom-right
          { left: imgRect.right - handleOffset + "px", top: imgRect.bottom - handleOffset + "px" };
  
      handle.style.left = position.left;
      handle.style.top = position.top;
    });
  };  

  return (
    <div className="card-container">
      <div
        className="card"
        ref={containerRef}
        onMouseMove={handlePictureMouseMove}
        onMouseUp={handlePictureMouseUp}
        onMouseLeave={handlePictureMouseUp} // 在鼠标离开容器时也停止拖动
      >
        <img
          className="face"
          ref={imgRef}
          src={faceImage} // 替换为你的图片URL
          alt="Draggable"
          onMouseDown={handlePictureMouseDown}
          style={{
            cursor: isDragging ? "move" : "pointer",
            position: "absolute",
            width: imgSize.width, // 设置动态宽度
            height: imgSize.height, // 设置动态高度
          }}
        />

        <div
          className="resizer top-left"
          onMouseDown={(e) => handleResizeMouseDown(e, "top-left")}
        />
        <div
          className="resizer top-right"
          onMouseDown={(e) => handleResizeMouseDown(e, "top-right")}
        />
        <div
          className="resizer bottom-left"
          onMouseDown={(e) => handleResizeMouseDown(e, "bottom-left")}
        />
        <div
          className="resizer bottom-right"
          onMouseDown={(e) => handleResizeMouseDown(e, "bottom-right")}
        />

        <div className="data">
          <div className="overall">91</div>
          <div className="position">ST</div>
          <div className="name">Haaland</div>
          <ul className="data-list">
            <li className="data-item" id="pac">
              <div className="type">PAC</div>
              <div className="value">88</div>
            </li>
            <li className="data-item" id="sho">
              <div className="type">SHO</div>
              <div className="value">92</div>
            </li>
            <li className="data-item" id="pas">
              <div className="type">PAS</div>
              <div className="value">70</div>
            </li>
            <li className="data-item" id="dri">
              <div className="type">DRI</div>
              <div className="value">81</div>
            </li>
            <li className="data-item" id="def">
              <div className="type">DEF</div>
              <div className="value">45</div>
            </li>
            <li className="data-item" id="phy">
              <div className="type">PHY</div>
              <div className="value">88</div>
            </li>
          </ul>
          <ul className="logo-list">
            <li className="logo-item" id="nationality">
              x
            </li>
            <li className="logo-item" id="league">
              y
            </li>
            <li className="logo-item" id="club">
              z
            </li>
          </ul>
        </div>
      </div>

      <div className="controls">
        <div className="control-container">
          <div className="control-overall-container">
            <div className="control-overall-item">
              <div className="control-overall-title">姓名</div>
              <input type="text" placeholder="Haaland"></input>
            </div>

            <div className="control-overall-item">
              <div className="control-overall-title">综合</div>
              <input type="number" placeholder="91"></input>
            </div>
          </div>

          <div className="control-data-container">
            <div className="control-data-item">
              <div className="control-data-title">PAC</div>
              <input type="number" placeholder="88"></input>
            </div>

            <div className="control-data-item">
              <div className="control-data-title">SHO</div>
              <input type="number" placeholder="92"></input>
            </div>

            <div className="control-data-item">
              <div className="control-data-title">PAS</div>
              <input type="number" placeholder="70"></input>
            </div>

            <div className="control-data-item">
              <div className="control-data-title">DRI</div>
              <input type="number" placeholder="81"></input>
            </div>

            <div className="control-data-item">
              <div className="control-data-title">DEF</div>
              <input type="number" placeholder="45"></input>
            </div>

            <div className="control-data-item">
              <div className="control-data-title">PHY</div>
              <input type="number" placeholder="88"></input>
            </div>
          </div>

          <div className="control-picture-container1">
            <div className="control-picture-item">
              <div className="control-picture-title">卡牌</div>
              <input type="file"></input>
            </div>

            <div className="control-picture-item">
              <div className="control-picture-title">国籍</div>
              <input type="file"></input>
            </div>
          </div>

          <div className="control-picture-container2">
            <div className="control-picture-item">
              <div className="control-picture-title">联赛</div>
              <input type="file"></input>
            </div>

            <div className="control-picture-item">
              <div className="control-picture-title">俱乐部</div>
              <input type="file"></input>
            </div>
          </div>

          <div className="custom-player-face">
            <div className="custom-player-face-title">头像</div>
            <input type="file"></input>
          </div>

          <div className="control-professional-container">
            <div className="control-professional-item">
              <div className="control-professional-title">位置</div>
              <input type="text" placeholder="ST"></input>
            </div>
            <div className="control-professional-item">
              <div className="control-professional-title">替换位置</div>
              <input type="text" placeholder="LW"></input>
            </div>
            <div className="control-professional-item">
              <div className="control-professional-title">惯用脚</div>
              <input type="text" placeholder="Right"></input>
            </div>
          </div>

          <div className="control-diy-container">
            <div className="control-diy-item">
              <div className="control-diy-title">个人风格</div>
              <input type="text" placeholder="锋霸"></input>
            </div>
            <div className="control-diy-item">
              <div className="control-diy-title">荣誉</div>
              <input type="text" placeholder="欧冠"></input>
            </div>
            <div className="control-diy-item">
              <div className="control-diy-title">个人描述</div>
              <input type="text" placeholder="爱吃小孩"></input>
            </div>
          </div>

          <div className="control-save-container">
            <button className="control-save-btn">保存数据</button>
            <button className="control-generate-btn">生成图片</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
