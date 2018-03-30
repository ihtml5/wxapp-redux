//docs.js
const { promisfy, AppInfo, page } = require('../../utils/wx-utils.js');
const { nortonPage } = require('../../utils/index.js');
nortonPage({
  data: {
    logs: []
  },
  onLoad: function () {
    promisfy(wx.getUserInfo)().then(res => res).then(res => console.error(res));
  },
});
