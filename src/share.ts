/// <reference path="share.d.ts" />

import consts from './consts';
/**
 * H5分享通用API
 */
const share = {
  /**
   * 在微信客户端操作分享，自动设置朋友圈和聊天分享数据
   * @param c_tImgUrl 分享小图
   * @param c_tTitle 分享标题
   * @param c_tContent 分享描述
   * @param c_tLink 分享链接
   * @return shareData 返回分享数据集合，并自动在 window 全局注入
   */
  setWeiXinShare: (c_tImgUrl: string, c_tTitle: string, c_tContent: string, c_tLink: string): object => {

    const shareData = {
      "tLink": c_tLink,   //链接
      "tImgUrl": c_tImgUrl, //图片
      "tTitle": c_tTitle,  //标题 朋友圈只有标题 没有内容
      "tContent": c_tContent, //正文
      "fLink": c_tLink,
      "fImgUrl": c_tImgUrl,
      "fTitle": c_tTitle,
      "fContent": c_tContent
    };

    // 注入分享数据，供 chelun weixinjsbridge 调取
    window.shareData = shareData;

    //t是朋友圈  f是单个好友
    return shareData
  },

  /**
   * 微信客户端分享成功后回调方法设置
   * @param cb 分享成功回调函数
   * @return 
   */
  setWeiXinCallback: (cb: any) => {
    window._report_share_success = cb;
    return true;
  },
  /**
   * 动态添加微信客户端配置链接
   * 1默认添加一次
   * @param multi 是否添加多个脚本
   * @param url 脚本链接，默认添加 new_bridge.js
   * @param fn 回调函数
   */
  addWeiXinConfig(multi = false, url: string, fn: any) {
    this._config(multi, url, fn);
  },
  /**
   * 添加微信和车轮微信分享相关jsjdk

   * @param multi 是否添加多个脚本
   * @param url 脚本链接，默认添加 new_bridge.js
   * @param fn 回调函数
   */  
  addWeiXinConfigAndJWeixin(multi = false, url: string, fn: any) {
    var script = document.createElement("script");
    var body = document.getElementsByTagName("body")[0];
    script.src = '//res.wx.qq.com/open/js/jweixin-1.3.2.js';//微信的链接地址
    const _this = this;
    script.onload = function () {
      _this._config(multi, url, fn);
    };
    body.appendChild(script);
  },
  /**
 * _config 动态添加脚本方法
 * @private
 * @param multi 是否添加多个脚本
 * @param url 脚本链接，默认添加 new_bridge.js
 * @param fn 回调函数
 */
  _config(multi = false, url: string, fn: any) {

    var script = document.createElement("script");
    if (!multi) {
      script.setAttribute('id', 'bridge');
    }
    url = url || '//front.chelun.com/new_bridge.js';////service.eclicks.cn:8080/service_utility/weixin/new_share_bridge.js

    script.src = url + "?id=" + Date.now();
    if (fn) {
      script.onload = fn;
    }
    var body = document.getElementsByTagName("body")[0];
    if (!multi && document.getElementById('bridge')) {
      return;
    }
    body.appendChild(script);
  },

  /**
   * 微信事件重新绑定
   */
  onWeiXin: () => {
    try {
      wx.onMenuShareTimeline({
        title: window.shareData.tTitle,
        link: window.shareData.tLink,
        imgUrl: window.shareData.tImgUrl,
        desc: window.shareData.tContent,
        success: function () {
          if (typeof window._report_share_success === "function") {
            window._report_share_success('weixin_timeline');
          }
        },
        cancel: function () { }
      });

      wx.onMenuShareAppMessage({
        title: window.shareData.fTitle,
        link: window.shareData.fLink,
        imgUrl: window.shareData.fImgUrl,
        desc: window.shareData.fContent,
        success: function () {
          if (typeof window._report_share_success === "function") {
            window._report_share_success('weixin_app');
          }
        },
        cancel: function () { }
      });
    } catch (e) {
    }
  },
  /**
   * 分享成功后回调方法设置
   * 1分享环境 2分享自己特定回调 3通用回调
   * @param to 
   * @param shareCallBackName
   * @param callback
   */
  setAppCallback: (to: string, shareCallBackName: string, callback: any) => {
    return {
      to,
      shareCallBackName,
      callback
    };
  },
  /**
   * 设置车轮车友分享
   * @param attrs
   */
  setAppClMessage(attrs: any) {
    window[consts.BRIDGE_SHARE_CLMESSAGE] = attrs;
  },
  /**
   * 设置微信朋友圈分享
   * @param attrs
   */
  setAppWxTimeLine(attrs: any) {
    window[consts.BRIDGE_SHARE_WXTIMELIN] = attrs;
  },
  /**
   * 设置微信好友分享
   * @param attrs
   */
  setAppWxMessage(attrs: any) {
    window[consts.BRIDGE_SHARE_WXMESSAGE] = attrs;
  },
  /**
   * 设置QQ分享
   * @param attrs
   */
  setAppQQ(attrs: any) {
    window[consts.BRIDGE_SHARE_QQ] = attrs;
  },
  /**
   * 设置新浪微博分享
   * @param attrs
   */
  setAppSina(attrs: any) {
    window[consts.BRIDGE_SHARE_SINA] = attrs;
  },
  /**
   * 设置短信分享
   * @param attrs
   */
  setAppSms(attrs: any) {
    window[consts.BRIDGE_SHARE_SMS] = attrs;
  }

}

export default share;
