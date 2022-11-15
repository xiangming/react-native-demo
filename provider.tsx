import React, { useContext, useState } from 'react';
import { OrderContext, OrderContextProps } from './context';

export type OrderProviderProps = OrderContextProps;

export const OrderProvider = (props: OrderProviderProps) => {
  const { children } = props;

  const context = useContext(OrderContext);

  const [total, setTotal] = useState(context.total || 0);
  const [currentIndex, setCurrentIndex] = useState(context.currentIndex || 0);

  const onAdd = (num: number) => {
    setTotal(total + num);
  };

  const onSwipe = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <OrderContext.Provider
      value={{
        total,
        onAdd,
        currentIndex,
        onSwipe,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
