"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 车轮常用接口域名配置，
 * @description 请按照格式配置
 *  production: 正式,
    pre: 预发，如果没有填测试服地址,
    test: 测试
 */
var ApiHost = {
    /** 新车业务 */
    newcar: {
        production: "newcar.eclicks.cn",
        pre: "newcar-test.eclicks.cn",
        test: "newcar-test.eclicks.cn"
    },
    /** chelun */
    chelun: {
        production: "chelun.eclicks.cn",
        pre: "chelun-pre.eclicks.cn",
        test: "chelun-test.eclicks.cn"
    },
    /** 买车业务 */
    buycar: {
        production: "buycar.eclicks.cn",
        pre: "buycar-test.eclicks.cn",
        test: "buycar-test.eclicks.cn"
    },
    /** 查违章 */
    chaweizhang: {
        production: "chaweizhang.eclicks.cn",
        pre: "chaweizhang-test.eclicks.cn",
        test: "chaweizhang-test.eclicks.cn"
    },
    /** 电动 */
    electrocar: {
        production: "electrocar.chelun.com",
        pre: "electrocar-test.chelun.com",
        test: "electrocar-test.chelun.com"
    },
    /** 社区 */
    community: {
        production: "community.chelun.com",
        pre: "community-test.chelun.com",
        test: "community-test.chelun.com"
    },
    /** promotion */
    promotion: {
        production: "promotion.chelun.com",
        pre: "promotion-test.chelun.com",
        test: "promotion-test.chelun.com"
    },
    /** 报价大全业务 */
    baojia: {
        production: "baojia.chelun.com",
        pre: "baojiapre.chelun.com",
        test: "baojia-test.chelun.com"
    },
    /** 车主业务 */
    chezhu: {
        production: "chezhu.eclicks.cn",
        pre: "chezhu-test.eclicks.cn",
        test: "chezhu-test.eclicks.cn"
    },
    /** 支付业务 */
    pay: {
        production: "pay.chelun.com",
        pre: "pay-test.chelun.com",
        test: "pay-test.chelun.com"
    },
    /** 文件业务 */
    file: {
        production: "file.chelun.com",
        pre: "upload-test.chelun.com",
        test: "upload-test.chelun.com"
    },
    /** 通行证业务 */
    passport: {
        production: "passport.chelun.com",
        pre: "passport-test.chelun.com",
        test: "passport-test.chelun.com"
    },
    /** 官网 */
    home: {
        production: "www.chelun.com",
        pre: "pre.chelun.com",
        test: "home-test.chelun.com"
    },
    /** 商城 */
    mall: {
        production: "mall.chelun.com",
        pre: "mall-pre.chelun.com",
        test: "mall-test.chelun.com"
    },
    /** 查违章 app */
    cwzApp: {
        production: "cwzapp.eclicks.cn",
        pre: "cwzapp-pre.eclicks.cn",
        test: "cwzapp-test.eclicks.cn"
    }
};
exports.default = ApiHost;
