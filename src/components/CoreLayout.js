import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CoreLayout extends Component {
  static get propTypes() {
    children: PropTypes.element.isRequired
  }

  render() {
    const { children } = this.props;

    return (
      <div style={{height: '100%'}}>
        {children}
      </div>
    )
  }
}
