import React from 'react'
import './Sidebar.scss'

const Sidebar = () => {
  return (
    <div>
      <ul className="sidebar-list">
        <li className="sidebar-item">首页</li>
        <li className="sidebar-item">打卡</li>
        <li className="sidebar-item">约球</li>
        <li className="sidebar-item">新闻</li>
        <li className="sidebar-item">球星卡</li>
        <li className="sidebar-item">论坛</li>
        <li className="sidebar-item">鸣谢</li>
      </ul>
    </div>
  )
}

export default Sidebar;
