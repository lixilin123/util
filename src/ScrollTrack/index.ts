interface Stack {
  [key: string]: number;
}

/**
 * ScrollTrack.js
 * 根据 URL 作为标识，跟踪滚动条位置信息并进行保存和恢复
 */
export default class ScrollTrack {
  private stack: Stack;
  private record: any;
  constructor() {
    this.stack = {};
    this.record = this.debunce(() => {
      this.stack[window.location.href] = this.getScrollTop();
      console.log(this.stack)
    }, this, 50)
  }

  /**
    * 项目初始化时调用，只需要调用一次
    * @return {void} 
    */
  start() {
    this.resume();
    document.addEventListener('scroll', this.record);
  }

  /**
    * 主动销毁监听器
    * @return {void} 
    */
  destory() {
    document.removeEventListener('scroll', this.record);
  }

  /**
    * 防抖函数
    * @param {function} method
    * @param {any} context
    * @param { number } delay
    * @return {void} 
    */
  private debunce(method = () => { }, context: any, delay: number = 50) {
    let timer: any = null;
    return (...args: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        method.apply(context, args);
      }, delay);
    };
  };

  /**
    * 恢复位置信息
    * @return {void} 
    */
  private resume() {
    const pos: number = this.stack[window.location.href];
    setTimeout(() => {
      if (pos) {
        window.scrollTo(0, pos);
      } else {
        window.scrollTo(0, 0);
      }
    }, 0)
  }

  /**
  * 获取当前滚动位置
  * @return {number} 
  */
  private getScrollTop(): number {
    let supportPageOffset = window.pageXOffset !== undefined;
    let isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    let y = supportPageOffset ? window.pageYOffset :
      (isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop);
    return y;
  }
}
