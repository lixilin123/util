/**
 * 百度统计上报
 */

interface BaiduCountOption {
  id?: string; // 统计追踪ID
  type?: string; // 统计分类
}

const option: BaiduCountOption = {
  id: "9f9fd730557c9f615b60a2133fb7616f",
  type: document.title
};

const baiduCount = {
  option,
  /**
   * 初始化百度统计，默认使用账号 clstrick3
   * http://doc.oa.com/pages/viewpage.action?pageId=11439044
   * @param baiduCountID
   */
  init(option: BaiduCountOption) {
    this.option = option;
    window._hmt = window._hmt || [];
    const hmScript = document.createElement("script");
    hmScript.src = `//hm.baidu.com/hm.js?${option.id}`;
    document.head.appendChild(hmScript);
  },
  /**
   * 上报动作标签
   * @param action
   */
  report(action = "点击", ...args: any) {
    if (window._hmt && window._hmt.push) {
      window._hmt.push(["_trackEvent", this.option.type, action, ...args]);
    }
  }
};

export default baiduCount;
