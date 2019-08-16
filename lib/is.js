"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cookie_1 = __importDefault(require("./cookie"));
/**
 * 简单检测逻辑
 */
var is = {
    /**判断安卓客户端 */
    android: false,
    /**判断IOS客户端 */
    ios: false,
    /**判断微信环境 */
    weixin: false,
    /**判断QQ环境 */
    qq: false,
    /**判断车轮系APP */
    chelun: false,
    /**判断登录 */
    chelunLogin: false,
    /**判断车轮APP */
    clApp: false,
    /**判断驾考通APP */
    jkApp: false,
    /**判断超级教练APP */
    cjApp: false
};
var ua = window.navigator.userAgent;
if (/iPhone|iPad/i.test(ua)) {
    is.ios = true;
}
if (/Android/i.test(ua)) {
    is.android = true;
}
if (/MicroMessenger/i.test(ua)) {
    is.weixin = true;
}
if (/QQ/i.test(ua)) {
    is.qq = true;
}
// 车轮域名下检测逻辑
if (/chelun\.com|eclick\.cn/.test(window.location.host)) {
    var cookies = cookie_1.default.all();
    var appName = cookies["chelun_appName"];
    if (appName) {
        appName = appName.toLocaleLowerCase();
        is.chelun = true;
        if (appName === "queryviolations") {
            is.clApp = true;
        }
        else if (appName === "drivingtest") {
            is.jkApp = true;
        }
        else if (appName === "supercoach") {
            is.cjApp = true;
        }
    }
    var isLogin = cookies["chelun_isLogin"];
    if (!isLogin) {
        isLogin = "false";
    }
    is.chelunLogin = isLogin === "false" ? false : true;
}
exports.default = is;
