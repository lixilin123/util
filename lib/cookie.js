"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cookie = {
    all: function () {
        var maps = {};
        var cookArr = document.cookie.split(";");
        for (var i in cookArr) {
            var tmp = cookArr[i].replace(/^\s*/, "");
            if (tmp) {
                var nv = tmp.split("=");
                maps[nv[0]] = nv[1] || "";
            }
        }
        return maps;
    },
    get: function (name) {
        return this.all()[name];
    },
    set: function (name, value, option) {
        var str = name + "=" + value;
        option.path && (str += ";path=" + option.path);
        option.domain && (str += ";domain=" + option.domain);
        option.maxAge && (str += ";max-age=" + option.maxAge);
        option.expires && (str += ";expires=" + option.expires);
        option.httpOnly && (str += ";secure");
        document.cookie = str;
    }
};
exports.default = cookie;
