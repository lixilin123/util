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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var round_1 = __importDefault(require("./shapes/round"));
var textRow_1 = __importDefault(require("./shapes/textRow"));
var Post = /** @class */ (function (_super) {
    __extends(Post, _super);
    function Post() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Post.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, animation = _a.animation, set = __rest(_a, ["className", "style", "animation"]);
        var classes = [animation ? 'cl-ContentLoader-animation' : undefined, className].filter(function (c) { return c; }).join(' ');
        return (react_1.default.createElement("div", { className: classes, style: style },
            react_1.default.createElement("div", { style: { display: 'flex', alignItems: 'center' } },
                react_1.default.createElement(round_1.default, __assign({}, set, { style: { width: 60, height: 60, marginRight: 8 } })),
                react_1.default.createElement("div", { style: { flex: '1' } },
                    react_1.default.createElement(textRow_1.default, __assign({}, set, { style: { height: 12, width: '40%' } })),
                    react_1.default.createElement(textRow_1.default, __assign({}, set, { style: { height: 8, width: '20%', marginTop: 16 } })))),
            react_1.default.createElement(textRow_1.default, __assign({}, set, { style: { height: 8, width: '80%', marginTop: 16 } })),
            react_1.default.createElement(textRow_1.default, __assign({}, set, { style: { height: 8, width: '90%', marginTop: 16 } })),
            react_1.default.createElement(textRow_1.default, __assign({}, set, { style: { height: 8, width: '60%', marginTop: 16 } }))));
    };
    Post.defaultProps = {
        animation: true
    };
    return Post;
}(react_1.default.Component));
exports.default = Post;
