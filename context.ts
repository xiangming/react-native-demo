import React from 'react';

export interface FoodsContextProps {
  total: number; // total
  onAdd?: (num: number) => void; // total change callback
  currentIndex: number; // demo only, use an [id] for real scenario
  onSwipe?: (currentIndex: number) => void; // swipe callback
  children?: React.ReactNode;
}

export const FoodsContext = React.createContext<FoodsContextProps>({ total: 0, currentIndex: 0 });
