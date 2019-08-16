/**
 * 常用正则表达式
 */
declare const regx: {
    /** 手机号码 */
    mobile: RegExp;
    /** 全部是中文 */
    chinese: RegExp;
    /** 简单的身份证 */
    card: RegExp;
    /** 邮箱 */
    email: RegExp;
    /** 整数 */
    digits: RegExp;
};
export default regx;
