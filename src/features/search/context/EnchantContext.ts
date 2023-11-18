import { createContext } from 'react';
import { EnchantData } from '../common/interface/enchantData';

type EnchantContext = {
  enchantList: Array<EnchantData>;
  setEnchantList: (enchantList: Array<EnchantData>) => void;
  rowData: Array<EnchantData>;
  setRowData: (enchantList: Array<EnchantData>) => void;
  count: number;
  setCount: (count: number) => void;
};

export const EnchantContext = createContext<EnchantContext>({} as EnchantContext);
