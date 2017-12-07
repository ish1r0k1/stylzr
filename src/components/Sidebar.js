import React from 'react'
import { Link } from 'react-router'
import styles from '../styles/init.css'

const Sidebar = (props) => {
  const { user: { displayName, photoURL }, signOut } = props

  return (
    <div className={styles.Sidebar}>
      <header className={styles.Sidebar__header}>
        <div className={styles.Sidebar__logo}>Stylz</div>
      </header>
      <div className={`${styles['Sidebar__user']} ${styles['user-profile']} ${styles['row']}`}>
        <div className={`${styles['user-profile__photo-placeholder']} ${styles['col-xs-2']}`}>
          <div className={styles['user-profile__photo']} style={{backgroundImage: `url(${photoURL})`}}/>
        </div>
        <div className={`${styles['col-xs-10']}`}>
          <div className={styles['user-profile__name']}>{displayName}</div>
        </div>
      </div>
      <nav className={`${styles['Sidebar__navigation']} ${styles['global-nav']}`}>
        <ul>
          <li><Link className={styles.link} to="/dashboard">Dashboard</Link></li>
          <li><a onClick={signOut} className={styles.link}>Logout</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
