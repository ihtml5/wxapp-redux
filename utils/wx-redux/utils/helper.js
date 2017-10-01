// 检测是否在微信小程序中运行
const checkIsWxAppEnv = (wx, App, Page) => {
    if (!wx || !App || !Page) {
        return false;
    }
    return true;
}

module.exports = {
    checkIsWxAppEnv
}