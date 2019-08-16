/// <reference path="../src/share.d.ts" />
/**
 * H5分享通用API
 */
declare const share: {
    /**
     * 在微信客户端操作分享，自动设置朋友圈和聊天分享数据
     * @param c_tImgUrl 分享小图
     * @param c_tTitle 分享标题
     * @param c_tContent 分享描述
     * @param c_tLink 分享链接
     * @return shareData 返回分享数据集合，并自动在 window 全局注入
     */
    setWeiXinShare: (c_tImgUrl: string, c_tTitle: string, c_tContent: string, c_tLink: string) => object;
    /**
     * 微信客户端分享成功后回调方法设置
     * @param cb 分享成功回调函数
     * @return
     */
    setWeiXinCallback: (cb: any) => boolean;
    /**
     * 动态添加微信客户端配置链接
     * 1默认添加一次
     * @param multi 是否添加多个脚本
     * @param url 脚本链接，默认添加 new_bridge.js
     * @param fn 回调函数
     */
    addWeiXinConfig(multi: boolean | undefined, url: string, fn: any): void;
    /**
     * 添加微信和车轮微信分享相关jsjdk
  
     * @param multi 是否添加多个脚本
     * @param url 脚本链接，默认添加 new_bridge.js
     * @param fn 回调函数
     */
    addWeiXinConfigAndJWeixin(multi: boolean | undefined, url: string, fn: any): void;
    /**
   * _config 动态添加脚本方法
   * @private
   * @param multi 是否添加多个脚本
   * @param url 脚本链接，默认添加 new_bridge.js
   * @param fn 回调函数
   */
    _config(multi: boolean | undefined, url: string, fn: any): void;
    /**
     * 微信事件重新绑定
     */
    onWeiXin: () => void;
    /**
     * 分享成功后回调方法设置
     * 1分享环境 2分享自己特定回调 3通用回调
     * @param to
     * @param shareCallBackName
     * @param callback
     */
    setAppCallback: (to: string, shareCallBackName: string, callback: any) => {
        to: string;
        shareCallBackName: string;
        callback: any;
    };
    /**
     * 设置车轮车友分享
     * @param attrs
     */
    setAppClMessage(attrs: any): void;
    /**
     * 设置微信朋友圈分享
     * @param attrs
     */
    setAppWxTimeLine(attrs: any): void;
    /**
     * 设置微信好友分享
     * @param attrs
     */
    setAppWxMessage(attrs: any): void;
    /**
     * 设置QQ分享
     * @param attrs
     */
    setAppQQ(attrs: any): void;
    /**
     * 设置新浪微博分享
     * @param attrs
     */
    setAppSina(attrs: any): void;
    /**
     * 设置短信分享
     * @param attrs
     */
    setAppSms(attrs: any): void;
};
export default share;
