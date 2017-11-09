import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import createRoutes from './routes';
import configureStore from './configureStore';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore({}, browserHistory);
const history = syncHistoryWithStore(browserHistory, store);
const routes = createRoutes(store);

ReactDOM.render(
  <App
    store={store}
    history={history}
    routes={routes}
  />, document.getElementById('root'));

registerServiceWorker();
