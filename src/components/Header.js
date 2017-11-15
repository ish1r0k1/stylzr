import React from 'react'
import logo from '../images/stylzr_logo.svg';
import './Header.css';

export const Header = () => {
  return (
  <div className="Header row center-xs">
    <div className="Header-content col-xs-11">
      <div className="row middle-xs start-xs">
        <h1 className="Header-logo col-xs-12"><img src={logo} alt=""/></h1>
      </div>
    </div>
  </div>)
}

export default Header
