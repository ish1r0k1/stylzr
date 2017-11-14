import React from 'react';
import { IndexRoute, Route, Redirect } from 'react-router';
import CoreLayout from './components/CoreLayout';
import Home from './components/Home';
import Dashboard from './containers/Dashboard';
import SignInOrSignUp from './containers/SignInOrSignUp';
import SignOut from './containers/SignOut';

export default (store) => {
  const requireAuth = (nextState, replace, callback) => {
    const { user: { uid } } = store.getState()

    if (!uid) {
      replace({
        pathname: '/',
        state: {nextPathname: nextState.location.pathname}
      })
    }

    callback()
  }

  const redirectAuthed = (nextState, replace, callback) => {
    const { user: { uid } } = store.getState()

    if (uid) {
      replace({
        pathname: '/dashboard',
        state: {nextPathname: nextState.location.pathname}
      })
    }

    callback()
  }

 return (
  <Route path="/" component={CoreLayout}>
    <IndexRoute component={Home} onEnter={redirectAuthed} />
    <Route path="/signin" component={SignInOrSignUp} onEnter={redirectAuthed} />
    <Route path="/signout" component={SignOut} />
    <Route path="/dashboard" component={Dashboard} onEnter={requireAuth} />
    <Redirect path="*" to="/" />
  </Route>
 );
}
