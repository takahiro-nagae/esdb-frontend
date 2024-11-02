import { useEffect, useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';

import {
  FormEffectType,
  FormRankType,
  FormTargetType,
} from '@/repositories/form/_types';
import { fetchInitData } from '@/repositories/form/fetchInitData';

export const useSearchForm = () => {
  const [inputEnchantName, setInputEnchantName] = useState('');

  const [effectList, setEffectList] = useState<Array<FormEffectType>>([]);
  const [selectedEffect, setSelectedEffect] = useState('');
  const [inputEffectValue, setInputEffectValue] = useState('');
  const [effectRange, setEffectRange] = useState('0');

  const [position, setPosition] = useState('0');

  const [rankList, setRankList] = useState<Array<FormRankType>>([]);
  const [selectedRank, setSelectedRank] = useState('');
  const [rankRange, setRankRange] = useState('1');

  const [targetList, setTargetList] = useState<Array<FormTargetType>>([]);
  const [selectedTarget, setSelectedTarget] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const res = async () => await fetchInitData();
    res().then(res => {
      setEffectList(res.effect);
      setRankList(res.rank);
      setTargetList(res.target);
    });
  }, []);

  const handleSubmit = () => {
    const params = new URLSearchParams();
    params.append('enchantName', inputEnchantName);
    params.append('effect', selectedEffect);
    params.append('effectVal', inputEffectValue);
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
    enchantName: {
      inputEnchantName,
      setInputEnchantName,
    },
    rank: {
      rankList,
      dropdown: {
        selectedRank,
        setSelectedRank,
      },
      range: {
        rankRange,
        setRankRange,
      },
    },
    effect: {
      effectList,
      dropdown: {
        selectedEffect,
        setSelectedEffect,
      },
      input: {
        inputEffectValue,
        setInputEffectValue,
      },
      range: {
        effectRange,
        setEffectRange,
      },
    },
    position: {
      position,
      setPosition,
    },
    target: {
      targetList,
      selectedTarget,
      setSelectedTarget,
    },
  };
};
