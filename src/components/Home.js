/* @flow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../images/logo.svg';
import styles from '../styles/init.css'

type Props = {
  signInWithGoogle: () => void
}

const Home = (props: Props) => (
  <div className={styles.App}>
    <header className={styles['App-header']}>
      <img src={logo} className={styles['App-logo']} alt="logo" />
      <h1 className={styles['App-title']}>Welcome to React</h1>
    </header>
    <p className={styles['App-intro']}>
      <button onClick={props.signInWithGoogle}>Sign in with Google</button>
    </p>
  </div>
)

export default Home;
