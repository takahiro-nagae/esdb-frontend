import { useParams } from 'react-router-dom';
import useSWR from 'swr';

import { CACHE_TIME_24H } from '@/const/cache';
import { EnchantDataDetail } from '@/repositories/search/_types';
import { fetchEnchantDetailData } from '@/repositories/search/fetchEnchantDetailData';

export const useDetailIndex = () => {
  const params = useParams();
  const enchantIdParam = params.enchant_id ?? '';

  const { data: enchantData, isLoading } = useSWR<EnchantDataDetail>(
    ['enchantDetail', enchantIdParam],
    () => fetchEnchantDetailData(enchantIdParam),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      dedupingInterval: CACHE_TIME_24H,
    },
  );

  return { enchantData, isLoading };
};
