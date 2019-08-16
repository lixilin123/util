import { useState } from 'react';

/**
 * useSetState React 状态钩子，类似于 class Component 组件中的 state
 * @param {state} initialState 初始state
 * @return {Array} [state, setState] 返回 state 和 setState 函数
 */
const useSetState = <T extends object>(initialState: T = {} as T): [T, (patch: Partial<T> | (() => void)) => void] => {
  const [state, set] = useState<T>(initialState);
  const setState = (patch: any) => {
    set(prevState => Object.assign({}, prevState, patch instanceof Function ? patch(prevState) : patch));
  };

  return [state, setState];
};

export default useSetState;