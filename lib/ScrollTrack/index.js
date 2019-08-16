"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ScrollTrack.js
 * 根据 URL 作为标识，跟踪滚动条位置信息并进行保存和恢复
 */
var ScrollTrack = /** @class */ (function () {
    function ScrollTrack() {
        var _this = this;
        this.stack = {};
        this.record = this.debunce(function () {
            _this.stack[window.location.href] = _this.getScrollTop();
            console.log(_this.stack);
        }, this, 50);
    }
    /**
      * 项目初始化时调用，只需要调用一次
      * @return {void}
      */
    ScrollTrack.prototype.start = function () {
        this.resume();
        document.addEventListener('scroll', this.record);
    };
    /**
      * 主动销毁监听器
      * @return {void}
      */
    ScrollTrack.prototype.destory = function () {
        document.removeEventListener('scroll', this.record);
    };
    /**
      * 防抖函数
      * @param {function} method
      * @param {any} context
      * @param { number } delay
      * @return {void}
      */
    ScrollTrack.prototype.debunce = function (method, context, delay) {
        if (method === void 0) { method = function () { }; }
        if (delay === void 0) { delay = 50; }
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
    };
    ;
    /**
      * 恢复位置信息
      * @return {void}
      */
    ScrollTrack.prototype.resume = function () {
        var pos = this.stack[window.location.href];
        setTimeout(function () {
            if (pos) {
                window.scrollTo(0, pos);
            }
            else {
                window.scrollTo(0, 0);
            }
        }, 0);
    };
    /**
    * 获取当前滚动位置
    * @return {number}
    */
    ScrollTrack.prototype.getScrollTop = function () {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
        var y = supportPageOffset ? window.pageYOffset :
            (isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop);
        return y;
    };
    return ScrollTrack;
}());
exports.default = ScrollTrack;
