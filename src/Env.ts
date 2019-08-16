/**
 * 接口环境类
 */
import hostConfig from "./chelunApiHostMap";
import { utils } from ".";
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
export default class Env {
  /**
   * 当前环境模式
   * @default test
   * @example production / pre / test
   * @type {String}
   * @public
   */
  mode: string;
  /**
   * Env构造函数
   * @param pageHosts 当前项目页面域名集合
   */
  constructor(
    pageHosts: HostMap = {
      production: "m.chelun.com",
      pre: "m-pre.chelun.com",
      test: "m-test.chelun.com"
    }
  ) {
    this.mode = "test";

    // 环境判断
    if (typeof window === "undefined") {
      // node 环境
      this.mode = process.env.NODE_ENV || "test";
    } else {
      // URL特权参数，可切换接口环境，用于调试
      const __ENV__ = utils.getParam("__ENV__");
      if (__ENV__) {
        this.mode = __ENV__;
      } else {
        for (const key in pageHosts) {
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
  getApiHost() {
    const apiHost: ObjectMap = {};
    for (const key in hostConfig) {
      if (hostConfig.hasOwnProperty(key)) {
        apiHost[key] = hostConfig[key][this.mode];
      }
    }
    return apiHost;
  }
}
