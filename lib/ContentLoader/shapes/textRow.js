"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TextRow = /** @class */ (function (_super) {
    __extends(TextRow, _super);
    function TextRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextRow.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, color = _a.color;
        var defaultStyles = {
            backgroundColor: color,
            width: '100%',
            height: '1em',
            borderRadius: '0.4em'
        };
        var classes = ['cl-text-row', className].filter(function (c) { return c; }).join(' ');
        return react_1.default.createElement("div", { className: classes, style: __assign({}, defaultStyles, style) });
    };
    TextRow.defaultProps = {
        color: '#ccc'
    };
    return TextRow;
}(react_1.default.Component));
exports.default = TextRow;
