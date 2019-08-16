"use strict";
/**
 * 百度统计上报
 */
Object.defineProperty(exports, "__esModule", { value: true });
var option = {
    id: "9f9fd730557c9f615b60a2133fb7616f",
    type: document.title
};
var baiduCount = {
    option: option,
    /**
     * 初始化百度统计，默认使用账号 clstrick3
     * http://doc.oa.com/pages/viewpage.action?pageId=11439044
     * @param baiduCountID
     */
    init: function (option) {
        this.option = option;
        window._hmt = window._hmt || [];
        var hmScript = document.createElement("script");
        hmScript.src = "//hm.baidu.com/hm.js?" + option.id;
        document.head.appendChild(hmScript);
    },
    /**
     * 上报动作标签
     * @param action
     */
    report: function (action) {
        if (action === void 0) { action = "点击"; }
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (window._hmt && window._hmt.push) {
            window._hmt.push(["_trackEvent", this.option.type, action].concat(args));
        }
    }
};
exports.default = baiduCount;
