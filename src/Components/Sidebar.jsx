import React from 'react'
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div>
        <ul className="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Boards</a></li>
            <li><a href="#">Words</a></li>
            <li><a href="#">Templates</a></li>
        </ul>
    </div>
  )
}

export default Sidebar