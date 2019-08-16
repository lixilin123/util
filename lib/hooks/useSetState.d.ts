/**
 * useSetState React 状态钩子，类似于 class Component 组件中的 state
 * @param {state} initialState 初始state
 * @return {Array} [state, setState] 返回 state 和 setState 函数
 */
declare const useSetState: <T extends object>(initialState?: T) => [T, (patch: Partial<T> | (() => void)) => void];
export default useSetState;
