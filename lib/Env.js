"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 接口环境类
 */
var chelunApiHostMap_1 = __importDefault(require("./chelunApiHostMap"));
var _1 = require(".");
/**
   * @class Env
   * @classdesc 接口环境类
   * @description ```__ENV__``` URL特权参数，可切换接口环境，用于调试,例 ```xxx?__ENV__=pre```
   * @example const env = new Env({
      production: "m.chelun.com",
      pre: "m-pre.chelun.com",
      test: "m-test.chelun.com"
    })
   * @returns {Class}
   */
var Env = /** @class */ (function () {
    /**
     * Env构造函数
     * @param pageHosts 当前项目页面域名集合
     */
    function Env(pageHosts) {
        if (pageHosts === void 0) { pageHosts = {
            production: "m.chelun.com",
            pre: "m-pre.chelun.com",
            test: "m-test.chelun.com"
        }; }
        this.mode = "test";
        // 环境判断
        if (typeof window === "undefined") {
            // node 环境
            this.mode = process.env.NODE_ENV || "test";
        }
        else {
            // URL特权参数，可切换接口环境，用于调试
            var __ENV__ = _1.utils.getParam("__ENV__");
            if (__ENV__) {
                this.mode = __ENV__;
            }
            else {
                for (var key in pageHosts) {
                    if (pageHosts.hasOwnProperty(key)) {
                        // 命中当前域名所属的环境
                        if (pageHosts[key].indexOf(window.location.host) > -1) {
                            this.mode = key;
                        }
                    }
                }
            }
        }
    }
    /**
     * 获取车轮API域名集合
     * @method getApiHost
     * @returns {Object} 例：{newcar:"newcar-test.eclicks.cn",chelun:"chelun-test.eclicks.cn",buycar:"buycar-test.eclicks.cn",chaweizhang:"chaweizhang-test.eclicks.cn"}
     */
    Env.prototype.getApiHost = function () {
        var apiHost = {};
        for (var key in chelunApiHostMap_1.default) {
            if (chelunApiHostMap_1.default.hasOwnProperty(key)) {
                apiHost[key] = chelunApiHostMap_1.default[key][this.mode];
            }
        }
        return apiHost;
    };
    return Env;
}());
exports.default = Env;
