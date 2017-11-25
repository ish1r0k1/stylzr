import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { Router } from 'react-router';
import PropTypes from 'prop-types';
import { initAuth } from '../actions/authenticate'
import Loading from '../components/Loading'

export class App extends Component {
  static get propTypes() {
    return {
      history: PropTypes.object.isRequired,
      routes: PropTypes.object.isRequired,
      store: PropTypes.object.isRequired
    }
  }

  constructor(props) {
    super(props)

    this.state = { isLoading: true }
  }

  componentDidMount() {
    const { initAuth } = this.props
    initAuth().then(() => {
      this.setState({ isLoading: false })
    })
  }

  render() {
    const { store, history, routes } = this.props;
    const { isLoading } = this.state

    return isLoading ? <Loading/> : (
      <Provider store={store}>
        <Router history={history}>
          {routes}
        </Router>
      </Provider>
    );
  }
}

const mapDispatchToProps = {
  initAuth
}

const mapStateToProps = (state) => {
  return {
    uid: state.user.uid
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
