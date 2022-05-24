import React from 'react'
import './menu.css';
import { Router } from "react-router-dom"

function Menu() {
  return (
    <div className='menu-container'>
      <div className='logo-item'>
        LOGO
      </div>
      <div className='click-items'>
        <div className='converter-item'>
          Converter
        </div>
        <div className='briefcase-item'>
          Briefcase
        </div>
      </div>
    </div>
  )
}

export default Menu;