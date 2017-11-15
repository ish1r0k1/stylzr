import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

export class RequireAuth extends Component {
  static get propTypes() {
    props: PropTypes.element.isRequired
  }

  componentWillMount() {
    const {router} = this.props
    this.authWillTransfer(this.props, router)
  }

  componentWillUpdate(nextProps) {
    const {router} = this.props
    this.authWillTransfer(nextProps, router)
  }

  authWillTransfer(props, router) {
    const {user: {uid}} = props

    if (!!uid) {
      router.replace('/dashboard')
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
