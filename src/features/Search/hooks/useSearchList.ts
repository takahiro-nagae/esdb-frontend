import { useSearchParams } from 'react-router-dom';

import { useEnchantStore } from '@/features/Search/state/useEnchantStore';
import { usePcLayoutStore } from '@/features/Search/state/usePcLayoutStore';
import {
  GetEnchantDetailsQuery,
  SearchEnchantQuery,
  useGetEnchantDetailsQuery,
  useSearchEnchantQuery,
} from '@/repositories/generated/graphql';

const handleError = (error: unknown) => {
  console.error('Error fetching data:', error);
};

const convertEnchant = (
  enchant:
    | SearchEnchantQuery['search'][number]
    | GetEnchantDetailsQuery['details']['enchants'][number],
) => {
  const isInvalidTarget =
    'isInvalidTarget' in enchant ? enchant.isInvalidTarget : false;
  const invalidTargetName =
    'invalidTargetName' in enchant ? enchant.invalidTargetName : '';
  const isImp = 'isImp' in enchant ? enchant.isImp : true;
  const impName = 'impName' in enchant ? enchant.impName : '';
  const effect = enchant.effect
    ? enchant.effect.map(e => ({ name: e?.name ?? '', type: e?.type ?? '' }))
    : [];
  const route = enchant.route.filter(r => r !== null) as string[];

  const value = 'value' in enchant ? enchant.value : null;
  return {
    id: enchant.id,
    name: enchant.name,
    nameEn: enchant.nameEn,
    isInvalidTarget,
    invalidTargetName,
    isImp,
    impName,
    effect,
    position: enchant.position,
    positionName: enchant.positionName,
    rank: enchant.rank,
    rankSeq: enchant.rankSeq,
    route,
    target: enchant.target,
    value,
  };
};

const useFreeSearch = () => {
  const { setImmutableEnchants } = useEnchantStore();
  const { setPage } = usePcLayoutStore();
  const [inputParams] = useSearchParams();

  return useSearchEnchantQuery({
    variables: {
      keyword: inputParams.get('search') ?? '',
    },
    onCompleted: data => {
      setImmutableEnchants(data.search.map(convertEnchant));
      setPage(0);
    },
    onError: handleError,
  });
};

const useDetailedSearch = () => {
  const { setImmutableEnchants, setEffectName } = useEnchantStore();
  const { setOrderBy, setOrder, setPage } = usePcLayoutStore();
  const [inputParams] = useSearchParams();

  return useGetEnchantDetailsQuery({
    variables: {
      enchantName: inputParams.get('enchantName') ?? '',
      effect: inputParams.get('effect') ?? '',
      effectVal: inputParams.get('effectVal') ?? '',
      rangeVal: inputParams.get('range') ?? '',
      position: inputParams.get('position') ?? '',
      rank: inputParams.get('rank') ?? '',
      rankRange: inputParams.get('rankRange') ?? '',
      target: inputParams.get('target') ?? '',
    },
    onCompleted: data => {
      const enchants = data.details.enchants;
      setImmutableEnchants(enchants.map(convertEnchant));

      if (enchants.length > 0 && enchants[0].value) {
        setOrderBy('value');
        setOrder('desc');
      }

      if (data.details.effectName) {
        setEffectName(data.details.effectName);
      }
      setPage(0);
    },
    onError: handleError,
  });
};

export const useSearchList = (isFreeSearch: boolean) => {
  const { loading } = isFreeSearch ? useFreeSearch() : useDetailedSearch();
  return { loading };
};
