"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/**
 * useSetState React 状态钩子，类似于 class Component 组件中的 state
 * @param {state} initialState 初始state
 * @return {Array} [state, setState] 返回 state 和 setState 函数
 */
var useSetState = function (initialState) {
    if (initialState === void 0) { initialState = {}; }
    var _a = react_1.useState(initialState), state = _a[0], set = _a[1];
    var setState = function (patch) {
        set(function (prevState) { return Object.assign({}, prevState, patch instanceof Function ? patch(prevState) : patch); });
    };
    return [state, setState];
};
exports.default = useSetState;
