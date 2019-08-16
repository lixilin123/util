/**
 * 百度统计上报
 */
interface BaiduCountOption {
    id?: string;
    type?: string;
}
declare const baiduCount: {
    option: BaiduCountOption;
    /**
     * 初始化百度统计，默认使用账号 clstrick3
     * http://doc.oa.com/pages/viewpage.action?pageId=11439044
     * @param baiduCountID
     */
    init(option: BaiduCountOption): void;
    /**
     * 上报动作标签
     * @param action
     */
    report(action?: string, ...args: any): void;
};
export default baiduCount;
