import React from 'react'
import logo from '../images/stylzr_logo.svg';
import './Header.css';

export const Header = () => {
  return (
  <div className="Header">
    <div className="Header-content row middle-xs">
      <h1 className="Header-logo col-xs-12"><img src={logo} alt=""/></h1>
    </div>
  </div>)
}

export default Header
