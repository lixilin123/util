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
var react_dom_1 = __importDefault(require("react-dom"));
var AlertComponent = /** @class */ (function (_super) {
    __extends(AlertComponent, _super);
    function AlertComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            animationClass: "cl-Alert-show"
        };
        return _this;
    }
    AlertComponent.prototype.onAnimationEnd = function (e) {
        if (e.animationName === "cl-Alert-hide") {
            this.props.onHide();
        }
    };
    AlertComponent.prototype.onCancel = function () {
        this.setState({ animationClass: "cl-Alert-hide" });
        this.props.onCancel();
    };
    AlertComponent.prototype.onConfirm = function () {
        this.setState({ animationClass: "cl-Alert-hide" });
        this.props.onConfirm();
    };
    AlertComponent.prototype.showContent = function () {
        if (typeof this.props.content === "string") {
            return react_1.default.createElement("p", { className: "cl-Alert-content" }, this.props.content);
        }
        if (react_1.default.isValidElement(this.props.content)) {
            return this.props.content;
        }
    };
    AlertComponent.prototype.render = function () {
        return (react_1.default.createElement("div", { className: "cl-Alert" },
            react_1.default.createElement("div", { className: "cl-Alert-container " + this.state.animationClass, onAnimationEnd: this.onAnimationEnd.bind(this) },
                this.showContent(),
                react_1.default.createElement("div", { className: "cl-Alert-btn" },
                    this.props.showCancel ? (react_1.default.createElement("div", { className: "cl-Alert-cancel", onClick: this.onCancel.bind(this), onTouchStart: function () { } }, this.props.cancelText)) : null,
                    react_1.default.createElement("div", { className: "cl-Alert-confirm", onClick: this.onConfirm.bind(this), onTouchStart: function () { } }, this.props.confirmText)))));
    };
    AlertComponent.defaultProps = {
        showCancel: false,
        cancelText: "取消",
        confirmText: "确定",
        onConfirm: function () { },
        onCancel: function () { },
        onHide: function () { }
    };
    return AlertComponent;
}(react_1.default.Component));
exports.AlertComponent = AlertComponent;
function Alert(option) {
    var props;
    if (typeof option === "string") {
        props = {
            content: option
        };
    }
    else if (typeof option === "object") {
        props = option;
    }
    else {
        throw new Error("无效的参数");
    }
    var container = document.createElement("div");
    document.body.appendChild(container);
    props.onHide = function () {
        react_dom_1.default.unmountComponentAtNode(container);
        container.remove();
    };
    react_dom_1.default.render(react_1.default.createElement(AlertComponent, __assign({}, props)), container);
}
exports.default = Alert;
