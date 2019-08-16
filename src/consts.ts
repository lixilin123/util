const consts = {
  //cookie常量
  /**车轮APP名称，比如 查违章，车轮社区*/
  COOKIE_APP_NAME: 'chelun_appName',
  /**APP版本号*/
  COOKIE_APP_VERSION: 'chelun_appVersion',
  /**车轮统一登录态，去服务端校验*/
  COOKIE_APP_TOKEN: 'chelun_acToken',
  /**机型，主要针对安卓，读取系统设备信息来做兼容性判断和数据统计*/
  COOKIE_DEVICE: 'chelun_device',
  /**操作系统ios android*/
  COOKIE_OS_TYPE: 'chelun_osType',
  /**IOS版本号  安卓版本号*/
  COOKIE_OS_VERSION: 'chelun_osVersion',
  /**是否登录*/
  COOKIE_IS_LOGIN: 'chelun_isLogin',
  /**菜单*/
  /**分享微信好友按钮*/
  MENU_WX_F: 'menu:share:wxMessage',
  /**分享朋友圈按钮*/
  MENU_WX_T: 'menu:share:wxTimeline',
  /**刷新按钮*/
  MENU_REFRESH: 'menu:refresh',
  /**分享车轮车友按钮*/
  MENU_CL_F: 'menu:share:clMessage',
  /**分享QQ按钮*/
  MENU_QQ: 'menu:share:qq',
  /**分享新浪微博按钮*/
  MENU_SINA: 'menu:share:sina',
  /**分享短信按钮*/
  MENU_SMS: 'menu:share:sms',
  /**复制链接*/
  MENU_COPY: 'menu:share:copyUrl',
  /**打开第三方浏览器*/
  MENU_OPEN: 'menu:share:openWithBrowser',
  /**分享回调中设置的TO*/
  TO_WX_F: 'wxMessage',
  TO_WX_T: 'wxTimeline',
  TO_CL_F: 'clMessage',
  TO_QQ: 'qq',
  TO_SINA: 'sina',
  TO_SMS: 'sms',
  /**JSBridge*/
  /**是否显示右上角菜单按钮*/
  BRIDGE_SHOW_MENU: 'CHELUN_SHOW_OPTION_MENU',
  /**显示的功能按钮列表*/
  BRIDGE_MENU_ITEMS: 'CHELUN_SHOW_MENU_ITEMS',
  /**车轮车友分享内容*/
  BRIDGE_SHARE_CLMESSAGE: 'CHELUN_SHARE_DATA_CLMESSAGE',
  /**微信朋友圈分享内容*/
  BRIDGE_SHARE_WXTIMELIN: 'CHELUN_SHARE_DATA_WXTIMELINE',
  /**微信朋友分享内容*/
  BRIDGE_SHARE_WXMESSAGE: 'CHELUN_SHARE_DATA_WXMESSAGE',
  /**QQ好友分享内容*/
  BRIDGE_SHARE_QQ: 'CHELUN_SHARE_DATA_QQ',
  /**新浪微博分享内容*/
  BRIDGE_SHARE_SINA: 'CHELUN_SHARE_DATA_SINA',
  /**发短信内容*/
  BRIDGE_SHARE_SMS: 'CHELUN_SHARE_DATA_SMS',
  /**自定义配置*/
  BRIDGE_CUSTOM_CONFIG: 'CHELUN_CUSTOM_CONFIG',
  /**禁止拼系统参数的url配置列表*/
  BRIDGE_DISSYS_URLLIST: 'CHELUN_DISSYS_URLLIST'
}

export default consts;
