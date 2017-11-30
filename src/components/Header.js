/* @flow */
import React from 'react'
import logo from '../images/stylzr_logo.svg';
import styles from '../styles/init.css'

export const Header = () => (
  <div className={`${styles.Header} ${styles.row} ${styles['center-xs']}`}>
    <div className={`${styles['Header-content']} ${styles['col-xs-11']}`}>
      <div className={`${styles.row} ${styles['middle-xs']} ${styles['start-xs']}`}>
        <h1 className={`${styles['Header-logo']} ${styles['col-xs-12']}`}><img src={logo} alt=""/></h1>
      </div>
    </div>
  </div>
)

export default Header
