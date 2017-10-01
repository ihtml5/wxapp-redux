const shallowEqual = require('./utils/shallowEqual.js');
const warning = require('./utils/warning.js');
const wrapActionCreators = require('./utils/wrapActionCreators.js');

const defaultMapStateToProps = state => ({}) // eslint-disable-line no-unused-vars
const defaultMapDispatchToProps = dispatch => ({dispatch})

const connect = (mapStateToProps, mapDispatchToProps) => {
  const shouldSubscribe = Boolean(mapStateToProps)
  const mapState = mapStateToProps || defaultMapStateToProps
  const app = getApp();

  let mapDispatch = null;

  if (typeof mapDispatchToProps === 'function') {
    mapDispatch = mapDispatchToProps
  } else if (!mapDispatchToProps) {
    mapDispatch = defaultMapDispatchToProps
  } else {
    mapDispatch = wrapActionCreators(mapDispatchToProps)
  }

  return  function wrapWithConnect(pageConfig) {

    function handleChange(options) {
      if (!this.unsubscribe) {
        return
      }

      const state = this.store.getState()
      const mappedState = mapState(state, options);
      if (!this.data || shallowEqual(this.data, mappedState)) {
        return;
      }
      this.setData(mappedState)
    }

    const {
      onLoad: _onLoad,
      onUnload: _onUnload,
    } = pageConfig

    const onLoad = function (options) {
      this.store = app.store;
      if (!this.store) {
        warning("Store对象不存在!")
      }
      if(shouldSubscribe){
        this.unsubscribe = this.store.subscribe(handleChange.bind(this, options));
        handleChange.call(this, options)
      }
      if (typeof _onLoad === 'function') {
        _onLoad.call(this, options)
      }
    }

    const onUnload = function () {
      if (typeof _onUnload === 'function') {
        _onUnload.call(this)
      }
      typeof this.unsubscribe === 'function' && this.unsubscribe()
    }

    return Object.assign({}, pageConfig, mapDispatch(app.store.dispatch), {onLoad, onUnload})
  }
}

module.exports = connect
