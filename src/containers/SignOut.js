import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signOut } from '../actions/authenticate'

const SignOut = ({signOut}) => {
  return (
    <div>
      <button onClick={signOut}>Sign Out</button>
    </div>)
}

const mapDispatchToProps = {
  signOut
}

export default connect(
  null,
  mapDispatchToProps
)(SignOut)
