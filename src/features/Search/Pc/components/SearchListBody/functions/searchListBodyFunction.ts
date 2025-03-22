import { Order } from '../../../types/Order';
import { HeadData } from '../../SearchListHead/types/HeadData';

import { Enchant } from '@/features/Search/state/useEnchantStore';

export const stableSort = (
  array: Enchant[],
  comparator: (a: Enchant, b: Enchant) => number,
) => {
  const stabilizedThis = array.map(
    (el, index) => [el, index] as [Enchant, number],
  );
  stabilizedThis.sort((a, b) => comparator(a[0], b[0]));

  return stabilizedThis.map(el => el[0]);
};

export const getComparator = (order: Order, orderBy: keyof HeadData | '') => {
  return order === 'desc'
    ? (a: Enchant, b: Enchant) => descendingComparator(a, b, orderBy)
    : (a: Enchant, b: Enchant) => -descendingComparator(a, b, orderBy);
};

const descendingComparator = (
  a: Enchant,
  b: Enchant,
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
