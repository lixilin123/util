import { is } from ".";

/**
 * 通用业务方法封装
 */

const service = {
  /**
   * @description ioswebview进度条加载完成
   */
  iosProgressComplete() {
    if (is.ios) {
      window.location.href = "webviewprogressproxy:///complete";
    }
  }
};

export default service;
