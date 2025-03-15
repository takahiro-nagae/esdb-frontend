import { createSearchParams, useNavigate } from 'react-router-dom';
import useSWR from 'swr';

import { useEffectStore } from '../store/useEffectStore';
import { useEnchantNameStore } from '../store/useEnchantNameStore';
import { usePositionStore } from '../store/usePositionStore';
import { useRankStore } from '../store/useRankStore';
import { useTargetStore } from '../store/useTargetStore';

import { CACHE_TIME_24H } from '@/const/cache';
import { fetchInitData } from '@/repositories/form/fetchInitData';

const INIT_DATA_KEY = 'form/init-data';

export const useSearchForm = () => {
  const { enchantName } = useEnchantNameStore();
  const {
    selected: selectedEffect,
    value: effectValue,
    range: effectRange,
    setEffects,
  } = useEffectStore();
  const { position } = usePositionStore();

  const { setRanks, selected: selectedRank, range: rankRange } = useRankStore();
  const { setTargets, selected: selectedTarget } = useTargetStore();

  const navigate = useNavigate();

  useSWR(
    INIT_DATA_KEY,
    async () => {
      const result = await fetchInitData();
      setEffects(result.effect);
      setRanks(result.rank);
      setTargets(result.target);
      return result;
    },
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      dedupingInterval: CACHE_TIME_24H,
    },
  );

  const handleSubmit = () => {
    const params = new URLSearchParams();
    params.append('enchantName', enchantName);
    params.append('effect', selectedEffect);
    params.append('effectVal', effectValue);
    params.append('range', effectRange);
    params.append('position', position);
    params.append('rank', selectedRank);
    params.append('rankRange', rankRange);
    params.append('target', selectedTarget);

    navigate({
      pathname: '/detail',
      search: `?${createSearchParams(params)}`,
    });
  };

  return {
    handleSubmit,
  };
};
