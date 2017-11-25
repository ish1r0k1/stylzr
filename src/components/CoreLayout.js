import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header'
import Footer from './Footer'
import styles from '../styles/init.css'

export default class CoreLayout extends Component {
  static get propTypes() {
    children: PropTypes.element.isRequired
  }

  render() {
    return (
      <div style={{height: '100%'}}>
        <Header />
        <div className={`${styles.row} ${styles['center-xs']}`}>
          <div className={`${styles['main-content']} ${styles['col-xs-11']} ${styles['start-xs']}`}>
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
