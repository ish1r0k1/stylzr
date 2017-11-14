import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header'
import Footer from './Footer'
import './CoreLayout.css'

export default class CoreLayout extends Component {
  static get propTypes() {
    children: PropTypes.element.isRequired
  }

  render() {
    const { children } = this.props;

    return (
      <div style={{height: '100%'}}>
        <Header />
        <div className="main">
          <div className="main-content">
            {children}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
