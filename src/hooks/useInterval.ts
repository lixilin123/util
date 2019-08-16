import { useRef, useEffect } from "react";

/**
 * useInterval 类 setInterval 方法
 * @param {function} callback 执行函数
 * @param {number} delay 延迟时间，单位ms
 */
export default function useInterval(callback: () => {}, delay: number = 0) {
  const savedCallback = useRef(() => { });

  // 保存新回调
  useEffect(() => {
    savedCallback.current = callback;
  });

  // 建立 interval
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}