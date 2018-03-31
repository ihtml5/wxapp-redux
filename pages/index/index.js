const { APIINFO, LOGINAFTERURL } = require('../../constants/index.js');
const { nortonPage } = require('../../utils/index.js');
const { fetch } = require('../../utils/wx-utils.js');
nortonPage({
  /**
   * 页面的初始数据
   */
  data: {
    submitLoading: false,
    autologin: false,
  },
  onLoad: function (options) {
  },
  onReady: function () {
  
  },
  onShow: function () {
  
  },
  onHide: function () {
  
  },
  onChange: function (e) {
    const { value } = e.detail;
    console.warn('value', value[0]);
    this.setData({
      autologin: Boolean(value[0]),
    })
  },
  onInput: function (e) {
    const { value } = e.detail;
    const { name } = e.currentTarget.dataset;
    this.setData({
      [name]: value,
    });
  },
  toHome: function (e) {
    this.setData({
      submitLoading: true,
    });
    const { username, password } = this.data;
    fetch({
     url: APIINFO.logincheck,
     method: 'POST',
     data: {
       username,
       password,
     } 
    }).then(res => {
      this.setData({
        submitLoading: false,
      }, () => {
        wx.switchTab({
          url: LOGINAFTERURL,
        });
      });
    });
  },
  doForget: function (e) {
    wx.showToast({
      title: '忘记密码',
      icon: 'error',
    });
  },
  onUnload: function () {
  
  }
})