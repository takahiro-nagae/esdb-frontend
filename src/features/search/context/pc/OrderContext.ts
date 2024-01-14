import { createContext } from 'react';
import { Order } from '../../pc/type/Order';
import { HeadData } from '../../pc/type/HeadData';

export type OrderContext = {
  order : Order;
  setOrder : (order: Order) => void;
  orderBy : keyof HeadData;
  setOrderBy : (orderBy: keyof HeadData) => void;
};

export const OrderContext = createContext<OrderContext>({} as OrderContext);
