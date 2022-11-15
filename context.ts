import React from 'react';

export interface OrderContextProps {
  total?: number; // 总金额
  children?: React.ReactNode;
  onAdd?: (num: number) => void; // 总金额变更回调
  currentIndex?: number; // 当前food索引
  onSwipe?: (currentIndex: number) => void; // swipe回调
}

export const OrderContext = React.createContext<OrderContextProps>({});
