import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signInWithGoogle } from '../actions/authenticate'

const SignInOrSignUp = ({signInWithGoogle}) => {
  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in</button>
    </div>)
}

const mapDispatchToProps = {
  signInWithGoogle
}

export default connect(
  null,
  mapDispatchToProps
)(SignInOrSignUp)
