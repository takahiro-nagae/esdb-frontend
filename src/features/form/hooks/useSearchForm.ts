import { SubmitHandler, useForm, SubmitErrorHandler } from 'react-hook-form';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchInitData } from '@/repositories/form/fetchInitData';
import {
  FormEffectType,
  FormRankType,
  FormTargetType,
} from '@/repositories/form/_types';
import { FormType } from '../common/type/FormType';

export const useSearchForm = () => {
  const [effectList, setEffectList] = useState<Array<FormEffectType>>([]);
  const [position, setPosition] = useState('0');
  const [rankList, setRankList] = useState<Array<FormRankType>>([]);
  const [rankRange, setRankRange] = useState('1');
  const [targetList, setTargetList] = useState<Array<FormTargetType>>([]);

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<FormType>({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchInitData();
      setEffectList(res.effect);
      setRankList(res.rank);
      setTargetList(res.target);
    };

    fetchData();
  }, []);

  /** フォームの送信処理ハンドラ */
  const handleOnSubmit: SubmitHandler<FormType> = values => {
    values.rankRange = rankRange;
    values.position = position;

    const params = new URLSearchParams();
    params.append('enchantName', values.enchantName);
    params.append('effect', values.effect);
    params.append('effectVal', values.effectVal);
    params.append('range', values.range);
    params.append('position', values.position);
    params.append('rank', values.rank);
    params.append('rankRange', values.rankRange);
    params.append('target', values.target);

    navigate({
      pathname: '/detail',
      search: `?${createSearchParams(params)}`,
    });
  };

  /** フォームのエラーハンドラ */
  const handleOnError: SubmitErrorHandler<FormType> = errors => {
    console.log(errors);
  };

  return {
    register,
    handleSubmit: handleSubmit(handleOnSubmit, handleOnError),
    effectList,
    position,
    setPosition,
    rankList,
    rankRange,
    setRankRange,
    targetList,
  };
};
