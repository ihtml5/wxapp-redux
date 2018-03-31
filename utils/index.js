const jscalpel = require("./jscalpel.js").default;
const nortonPage = (config = {}) => {
  const mergecfg = Object.assign({}, config);
  // jscalpel({
  //   target: config,
  //   path: ["data", "onLoad"],
  //   success: (data, onload) => {
  //     mergecfg.onLoad = () => console.warn("data", data, onload);
  //   }
  // });
  Page(mergecfg);
};

module.exports = {
  nortonPage,
  Page,
};
