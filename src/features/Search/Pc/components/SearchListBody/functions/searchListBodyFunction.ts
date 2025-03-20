import { Order } from '../../../types/Order';
import { HeadData } from '../../SearchListHead/types/HeadData';

import { GetEnchantDetailsQuery } from '@/repositories/generated/graphql';

export const stableSort = (
  array: GetEnchantDetailsQuery['details']['enchants'],
  comparator: (
    a: GetEnchantDetailsQuery['details']['enchants'][number],
    b: GetEnchantDetailsQuery['details']['enchants'][number],
  ) => number,
) => {
  const stabilizedThis = array.map(
    (el, index) =>
      [el, index] as [
        GetEnchantDetailsQuery['details']['enchants'][number],
        number,
      ],
  );
  stabilizedThis.sort((a, b) => comparator(a[0], b[0]));

  return stabilizedThis.map(el => el[0]);
};

export const getComparator = (order: Order, orderBy: keyof HeadData | '') => {
  return order === 'desc'
    ? (
        a: GetEnchantDetailsQuery['details']['enchants'][number],
        b: GetEnchantDetailsQuery['details']['enchants'][number],
      ) => descendingComparator(a, b, orderBy)
    : (
        a: GetEnchantDetailsQuery['details']['enchants'][number],
        b: GetEnchantDetailsQuery['details']['enchants'][number],
      ) => -descendingComparator(a, b, orderBy);
};

const descendingComparator = (
  a: GetEnchantDetailsQuery['details']['enchants'][number],
  b: GetEnchantDetailsQuery['details']['enchants'][number],
  orderBy: keyof HeadData | '',
) => {
  if (orderBy === '') {
    return 0;
  }
  const aValue = a[orderBy as keyof typeof a];
  const bValue = b[orderBy as keyof typeof b];

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
