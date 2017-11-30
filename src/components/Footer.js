/* @flow */
import React from 'react'
import styles from '../styles/init.css'

export const Footer = () => (
  <div className={`${styles.Footer} ${styles.row} ${styles['center-xs']}`}>
    <div className={`${styles['Footer-content']} ${styles['col-xs-11']}`}>
      <div className={`${styles.row} ${styles['middle-xs']}`}>
        <p className={`${styles['Footer-copyright']} ${styles['col-xs-12']}`}>Powered by Stylzr</p>
      </div>
    </div>
  </div>
)

export default Footer
