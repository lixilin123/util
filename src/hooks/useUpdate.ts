import { useState } from 'react';

/**
 * useUpdate React的生命周期钩子，类似于forceUpdate
 */
export default function useUpdate() {
  const [, setState] = useState(0);
  return () => setState(state => state + 1);
};