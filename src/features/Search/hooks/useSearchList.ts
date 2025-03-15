import { useSearchParams } from 'react-router-dom';
import useSWR from 'swr';

import { CACHE_TIME_24H } from '@/const/cache';
import { useEnchantStore } from '@/features/Search/state/useEnchantStore';
import { usePcLayoutStore } from '@/features/Search/state/usePcLayoutStore';
import { fetchSearchEnchantData } from '@/repositories/search/fetchSearchEnchantData';

export const useSearchList = (isFreeSearch: boolean) => {
  const { setImmutableEnchants, setEffectName } = useEnchantStore();
  const { setOrderBy, setOrder, setPage } = usePcLayoutStore();
  const [inputParams] = useSearchParams();
  const path = isFreeSearch ? '/search' : '/detail';

  const { isLoading } = useSWR(
    [path, inputParams.toString()],
    async ([currentPath, params]) => {
      const searchParams = new URLSearchParams(params);
      return await fetchSearchEnchantData(currentPath, searchParams);
    },
    {
      onSuccess: data => {
        const enchantList = data.enchant_list;
        setImmutableEnchants(enchantList);

        const dataLength = enchantList.length;
        if (dataLength > 0 && enchantList[0].disp_val) {
          setOrderBy('disp_val');
          setOrder('desc');
        }

        if (data.effect_name) {
          setEffectName(data.effect_name.effect);
        }
        setPage(0);
      },
      onError: error => {
        console.error('Error fetching data:', error);
      },
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      dedupingInterval: CACHE_TIME_24H,
    },
  );

  return {
    isLoading,
  };
};
