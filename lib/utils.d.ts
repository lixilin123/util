/**
 * 常用公共方法
 */
declare const utils: {
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
    getParam(name: string): string;
    /**
     * @description 预加载图片资源
     * @param src 图片链接
     * @return Promise
     */
    loadImage(src: string): Promise<{}>;
    /**
     * @method 防抖函数
     * @description
     * @param method 传入的方法
     * @param context 传入的上下文
     * @param delay 传入延迟时间，默认1000ms
     * @returns {Function}
     */
    debunce(method: () => void, delay?: number, context?: any): (...args: any) => void;
    /**
     * @method 节流防抖整合函数
     * @description delay 的间隔内连续触发的调用，后一个调用会把前一个调用的等待处理掉，但每隔 gap 至少执行一次
     * @param method 传入的方法
     * @param delay 传入延迟时间，默认1000ms
     * @param gap 至少多长时间执行一次
     * @param context 传入的上下文
     * @returns {Function}
     */
    throttle(method: () => void, delay?: number, gap?: number, context?: any): (...args: any) => void;
    /**
     * @description 加载script
     * @param url url地址
     * @returns Promise
     */
    loadScript(url: string): Promise<{}>;
};
export default utils;
