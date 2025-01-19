import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { HeadData } from '../Pc/components/SearchListHead/types/HeadData';
import { Order } from '../Pc/types/Order';

type State = {
  order: Order;
  orderBy: keyof HeadData | '';
  page: number;
};

type Action = {
  setOrder: (order: Order) => void;
  setOrderBy: (orderBy: keyof HeadData) => void;
  setPage: (page: number) => void;
};

const useStore = create<State & Action>()(
  immer(set => ({
    order: 'asc',
    orderBy: '',
    page: 0,
    setOrder: (order: Order) => set({ order }),
    setOrderBy: (orderBy: keyof HeadData) => set({ orderBy }),
    setPage: (page: number) => set({ page }),
  })),
);

export const usePcLayoutStore = () => {
  const order = useStore(store => store.order);
  const orderBy = useStore(store => store.orderBy);
  const page = useStore(store => store.page);
  const setOrder = useStore(store => store.setOrder);
  const setOrderBy = useStore(store => store.setOrderBy);
  const setPage = useStore(store => store.setPage);

  return {
    order,
    orderBy,
    page,
    setOrder,
    setOrderBy,
    setPage,
  };
};
