"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var touchHoverOn = true;
(function () {
    var getTarget = function (node) {
        if (!node || !(node instanceof Element))
            return null;
        if (node.dataset.hover !== undefined) {
            return node;
        }
        else if (node.parentNode !== null) {
            return getTarget(node.parentNode);
        }
    };
    var inHover = false, node;
    var touchstart = function (e) {
        if (e.touches.length > 1 || inHover || !touchHoverOn) {
            return;
        }
        var Touch = e.touches.item(0);
        if (!Touch) {
            return;
        }
        node = getTarget(Touch.target);
        if (!node)
            return;
        inHover = true;
        node.dataset.hover && node.classList.add(node.dataset.hover);
    };
    var touchend = function () {
        if (inHover) {
            inHover = false;
            node.dataset.hover && node.classList.remove(node.dataset.hover);
        }
    };
    var doc = document.documentElement;
    doc.addEventListener('touchstart', touchstart);
    doc.addEventListener('touchend', touchend);
    doc.addEventListener('touchcancel', touchend);
})();
var touchHover = {
    on: function () {
        touchHoverOn = true;
    },
    off: function () {
        touchHoverOn = false;
    }
};
exports.default = touchHover;
