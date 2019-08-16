let touchHoverOn: boolean = true;

(function () {
	let getTarget = (node: HTMLElement | EventTarget): any => {
		if (!node || !(node instanceof Element)) return null;
		if (node.dataset.hover !== undefined) {
			return node;
		} else if (node.parentNode !== null) {
			return getTarget(node.parentNode);
		}
	}

	let inHover: boolean = false, node: HTMLElement;
	let touchstart = function (e: TouchEvent) {
		if (e.touches.length > 1 || inHover || !touchHoverOn) {
			return;
		}
		let Touch = e.touches.item(0);
		if (!Touch) {
			return;
		}
		node = getTarget(Touch.target);
		if (!node) return;
		inHover = true;

		node.dataset.hover && node.classList.add(node.dataset.hover);
	};
	let touchend = function () {
		if (inHover) {
			inHover = false;
			node.dataset.hover && node.classList.remove(node.dataset.hover);
		}
	};

	let doc = document.documentElement;
	doc.addEventListener('touchstart', touchstart);
	doc.addEventListener('touchend', touchend);
	doc.addEventListener('touchcancel', touchend);
})();

let touchHover = {
	on() {
		touchHoverOn = true;
	},
	off() {
		touchHoverOn = false;
	}
};

export default touchHover;