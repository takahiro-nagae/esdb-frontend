import { useParams } from 'react-router-dom';

import { Enchant } from '@/features/Search/state/useEnchantStore';
import { useGetEnchantDetailQuery } from '@/repositories/generated/graphql';

export const useDetailIndex = () => {
  const params = useParams();
  const enchantIdParam = params.enchant_id ?? '';

  const { data, loading } = useGetEnchantDetailQuery({
    variables: { id: enchantIdParam },
  });

  if (!data?.detail) {
    return { data: null, loading };
  }

  const enchant: Enchant = {
    id: data.detail.id,
    name: data.detail.name,
    nameEn: data.detail.nameEn,
    isInvalidTarget: false,
    isImp: data.detail.isImp,
    effects: data.detail.effects.map(effect => ({
      name: effect?.name ?? '',
      type: effect?.type ?? '',
    })),
    position: data.detail.position,
    positionName: data.detail.positionName,
    rank: data.detail.rank,
    rankSeq: 0,
    routes: data.detail.routes.filter(route => route !== null) as string[],
    target: data.detail.target,
    value: null,
  };

  return { data: enchant, loading };
};
