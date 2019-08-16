import useEffectOnce from "./useEffectOnce";

/**
 * useMount React的生命周期钩子，类似于willUnMount
 * @param {function} fn 执行函数
 */
export default function useUnmount(fn: () => void) {
  useEffectOnce(() => fn);
}