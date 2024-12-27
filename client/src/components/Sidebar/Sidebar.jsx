import React from 'react'
import './Sidebar.scss'

const Sidebar = () => {
  return (
    <div>
      <ul className="sidebar-list">
        <li className="sidebar-item">Home</li>
        <li className="sidebar-item">About</li>
        <li className="sidebar-item">Contact</li>
        <li className="sidebar-item">Services</li>
        <li className="sidebar-item">Portfolio</li>
        <li className="sidebar-item">Blog</li>
        <li className="sidebar-item">Shop</li>
      </ul>
    </div>
  )
}

export default Sidebar;
