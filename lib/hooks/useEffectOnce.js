"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/**
 * useEffectOnce React的生命周期钩子，只运行一次
 * @param {function} fn
 */
function useEffectOnce(fn) {
    react_1.useEffect(fn, []);
}
exports.default = useEffectOnce;
