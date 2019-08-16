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
    constructor(pageHosts?: HostMap);
    /**
     * 获取车轮API域名集合
     * @method getApiHost
     * @returns {Object} 例：{newcar:"newcar-test.eclicks.cn",chelun:"chelun-test.eclicks.cn",buycar:"buycar-test.eclicks.cn",chaweizhang:"chaweizhang-test.eclicks.cn"}
     */
    getApiHost(): ObjectMap;
}
