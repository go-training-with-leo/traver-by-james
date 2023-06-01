import { useState } from 'react';

type TStateUpdate<T> = (prevState: T) => T;
type TMergeStateFun<T> = (value: Partial<T> | TStateUpdate<T>) => void;
type TMergeState<T> = [T, TMergeStateFun<T>];

export const useMergeState = <T>(initialState: T): TMergeState<T> => {
  const [state, setState] = useState<T>(initialState);

  const mergeState: TMergeStateFun<T> = value => {
    setState(prevState => {
      const newState =
        typeof value === 'function'
          ? (value as TStateUpdate<T>)(prevState)
          : { ...prevState, ...value };
      return newState;
    });
  };

  return [state, mergeState];
};
