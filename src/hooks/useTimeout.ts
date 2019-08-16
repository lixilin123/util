import { useRef, useEffect } from "react";

/**
 * useTimeout 类 setTimeout 方法
 * @param {function} callback 执行函数
 * @param {number} delay 延迟时间，单位ms
 */
export default function useTimeout(callback: () => {}, delay: number = 0) {
  const savedCallback = useRef(() => { });

  // 保存新回调
  useEffect(() => {
    savedCallback.current = callback;
  });

  // 建立 timeout
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    let id = setTimeout(tick, delay);
    return () => clearTimeout(id);
  }, [delay]);
}