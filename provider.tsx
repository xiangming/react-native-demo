import React, { useContext, useState } from 'react';
import { FoodsContext, FoodsContextProps } from './context';

export type FoodsProviderProps = Partial<FoodsContextProps>;

export const FoodsProvider = (props: FoodsProviderProps) => {
  const { children } = props;

  const context = useContext(FoodsContext);

  const [total, setTotal] = useState(context.total);
  const [currentIndex, setCurrentIndex] = useState(context.currentIndex);

  const onAdd = (num: number) => {
    setTotal(total + num);
  };

  const onSwipe = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <FoodsContext.Provider
      value={{
        total,
        onAdd,
        currentIndex,
        onSwipe,
      }}
    >
      {children}
    </FoodsContext.Provider>
  );
};
