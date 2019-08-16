import { useEffect, useRef } from 'react';
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
export default function useReachBottom(callback: () => void, distance?: number) {
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
