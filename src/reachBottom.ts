import React, {
  useEffect,
  useRef
} from 'react';

//标准模式
const isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
//获取滚动高度
const getScrollTop = () => {
  let supportPageOffset = window.pageXOffset !== undefined;
  let y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
  return y;
};
//触底检查
const checkReachBottom = (distance: number): boolean => {
  //获取滚动位置
  let scrollTop = getScrollTop();
  //获取窗口高度
  let height = isCSS1Compat ? document.documentElement.clientHeight : document.body.clientHeight;
  //获取页面高度
  let scrollHeight = document.body.scrollHeight;
  //判断是否触底
  if (scrollHeight > height && scrollTop + height + distance > scrollHeight) {
    return true;
  }
  return false;
}

/**
 * useReachBottom 监听用户上拉触底
 * @param {function} callback 上拉触底事件回调
 * @param {number} distance 页面上拉触底事件触发时距页面底部距离，默认100
 */
export function useReachBottom(callback: () => void, distance?: number) {
  const savedCallback = useRef(callback);
  const savedDistance = distance === undefined ? 100 : distance;
  //滚动监听
  const onscroll = () => {
    if (checkReachBottom(savedDistance)) {
      savedCallback.current();
    }
  }
  //存储触底回调
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    window.addEventListener('scroll', onscroll);
    return () => {
      window.removeEventListener('scroll', onscroll);
    }
  }, [])
}

/**
 * 监听用户上拉触底,组件需要配置onReachBottom， onReachBottomDistance
 * @param {function} onReachBottom 上拉触底事件回调
 * @param {number} onReachBottomDistance 页面上拉触底事件触发时距页面底部距离，默认100px
 */
export function injectReachBottom(target: React.ComponentClass) {
  const targetDM = target.prototype.componentDidMount;
  const targetWUM = target.prototype.componentWillUnmount;
  const onscroll = function (callback: () => void, distance: number) {
    if (checkReachBottom(distance)) {
      callback();
    }
  }
  let scrollFn: () => void;
  target.prototype.componentDidMount = function () {
    targetDM && targetDM.call(this);
    if (typeof this.onReachBottom === 'function') {
      const callback: () => void = this.onReachBottom.bind(this);
      const distance: number = this.onReachBottomDistance || 100;
      scrollFn = onscroll.bind(this, callback, distance);
      window.addEventListener('scroll', scrollFn);
    }
  };
  target.prototype.componentWillUnmount = function () {
    targetWUM && targetWUM.call(this);
    if (scrollFn) {
      window.removeEventListener('scroll', scrollFn);
    }
  };
  return target;
}
