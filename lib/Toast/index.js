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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var ToastComponent = /** @class */ (function (_super) {
    __extends(ToastComponent, _super);
    function ToastComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.container = react_1.default.createRef();
        _this.state = {
            show: false
        };
        return _this;
    }
    ToastComponent.prototype.componentDidMount = function () {
        var el = this.container.current;
        el.classList.add("cl-Toast-show");
        window.setTimeout(function () {
            el.classList.remove("cl-Toast-show");
            el.classList.add("cl-Toast-hide");
        }, this.props.duration);
    };
    ToastComponent.prototype.onTransitionEnd = function () {
        var el = this.container.current;
        if (el.classList.contains("cl-Toast-hide") &&
            typeof this.props.onEnd === "function") {
            this.props.onEnd();
        }
    };
    ToastComponent.prototype.render = function () {
        return (react_1.default.createElement("div", { className: "cl-Toast", onTransitionEnd: this.onTransitionEnd.bind(this), ref: this.container }, this.props.content));
    };
    ToastComponent.defaultProps = {
        duration: 3000,
        onEnd: undefined
    };
    return ToastComponent;
}(react_1.default.Component));
exports.ToastComponent = ToastComponent;
var Toast = /** @class */ (function () {
    function Toast(content, duration) {
        var _this = this;
        if (duration === void 0) { duration = 3000; }
        this.container = document.createElement("div");
        document.body.appendChild(this.container);
        react_dom_1.default.render(react_1.default.createElement(ToastComponent, { content: content, duration: duration, onEnd: function () {
                // 这里是完全结束，需要清理
                react_dom_1.default.unmountComponentAtNode(_this.container);
                _this.container.remove();
            } }), this.container);
    }
    return Toast;
}());
exports.default = Toast;
