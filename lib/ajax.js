"use strict";
/// <reference path="./ajax.d.ts" />
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var querystring = require("querystring");
var isPlainObject = require("lodash/isPlainObject");
var Loading_1 = __importDefault(require("./Loading"));
// 注入Polyfill，任意可用
if (typeof Promise === "undefined") {
    require("promise/lib/rejection-tracking").enable();
    window.Promise = require("promise/lib/es6-extensions.js");
}
if (typeof fetch === "undefined") {
    require("whatwg-fetch");
}
if (typeof URL === "undefined") {
    var _a = require("url"), URL_1 = _a.URL, URLSearchParams_1 = _a.URLSearchParams;
    window.URL = URL_1;
    window.URLSearchParams = URLSearchParams_1;
}
function ajax(option) {
    if (!option.url) {
        throw new Error("Request url can not be null");
    }
    // 参数默认值
    var defaultOption = {
        method: "GET",
        headers: {},
        credentials: "omit",
        loadingTimeLimit: 1000,
        showLoading: false,
        timeLimit: 15000,
        onTimeOut: function () { },
        onLoad: function () { },
        // onError: () => {},
        transmitParam: false
    };
    option = __assign({}, defaultOption, option);
    option.method = option.method.toUpperCase();
    // 加载效果显示逻辑
    var loading;
    var loadingStartTime = Date.now();
    var destroyLoading;
    if (option.showLoading) {
        loading = new Loading_1.default();
        // loadingStartTime = Date.now();
        destroyLoading = function () {
            var now = Date.now();
            var diff = now - loadingStartTime;
            if (diff > option.loadingTimeLimit) {
                loading.destroy();
            }
            else {
                window.setTimeout(function () {
                    loading.destroy();
                }, option.loadingTimeLimit - diff);
            }
        };
    }
    // 超时逻辑
    var timeoutFlag = false;
    var timeoutTimer = window.setTimeout(function () {
        // 执行到定时器，说明已经超时了
        timeoutFlag = true;
    }, option.timeLimit);
    // 处理url，生成URL对象
    var url = new URL(option.url);
    var appendParam = {};
    // 当前页面的查询字符串参数透传
    if (option.transmitParam) {
        var urlParam = querystring.parse(window.location.search.replace(/^\?*/, ""));
        appendParam = __assign({}, appendParam, urlParam);
        // 透传Hash段的查询参数，兼容Hash路由查询模式
        var hashSearchStart = window.location.hash.indexOf("?");
        if (hashSearchStart > -1) {
            var hashSearch = window.location.hash.substring(hashSearchStart);
            var hashSearchParam = querystring.parse(hashSearch.replace(/^\?*/, ""));
            appendParam = __assign({}, appendParam, hashSearchParam);
        }
    }
    if (option.data && isPlainObject(option.data)) {
        // GET请求时，请求参数拼装进查询参数
        if (option.method === "GET") {
            appendParam = __assign({}, appendParam, option.data);
        }
        // POST 请求时，封装data
        if (option.method === "POST" && !option.headers["Content-Type"]) {
            var postSearchParams = new URLSearchParams();
            for (var key in option.data) {
                postSearchParams.append(key, option.data[key]);
            }
            option.data = postSearchParams;
            option.headers["Content-Type"] =
                "application/x-www-form-urlencoded;charset=UTF-8";
        }
    }
    // 生成最终URL
    for (var key in appendParam) {
        url.searchParams.set(key, appendParam[key]);
    }
    var fetchOption = {
        method: option.method,
        headers: option.headers,
        credentials: option.credentials
    };
    if (option.method !== "GET") {
        fetchOption.body = option.data;
    }
    fetch(url.href, fetchOption)
        .then(function (response) {
        // 这里做超时逻辑检测
        if (timeoutFlag === true) {
            option.onTimeOut();
            return Promise.reject("Request time out");
        }
        // 执行到这里说明没有超时，清除定时器
        window.clearTimeout(timeoutTimer);
        return response.json();
    })
        .then(function (result) {
        if (loading instanceof Loading_1.default) {
            destroyLoading();
        }
        option.onLoad(result);
    })
        .catch(function (error) {
        if (loading instanceof Loading_1.default) {
            destroyLoading();
        }
        if (typeof option.onError === "function") {
            option.onError();
        }
        else {
            return Promise.reject(error);
        }
    });
}
exports.default = ajax;
function createOption(method) {
    var option = {
        method: method,
        url: arguments[1]
    };
    if (arguments[2]) {
        if (typeof arguments[2] === "function") {
            option.onLoad = arguments[2];
        }
        if (isPlainObject(arguments[2])) {
            option.data = arguments[2];
            if (arguments[3] && typeof arguments[3] === "function") {
                option.onLoad = arguments[3];
            }
        }
    }
    return option;
}
// 模拟jQuery式get请求
function get() {
    var args = Array.prototype.slice.call(arguments);
    var option = createOption.bind.apply(createOption, [null, "GET"].concat(args))();
    ajax(option);
}
exports.get = get;
// 模拟jQuery式post请求
function post(url) {
    var args = Array.prototype.slice.call(arguments);
    var option = createOption.bind.apply(createOption, [null, "POST"].concat(args))();
    ajax(option);
}
exports.post = post;
