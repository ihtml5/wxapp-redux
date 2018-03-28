//docs.js
const { promisfy } = require('../../utils/wx-utils.js');
const { autorun } = require('../../utils/util.js');
autorun({
  data: {
    logs: []
  },
  onLoad: function () {
    promisfy(wx.getUserInfo)().then(res => res).then(res => console.error(res));
  },
});
