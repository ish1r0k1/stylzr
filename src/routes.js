import React from 'react';
import { IndexRoute, Route, Redirect } from 'react-router';
import CoreLayout from './components/CoreLayout';
import Intro from './components/Intro';

export default (store) => {
 return (
  <Route path="/" component={CoreLayout}>
    <IndexRoute component={Intro} />
    <Redirect path="*" to="/" />
  </Route>
 );
}
