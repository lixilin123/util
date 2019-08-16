"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/**
 * useTimeout 类 setTimeout 方法
 * @param {function} callback 执行函数
 * @param {number} delay 延迟时间，单位ms
 */
function useTimeout(callback, delay) {
    if (delay === void 0) { delay = 0; }
    var savedCallback = react_1.useRef(function () { });
    // 保存新回调
    react_1.useEffect(function () {
        savedCallback.current = callback;
    });
    // 建立 timeout
    react_1.useEffect(function () {
        function tick() {
            savedCallback.current();
        }
        var id = setTimeout(tick, delay);
        return function () { return clearTimeout(id); };
    }, [delay]);
}
exports.default = useTimeout;
