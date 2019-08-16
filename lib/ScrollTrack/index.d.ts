/**
 * ScrollTrack.js
 * 根据 URL 作为标识，跟踪滚动条位置信息并进行保存和恢复
 */
export default class ScrollTrack {
    private stack;
    private record;
    constructor();
    /**
      * 项目初始化时调用，只需要调用一次
      * @return {void}
      */
    start(): void;
    /**
      * 主动销毁监听器
      * @return {void}
      */
    destory(): void;
    /**
      * 防抖函数
      * @param {function} method
      * @param {any} context
      * @param { number } delay
      * @return {void}
      */
    private debunce;
    /**
      * 恢复位置信息
      * @return {void}
      */
    private resume;
    /**
    * 获取当前滚动位置
    * @return {number}
    */
    private getScrollTop;
}
