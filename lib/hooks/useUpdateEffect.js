"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/**
 * useUpdateEffect React的生命周期钩子，类似于DidUpdate
 * @param {function} fn 执行函数
 * @param {Array | undefined} inputs (可选) useEffect 依赖数组
 */
function useUpdateEffect(fn, inputs) {
    var isMount = react_1.useRef(false);
    react_1.useEffect(!isMount.current
        ? function () {
            isMount.current = true;
        }
        : fn, inputs);
}
exports.default = useUpdateEffect;
