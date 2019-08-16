"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
function LoadingComponent() {
    return (react_1.default.createElement("div", { className: "cl-Loading-mask" },
        react_1.default.createElement("div", { className: "cl-Loading" },
            react_1.default.createElement("div", { className: "cl-Loading-container" },
                react_1.default.createElement("span", null),
                react_1.default.createElement("span", null),
                react_1.default.createElement("span", null),
                react_1.default.createElement("span", null),
                react_1.default.createElement("span", null),
                react_1.default.createElement("span", null)))));
}
exports.LoadingComponent = LoadingComponent;
var Loading = /** @class */ (function () {
    function Loading() {
        this.container = document.createElement('div');
        document.body.appendChild(this.container);
        react_dom_1.default.render(react_1.default.createElement(LoadingComponent, null), this.container);
    }
    Loading.prototype.destroy = function () {
        react_dom_1.default.unmountComponentAtNode(this.container);
        this.container.remove();
    };
    return Loading;
}());
exports.default = Loading;
