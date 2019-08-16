import { InputIdentityList } from "react";
/**
 * useUpdateEffect React的生命周期钩子，类似于DidUpdate
 * @param {function} fn 执行函数
 * @param {Array | undefined} inputs (可选) useEffect 依赖数组
 */
export default function useUpdateEffect(fn: () => void, inputs?: InputIdentityList): void;
