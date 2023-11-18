import { useContext } from 'react';
import { EnchantContext } from './EnchantContext';

export const useEnchantContext = () => useContext(EnchantContext);