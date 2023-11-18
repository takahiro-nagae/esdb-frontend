import { createContext } from 'react';
import { Order } from '../pc/type/order';
import { HeadData } from '../pc/interface/headData';

type OrderContext = {
  order : Order;
  setOrder : (order: Order) => void;
  orderBy : keyof HeadData;
  setOrderBy : (orderBy: keyof HeadData) => void;
};

export const OrderContext = createContext<OrderContext>({} as OrderContext);
