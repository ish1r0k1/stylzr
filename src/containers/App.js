import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { Router } from 'react-router';
import PropTypes from 'prop-types';

export class App extends Component {
  static get propTypes() {
    return {
      history: PropTypes.object.isRequired,
      routes: PropTypes.object.isRequired,
      store: PropTypes.object.isRequired
    }
  }

  render() {
    const { store, history, routes } = this.props;

    return (
      <Provider store={store}>
        <Router history={history}>
          {routes}
        </Router>
      </Provider>
    );
  }
}

export default connect()(App)
