import { OrderContext } from '../../../../context/pc/OrderContext';
import { HeadData } from '../types/HeadData';

export const createSortHandler = (
  property: keyof HeadData,
  orderContext: OrderContext,
) => {
  const isAsc =
    orderContext.orderBy === property && orderContext.order === 'asc';
  orderContext.setOrder(isAsc ? 'desc' : 'asc');
  orderContext.setOrderBy(property);
};

export const isDisplayCell = (cellId: string, isDispVal: boolean) => {
  if (isDispVal) {
    // trueの場合は全てのcellを表示して良い
    return true;
  }

  if (cellId === 'disp_val') {
    // isDispValがfalseの場合はdisp_valのcellは表示しない
    return false;
  } else {
    return true;
  }
};
