import { gql, useQuery } from '@apollo/client';
import { createSearchParams, useNavigate } from 'react-router-dom';

import { useEffectStore } from '../store/useEffectStore';
import { useEnchantNameStore } from '../store/useEnchantNameStore';
import { usePositionStore } from '../store/usePositionStore';
import { useRankStore } from '../store/useRankStore';
import { useTargetStore } from '../store/useTargetStore';

import { GetFormQuery } from '@/generated/graphql';
import { GET_FORM } from '@/repositories/form/query';

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

  const { loading } = useQuery(GET_FORM, {
    onCompleted: (data: GetFormQuery) => {
      if (data.form) {
        setEffects(data.form.effects);
        setRanks(data.form.ranks);
        setTargets(data.form.targets);
      }
    },
    onError: error => {
      console.error('Error fetching form data:', error);
    },
  });

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
    loading,
    handleSubmit,
  };
};
