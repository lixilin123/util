"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/**
 * useUpdate React的生命周期钩子，类似于forceUpdate
 */
function useUpdate() {
    var _a = react_1.useState(0), setState = _a[1];
    return function () { return setState(function (state) { return state + 1; }); };
}
exports.default = useUpdate;
;
