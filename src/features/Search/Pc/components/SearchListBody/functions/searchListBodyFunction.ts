import { EnchantData } from '@/repositories/search/_types';
import { HeadData } from '../../SearchListHead/types/HeadData';
import { Order } from '../../../types/Order';

export const stableSort = (
  array: Array<EnchantData>,
  comparator: (a: EnchantData, b: EnchantData) => number,
) => {
  const stabilizedThis = array.map(
    (el, index) => [el, index] as [EnchantData, number],
  );
  stabilizedThis.sort((a, b) => comparator(a[0], b[0]));

  return stabilizedThis.map(el => el[0]);
};

export const getComparator = (order: Order, orderBy: keyof HeadData) => {
  return order === 'desc'
    ? (a: EnchantData, b: EnchantData) => descendingComparator(a, b, orderBy)
    : (a: EnchantData, b: EnchantData) => -descendingComparator(a, b, orderBy);
};

const descendingComparator = (
  a: EnchantData,
  b: EnchantData,
  orderBy: keyof HeadData,
) => {
  const aValue = a[orderBy];
  const bValue = b[orderBy];

  if (aValue == null || bValue == null) {
    return 0;
  }

  if (bValue < aValue) {
    return -1;
  }
  if (bValue > aValue) {
    return 1;
  }
  return 0;
};
