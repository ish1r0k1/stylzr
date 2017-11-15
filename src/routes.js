import React from 'react';
import {Route, Redirect } from 'react-router';
import CoreLayout from './components/CoreLayout';
import Home from './components/Home';
import Dashboard from './containers/Dashboard';
import SignInOrSignUp from './containers/SignInOrSignUp';
import SignOut from './containers/SignOut';
import RequireAuth from './containers/RequireAuth';
import RequireUnAuth from './containers/RequireUnAuth';

export default (store) => {
 return (
  <Route>
    <Route component={RequireUnAuth}>
      <Route path="/" component={Home} />
      <Route path="/signin" component={SignInOrSignUp} />
    </Route>
    <Route component={RequireAuth}>
      <Route component={CoreLayout}>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signout" component={SignOut} />
      </Route>
    </Route>
    <Redirect path="*" to="/" />
  </Route>
 );
}
