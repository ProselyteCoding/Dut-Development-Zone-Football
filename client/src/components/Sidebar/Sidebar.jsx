import React from 'react'
import {useNavigate} from "react-router-dom";
import './Sidebar.scss'

const Sidebar = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  }

  const handlePunchClick = () => {
    navigate("/punch");
  }

  const handleAppointmentClick = () => {
    navigate("/appointment");
  }

  const handleNewsClick = () => {
    navigate("/news");
  }

  const handleCardClick = () => {
    navigate("/card");
  }

  const handleForumClick = () => {
    navigate("/forum");
  }

  const handleAboutClick = () => {
    navigate("/about"); 
  }

  return (
    <div>
      <ul className="sidebar-list">
        <li className="sidebar-item" onClick={handleHomeClick}>首页</li>
        <li className="sidebar-item" onClick={handlePunchClick}>打卡</li>
        <li className="sidebar-item" onClick={handleAppointmentClick}>约球</li>
        <li className="sidebar-item" onClick={handleNewsClick}>新闻</li>
        <li className="sidebar-item" onClick={handleCardClick}>球星卡</li>
        <li className="sidebar-item" onClick={handleForumClick}>论坛</li>
        <li className="sidebar-item" onClick={handleAboutClick}>鸣谢</li>
      </ul>
    </div>
  )
}

export default Sidebar;
