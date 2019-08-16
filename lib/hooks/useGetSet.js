"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useUpdate_1 = __importDefault(require("./useUpdate"));
/**
 * useGetSet React 状态钩子，通过返回状态 getter 函数代替它本身的状态
 * @param {state} initialValue 初始state
 * @return {Array} [get, set] 返回 getter 和 setter 函数
 */
function useGetSet(initialValue) {
    var state = react_1.useRef(initialValue);
    var get = react_1.useCallback(function () { return state.current; }, []);
    var update = useUpdate_1.default();
    var set = react_1.useCallback(function (value) {
        state.current = value;
        update();
    }, []);
    return [get, set];
}
exports.default = useGetSet;
