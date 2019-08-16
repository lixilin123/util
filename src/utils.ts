/**
 * 常用公共方法
 */
const utils = {
  /**
   * @description 解析获取 URL 参数（兼容 hash 多问号模式）
   * @param name 参数名
   * @return {string}
   *
   * 调用示例：
   *
   * import { utils } from 'cl-util';
   *
   * utils.getParam('foo');
   *
   */
  getParam(name: string): string {
    let maps: any = {};
    let search = window.location.search.replace(/^\?*/, "");
    let hash = window.location.hash;
    let hashSearchIndex = hash.indexOf("?");
    let hashSearch = "";
    if (hashSearchIndex >= 0) {
      hashSearch = hash.substr(hashSearchIndex + 1);
    }

    if (hashSearch) {
      search += "&" + hashSearch;
    }

    var cookArr = search.split("&");
    for (var i in cookArr) {
      var tmp = cookArr[i].replace(/^\s*/, "");
      if (tmp) {
        var nv = tmp.split("=");
        maps[nv[0]] = nv[1] || "";
      }
    }
    return maps[name] || "";
  },
  /**
   * @description 预加载图片资源
   * @param src 图片链接
   * @return Promise
   */
  async loadImage(src: string) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = src;
      img.onload = function() {
        resolve(img);
      };
    });
  },
  /**
   * @method 防抖函数
   * @description
   * @param method 传入的方法
   * @param context 传入的上下文
   * @param delay 传入延迟时间，默认1000ms
   * @returns {Function}
   */
  debunce(method: () => void, delay: number = 1000, context: any = null) {
    let timer: any = null;
    return function(...args: any) {
      clearTimeout(timer);
      timer = setTimeout(function() {
        method.apply(context, args);
      }, delay);
    };
  },
  /**
   * @method 节流防抖整合函数
   * @description delay 的间隔内连续触发的调用，后一个调用会把前一个调用的等待处理掉，但每隔 gap 至少执行一次
   * @param method 传入的方法
   * @param delay 传入延迟时间，默认1000ms
   * @param gap 至少多长时间执行一次
   * @param context 传入的上下文
   * @returns {Function}
   */
  throttle(
    method: () => void,
    delay: number = 1000,
    gap: number = 50,
    context: any = null
  ) {
    let timer: any = null;
    let _startTime: any = null;
    return function(...args: any) {
      clearTimeout(timer);
      let _currnetTime = +new Date();
      if (!_startTime) {
        _startTime = _currnetTime;
      }

      // 如果超过间隔时间执行一次
      if (_currnetTime - _startTime >= gap) {
        method.apply(context, args);
        _startTime = _currnetTime;
      } else {
        timer = setTimeout(function() {
          method.apply(context, args);
        }, delay);
      }
    };
  },
  /**
   * @description 加载script
   * @param url url地址
   * @returns Promise
   */
  loadScript(url: string) {
    return new Promise(resolve => {
      const body = document.body;
      const script = document.createElement("script");
      script.src = url;
      body.appendChild(script);
      script.onload = () => {
        setTimeout(() => {
          resolve(script);
        }, 0);
      };
    });
  }
};

export default utils;
