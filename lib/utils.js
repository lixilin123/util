"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 常用公共方法
 */
var utils = {
    /**
     * @description 解析获取 URL 参数（兼容 hash 多问号模式）
     * @param name 参数名
     * @return {string}
     *
     * 调用示例：
     *
     * import { utils } from 'cl-util';
     *
     * utils.getParam('foo');
     *
     */
    getParam: function (name) {
        var maps = {};
        var search = window.location.search.replace(/^\?*/, "");
        var hash = window.location.hash;
        var hashSearchIndex = hash.indexOf("?");
        var hashSearch = "";
        if (hashSearchIndex >= 0) {
            hashSearch = hash.substr(hashSearchIndex + 1);
        }
        if (hashSearch) {
            search += "&" + hashSearch;
        }
        var cookArr = search.split("&");
        for (var i in cookArr) {
            var tmp = cookArr[i].replace(/^\s*/, "");
            if (tmp) {
                var nv = tmp.split("=");
                maps[nv[0]] = nv[1] || "";
            }
        }
        return maps[name] || "";
    },
    /**
     * @description 预加载图片资源
     * @param src 图片链接
     * @return Promise
     */
    loadImage: function (src) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var img = new Image();
                        img.crossOrigin = "anonymous";
                        img.src = src;
                        img.onload = function () {
                            resolve(img);
                        };
                    })];
            });
        });
    },
    /**
     * @method 防抖函数
     * @description
     * @param method 传入的方法
     * @param context 传入的上下文
     * @param delay 传入延迟时间，默认1000ms
     * @returns {Function}
     */
    debunce: function (method, delay, context) {
        if (delay === void 0) { delay = 1000; }
        if (context === void 0) { context = null; }
        var timer = null;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            clearTimeout(timer);
            timer = setTimeout(function () {
                method.apply(context, args);
            }, delay);
        };
    },
    /**
     * @method 节流防抖整合函数
     * @description delay 的间隔内连续触发的调用，后一个调用会把前一个调用的等待处理掉，但每隔 gap 至少执行一次
     * @param method 传入的方法
     * @param delay 传入延迟时间，默认1000ms
     * @param gap 至少多长时间执行一次
     * @param context 传入的上下文
     * @returns {Function}
     */
    throttle: function (method, delay, gap, context) {
        if (delay === void 0) { delay = 1000; }
        if (gap === void 0) { gap = 50; }
        if (context === void 0) { context = null; }
        var timer = null;
        var _startTime = null;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            clearTimeout(timer);
            var _currnetTime = +new Date();
            if (!_startTime) {
                _startTime = _currnetTime;
            }
            // 如果超过间隔时间执行一次
            if (_currnetTime - _startTime >= gap) {
                method.apply(context, args);
                _startTime = _currnetTime;
            }
            else {
                timer = setTimeout(function () {
                    method.apply(context, args);
                }, delay);
            }
        };
    },
    /**
     * @description 加载script
     * @param url url地址
     * @returns Promise
     */
    loadScript: function (url) {
        return new Promise(function (resolve) {
            var body = document.body;
            var script = document.createElement("script");
            script.src = url;
            body.appendChild(script);
            script.onload = function () {
                setTimeout(function () {
                    resolve(script);
                }, 0);
            };
        });
    }
};
exports.default = utils;
