import React from 'react';
import {Route, Redirect } from 'react-router';
import CoreLayout from './components/CoreLayout';
import HomeContainer from './containers/HomeContainer';
import DashboardContainer from './containers/DashboardContainer';
import ProjectViewContainer from './containers/ProjectViewContainer';
import ProjectEditContainer from './containers/ProjectEditContainer';
import SignOutContainer from './containers/SignOutContainer';
import RequireAuth from './containers/RequireAuth';
import RequireUnAuth from './containers/RequireUnAuth';

export default (store) => {
 return (
    <Route>
      <Route component={RequireUnAuth}>
        <Route path="/" component={HomeContainer} />
      </Route>
      <Route component={RequireAuth}>
        <Route component={CoreLayout}>
          <Route path="/dashboard" component={DashboardContainer} />
          <Route path="/projects/:id" component={ProjectViewContainer} />
          <Route path="/projects/:id/edit" component={ProjectEditContainer} />
          <Route path="/signout" component={SignOutContainer} />
        </Route>
      </Route>
      <Redirect path="*" to="/" />
    </Route>
 );
}
