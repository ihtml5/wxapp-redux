const { createStore, combineReducers, compose,  applyMiddleware } = require('../utils/lib/redux.js');
const reducers = require('../reducers/index.js');
const devTools = require('../utils/lib/remote-redux-devtools.js').default;
const reduxLogger = require('../utils/lib/redux-logger').default;

function configureStore() {
  return createStore(combineReducers(reducers), compose(devTools({
    hostname: 'localhost',
    port: 5678,
    secure: false
  })), applyMiddleware(reduxLogger));
}

module.exports = configureStore;