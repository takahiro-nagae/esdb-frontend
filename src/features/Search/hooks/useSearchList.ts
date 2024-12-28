import { useEffect, useState } from 'react';

import { useEnchantStore } from '@/features/Search/state/useEnchantStore';
import { usePcLayoutStore } from '@/features/Search/state/usePcLayoutStore';
import { fetchSearchEnchantData } from '@/repositories/search/fetchSearchEnchantData';

export const useSearchList = (path: string, inputParams: URLSearchParams) => {
  const { setImmutableEnchants, setEffectName } = useEnchantStore();
  const { setOrderBy, setOrder, setPage } = usePcLayoutStore();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchSearchEnchantData(path, inputParams);
        const enchantList = res.enchant_list;
        setImmutableEnchants(enchantList);

        const dataLength = enchantList.length;
        if (dataLength > 0 && enchantList[0].disp_val) {
          setOrderBy('disp_val');
          setOrder('desc');
        }

        if (res.effect_name) {
          setEffectName(res.effect_name.effect);
        }
        setPage(0);
        setIsLoading(true);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [
    path,
    inputParams,
    setImmutableEnchants,
    setEffectName,
    setOrderBy,
    setOrder,
    setPage,
  ]);

  return {
    isLoading,
  };
};
