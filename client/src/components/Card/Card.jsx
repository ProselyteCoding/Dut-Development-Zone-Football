import React from "react";
import { useState, useRef, useEffect } from "react";
import "./Card.css";
import faceImage from "../../assets/images/face.png";
import html2canvas from "html2canvas";

const Card = () => {
  const imgRef = useRef(null);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [imgSize, setImgSize] = useState({ width: 175, height: 175 }); //图片大小
  const [offset, setOffset] = useState({ x: 0, y: 0 }); //偏移
  const [resizeHandle, setResizeHandle] = useState(null); // 存储正在使用的手柄
  const [playerData, setPlayerData] = useState({
    face: '../../assets/images/face.png',
    name: 'Haaland',
    overall: 91,
    pac: 88,
    sho: 92,
    pas: 70,
    dri: 81,
    def: 45,
    phy: 88,
    position: 'ST',
    replacePosition: 'LW',
    foot: 'Right',
    style: '锋霸',
    honors: '欧冠',
    description: '爱吃小孩',
    nation: '',
    league: '',
    club: ''
  });  

  // 拖动图片
  const handlePictureMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    const imgRect = imgRef.current.getBoundingClientRect();
    setOffset({
      x: e.clientX - imgRect.left,
      y: e.clientY - imgRect.top,
    });
  };

  // 松开图片
  const handlePictureMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
  };

  //移动图片
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

  //选中调整图片
  const handleResizeMouseDown = (e, handle) => {
    e.preventDefault();
    setIsResizing(true);
    setResizeHandle(handle);
  };

  // 移动调整图片大小
  const handleResizeMouseMove = (e) => {
    const imgRect = imgRef.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect(); // 获取容器边界
    let newWidth = imgSize.width;
    let newHeight = imgSize.height;
    let newLeft = imgRect.left; // 默认左位置
    let newTop = imgRect.top; // 默认顶部位置

    // 调整大小时的逻辑
    if (resizeHandle === "bottom-right") {
      newWidth = e.clientX - imgRect.left;
      newHeight = e.clientY - imgRect.top;
    } else if (resizeHandle === "bottom-left") {
      newWidth = imgRect.right - e.clientX;
      newHeight = e.clientY - imgRect.top;
      newLeft = e.clientX; // 更新左边位置
    } else if (resizeHandle === "top-right") {
      newWidth = e.clientX - imgRect.left;
      newHeight = imgRect.bottom - e.clientY;
      newTop = e.clientY; // 更新上边位置
      newLeft = imgRect.left; // 确保左边位置不变
    } else if (resizeHandle === "top-left") {
      newWidth = imgRect.right - e.clientX;
      newHeight = imgRect.bottom - e.clientY;
      newLeft = e.clientX; // 更新左边位置
      newTop = e.clientY; // 更新上边位置
    }

    // 限制新尺寸在容器边界内
    if (newWidth > 50 && newHeight > 50) {
      setImgSize({ width: newWidth, height: newHeight });
      imgRef.current.style.width = `${newWidth}px`; // 设置新的宽度
      imgRef.current.style.height = `${newHeight}px`; // 设置新的高度

      // 更新图片的位置，以对角顶点为基准
      imgRef.current.style.left = `${newLeft - containerRect.left}px`;
      imgRef.current.style.top = `${newTop - containerRect.top}px`;

      updateResizeHandles(); // 调整后更新手柄位置
    }
  };

  // 在组件挂载时添加文档的 mouseup 事件监听
  useEffect(() => {
    // 鼠标松开时停止拖动
    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // 更新手柄位置
  const updateResizeHandles = () => {
    const handles = document.querySelectorAll(".resizer");
    const imgRect = imgRef.current.getBoundingClientRect(); // 获取图片的边界
    const containerRect = containerRef.current.getBoundingClientRect(); // 获取容器的边界
    const handleOffset = 5; // 手柄偏移量

    handles.forEach((handle) => {
      const position = handle.classList.contains("top-left")
        ? {
            left:
              imgRect.left -
              containerRect.left -
              handle.offsetWidth +
              handleOffset +
              "px",
            top:
              imgRect.top -
              containerRect.top -
              handle.offsetHeight +
              handleOffset +
              "px",
          }
        : handle.classList.contains("top-right")
        ? {
            left: imgRect.right - containerRect.left - handleOffset + "px",
            top:
              imgRect.top -
              containerRect.top -
              handle.offsetHeight +
              handleOffset +
              "px",
          }
        : handle.classList.contains("bottom-left")
        ? {
            left:
              imgRect.left -
              containerRect.left -
              handle.offsetWidth +
              handleOffset +
              "px",
            top: imgRect.bottom - containerRect.top - handleOffset + "px",
          }
        : // bottom-right
          {
            left: imgRect.right - containerRect.left - handleOffset + "px",
            top: imgRect.bottom - containerRect.top - handleOffset + "px",
          };

      handle.style.left = position.left;
      handle.style.top = position.top;
    });
  };

  const handleGenerateImage = () => {
    const element = containerRef.current; // 获取.data元素
    if (element) {
      html2canvas(element, {
        logging: true,
        useCORS: true,
        ignoreElements: (el) => {
          // 忽略具有 resizer 类的元素
          return el.classList.contains("resizer");
        },
      }).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "Your-DIY-Card.png";
        link.click();
      });
    } else {
      console.error("Element not found"); // 如果未找到元素输出错误
    }
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
          <div className="overall">{playerData.overall}</div>
          <div className="position">{playerData.position}</div>
          <div className="name">{playerData.name}</div>
          <ul className="data-list">
            <li className="data-item" id="pac">
              <div className="type">PAC</div>
              <div className="value">{playerData.pac}</div>
            </li>
            <li className="data-item" id="sho">
              <div className="type">SHO</div>
              <div className="value">{playerData.sho}</div>
            </li>
            <li className="data-item" id="pas">
              <div className="type">PAS</div>
              <div className="value">{playerData.pas}</div>
            </li>
            <li className="data-item" id="dri">
              <div className="type">DRI</div>
              <div className="value">{playerData.dri}</div>
            </li>
            <li className="data-item" id="def">
              <div className="type">DEF</div>
              <div className="value">{playerData.def}</div>
            </li>
            <li className="data-item" id="phy">
              <div className="type">PHY</div>
              <div className="value">{playerData.phy}</div>
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
            <button
              className="control-generate-btn"
              onClick={handleGenerateImage}
            >
              生成图片
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
