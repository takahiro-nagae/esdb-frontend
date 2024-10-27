import { createContext } from 'react';
import { Order } from '../../Pc/types/Order';
import { HeadData } from '../../Pc/components/SearchListHead/types/HeadData';

export type OrderContext = {
  order: Order;
  setOrder: (order: Order) => void;
  orderBy: keyof HeadData;
  setOrderBy: (orderBy: keyof HeadData) => void;
};

export const OrderContext = createContext<OrderContext>({} as OrderContext);
