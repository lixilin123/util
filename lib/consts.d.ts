declare const consts: {
    /**车轮APP名称，比如 查违章，车轮社区*/
    COOKIE_APP_NAME: string;
    /**APP版本号*/
    COOKIE_APP_VERSION: string;
    /**车轮统一登录态，去服务端校验*/
    COOKIE_APP_TOKEN: string;
    /**机型，主要针对安卓，读取系统设备信息来做兼容性判断和数据统计*/
    COOKIE_DEVICE: string;
    /**操作系统ios android*/
    COOKIE_OS_TYPE: string;
    /**IOS版本号  安卓版本号*/
    COOKIE_OS_VERSION: string;
    /**是否登录*/
    COOKIE_IS_LOGIN: string;
    /**菜单*/
    /**分享微信好友按钮*/
    MENU_WX_F: string;
    /**分享朋友圈按钮*/
    MENU_WX_T: string;
    /**刷新按钮*/
    MENU_REFRESH: string;
    /**分享车轮车友按钮*/
    MENU_CL_F: string;
    /**分享QQ按钮*/
    MENU_QQ: string;
    /**分享新浪微博按钮*/
    MENU_SINA: string;
    /**分享短信按钮*/
    MENU_SMS: string;
    /**复制链接*/
    MENU_COPY: string;
    /**打开第三方浏览器*/
    MENU_OPEN: string;
    /**分享回调中设置的TO*/
    TO_WX_F: string;
    TO_WX_T: string;
    TO_CL_F: string;
    TO_QQ: string;
    TO_SINA: string;
    TO_SMS: string;
    /**JSBridge*/
    /**是否显示右上角菜单按钮*/
    BRIDGE_SHOW_MENU: string;
    /**显示的功能按钮列表*/
    BRIDGE_MENU_ITEMS: string;
    /**车轮车友分享内容*/
    BRIDGE_SHARE_CLMESSAGE: string;
    /**微信朋友圈分享内容*/
    BRIDGE_SHARE_WXTIMELIN: string;
    /**微信朋友分享内容*/
    BRIDGE_SHARE_WXMESSAGE: string;
    /**QQ好友分享内容*/
    BRIDGE_SHARE_QQ: string;
    /**新浪微博分享内容*/
    BRIDGE_SHARE_SINA: string;
    /**发短信内容*/
    BRIDGE_SHARE_SMS: string;
    /**自定义配置*/
    BRIDGE_CUSTOM_CONFIG: string;
    /**禁止拼系统参数的url配置列表*/
    BRIDGE_DISSYS_URLLIST: string;
};
export default consts;
