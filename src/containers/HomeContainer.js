/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';
import { signInWithGoogle } from '../actions/authenticate'

type Props = {
  signInWithGoogle: () => void
}

const HomeContainer = (props: Props) => (
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
