import React from 'react'
import './menu.css';
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className='menu-container'>
      <div className='logo-item'>
        <img src='https://www.lovettwebdesign.com/wp-content/uploads/2018/03/bitcoin-blockchain.gif'></img>
      </div>
      <div className='click-items'>
        <Link to="/">
          <div className='converter-item'>
            Converter
          </div>
        </Link>
        <Link to="/briefcase">
          <div className='briefcase-item'>
            Briefcase
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Menu;