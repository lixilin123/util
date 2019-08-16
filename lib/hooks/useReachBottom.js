"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
//标准模式
var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
//获取滚动高度
var getScrollTop = function () {
    var supportPageOffset = window.pageXOffset !== undefined;
    var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    return y;
};
//触底检查
var checkReachBottom = function (distance) {
    //获取滚动位置
    var scrollTop = getScrollTop();
    //获取窗口高度
    var height = isCSS1Compat ? document.documentElement.clientHeight : document.body.clientHeight;
    //获取页面高度
    var scrollHeight = document.body.scrollHeight;
    //判断是否触底
    if (scrollHeight > height && scrollTop + height + distance > scrollHeight) {
        return true;
    }
    return false;
};
/**
 * useReachBottom 监听用户上拉触底
 * @param {function} callback 上拉触底事件回调
 * @param {number} distance 页面上拉触底事件触发时距页面底部距离，默认100
 */
function useReachBottom(callback, distance) {
    var savedCallback = react_1.useRef(callback);
    var savedDistance = distance === undefined ? 100 : distance;
    //滚动监听
    var onscroll = function () {
        if (checkReachBottom(savedDistance)) {
            savedCallback.current();
        }
    };
    //存储触底回调
    react_1.useEffect(function () {
        savedCallback.current = callback;
    }, [callback]);
    react_1.useEffect(function () {
        window.addEventListener('scroll', onscroll);
        return function () {
            window.removeEventListener('scroll', onscroll);
        };
    }, []);
}
exports.default = useReachBottom;
