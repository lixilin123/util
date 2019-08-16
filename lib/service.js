"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
/**
 * 通用业务方法封装
 */
var service = {
    /**
     * @description ioswebview进度条加载完成
     */
    iosProgressComplete: function () {
        if (_1.is.ios) {
            window.location.href = "webviewprogressproxy:///complete";
        }
    }
};
exports.default = service;
