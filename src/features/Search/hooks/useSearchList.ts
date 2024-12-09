import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useEnchantStore } from '../state/useEnchantStore';
import { usePcLayoutStore } from '../state/usePcLayoutStore';

import { fetchSearchEnchantData } from '@/repositories/search/fetchSearchEnchantData';

export const useSearchList = (isFreeSearch: boolean) => {
  const { setImmutableEnchants, setEffectName } = useEnchantStore();
  const { setOrderBy, setOrder, setPage } = usePcLayoutStore();
  const [isLoading, setIsLoading] = useState(false);

  const [inputParams] = useSearchParams();
  const path = isFreeSearch ? '/search' : '/detail';

  useEffect(() => {
    const res = async () => fetchSearchEnchantData(path, inputParams);

    res().then(res => {
      const enchantList = res.enchant_list;
      setImmutableEnchants(enchantList);

      const dataLength = enchantList.length;
      if (dataLength > 0 && enchantList[0].disp_val) {
        setOrderBy('disp_val');
        setOrder('desc');
      }

      res.effect_name && setEffectName(res.effect_name.effect);
      setPage(0);
      setIsLoading(true);
    });
  }, [inputParams]);

  return {
    isLoading,
  };
};
