import { createContext } from 'react';

import { HeadData } from '../../Pc/components/SearchListHead/types/HeadData';
import { Order } from '../../Pc/types/Order';

export type OrderContext = {
  order: Order;
  setOrder: (order: Order) => void;
  orderBy: keyof HeadData;
  setOrderBy: (orderBy: keyof HeadData) => void;
};

export const OrderContext = createContext<OrderContext>({} as OrderContext);
