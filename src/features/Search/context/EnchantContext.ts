import { createContext } from 'react';

import { EnchantData } from '@/repositories/search/_types';

type EnchantContext = {
  enchantList: Array<EnchantData>;
  setEnchantList: (enchantList: Array<EnchantData>) => void;
  rowData: Array<EnchantData>;
  setRowData: (rowData: Array<EnchantData>) => void;
  count: number;
  setCount: (count: number) => void;
};

export const EnchantContext = createContext<EnchantContext>(
  {} as EnchantContext,
);
