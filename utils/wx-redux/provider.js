const { checkIsWxAppEnv } = require('./utils/helper.js');
const Provider = (store) => (appConfig) => {
  if (!checkIsWxAppEnv(wx, App, Page)) {
    console.warn('请在微信小程序环境中使用');
  }
  return Object.assign({}, appConfig, {
    store
  })
}

module.exports = Provider;