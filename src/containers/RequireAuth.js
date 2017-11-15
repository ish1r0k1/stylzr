import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

export class RequireAuth extends Component {
  static get propTypes() {
    props: PropTypes.element.isRequired
  }

  componentWillMount() {
    const {router} = this.props
    this.unauthWillTransfer(this.props, router)
  }

  componentWillUpdate(nextProps) {
    const {router} = this.props
    this.unauthWillTransfer(nextProps, router)
  }

  unauthWillTransfer(props, router) {
    const {user: {uid}} = props

    if (!uid) {
      router.replace('/')
    }
  }

  render() {
    return (<div>{this.props.children}</div>)
  }
}

const mapStateToProps = ({ user }) => {
  return {
    user
  }
}

export default connect(
  mapStateToProps
)(RequireAuth)
