/**
 * useGetSet React 状态钩子，通过返回状态 getter 函数代替它本身的状态
 * @param {state} initialValue 初始state
 * @return {Array} [get, set] 返回 getter 和 setter 函数
 */
export default function useGetSet<T>(initialValue: T): [() => T, (value: T) => void];
