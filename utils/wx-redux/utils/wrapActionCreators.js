const { bindActionCreators } = require('../lib/redux.js');

const wrapActionCreators= (actionCreators) => {
  return dispatch => bindActionCreators(actionCreators, dispatch)
}


module.exports = wrapActionCreators;