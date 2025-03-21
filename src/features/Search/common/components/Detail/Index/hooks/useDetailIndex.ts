import { useParams } from 'react-router-dom';

import { useGetEnchantDetailQuery } from '@/repositories/generated/graphql';

export const useDetailIndex = () => {
  const params = useParams();
  const enchantIdParam = params.enchant_id ?? '';

  const { data, loading } = useGetEnchantDetailQuery({
    variables: { id: enchantIdParam },
  });

  return { data: data?.detail, loading };
};
