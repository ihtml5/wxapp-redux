//docs.js
const { promisfy, AppInfo, page,fetch, on, trigger } = require('../../utils/wx-utils.js');
const { Page } = require('../../utils/index.js');
const { APIINFO } = require('../../constants/index.js');
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    on('wxapp-load', function (msg) {
      console.log('wxapp-load');
      wx.showToast({
        title: msg,
        icon: 'success',
        mask: true,
      });
    });
    promisfy(wx.getUserInfo)().then(res => res).then(res => console.error(res));
  },
  onShow: function () {
    trigger('wxapp-load', 'nortonwx');
    fetch({
      url: APIINFO.logincheck,
      method: 'POST',
      data: {
        username: 'admin',
        password: 'yixuntong123',
      },
    }).then(res => console.warn(res));
  },
});
