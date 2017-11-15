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
    return (
      <div style={{height: '100%'}}>
        <Header />
        <div className="main row center-xs">
          <div className="main-content col-xs-11 start-xs">
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
