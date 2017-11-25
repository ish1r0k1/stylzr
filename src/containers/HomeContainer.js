import React from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';
import { signInWithGoogle } from '../actions/authenticate'

const HomeContainer = (props) => (
  <Home
    signInWithGoogle={props.signInWithGoogle}
  />
);

const mapDispatchToProps = {
  signInWithGoogle
}

export default connect(
  null,
  mapDispatchToProps
)(HomeContainer);
