import { useQuery } from '@apollo/client';
import { useSearchParams } from 'react-router-dom';
import useSWR from 'swr';

import { CACHE_TIME_24H } from '@/const/cache';
import { useEnchantStore } from '@/features/Search/state/useEnchantStore';
import { usePcLayoutStore } from '@/features/Search/state/usePcLayoutStore';
import { GET_DETAILS } from '@/repositories/details/query';
import { GetEnchantDetailsQuery } from '@/repositories/generated/graphql';
import { fetchSearchEnchantData } from '@/repositories/search/fetchSearchEnchantData';

export const useSearchList = (isFreeSearch: boolean) => {
  const { setImmutableEnchants, setEffectName } = useEnchantStore();
  const { setOrderBy, setOrder, setPage } = usePcLayoutStore();
  const [inputParams] = useSearchParams();
  // const path = isFreeSearch ? '/search' : '/detail';

  const { loading } = useQuery<GetEnchantDetailsQuery>(GET_DETAILS, {
    variables: {
      enchantName: inputParams.get('enchantName'),
      effect: inputParams.get('effect'),
      effectVal: inputParams.get('effectVal'),
      rangeVal: inputParams.get('range'),
      position: inputParams.get('position'),
      rank: inputParams.get('rank'),
      rankRange: inputParams.get('rankRange'),
      target: inputParams.get('target'),
    },
    onCompleted: data => {
      const enchants = data.details.enchants;
      setImmutableEnchants(enchants);

      const dataLength = enchants.length;
      if (dataLength > 0 && enchants[0].value) {
        setOrderBy('disp_val');
        setOrder('desc');
      }

      if (data.details.effectName) {
        setEffectName(data.details.effectName);
      }
      setPage(0);
    },
    onError: error => {
      console.error('Error fetching data:', error);
    },
  });
  return {
    loading,
  };
};
