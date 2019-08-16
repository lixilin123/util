"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var useEffectOnce_1 = __importDefault(require("./useEffectOnce"));
/**
 * useMount React的生命周期钩子，类似于willUnMount
 * @param {function} fn 执行函数
 */
function useUnmount(fn) {
    useEffectOnce_1.default(function () { return fn; });
}
exports.default = useUnmount;
