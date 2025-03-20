import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { GET_DETAIL } from '@/repositories/detail/query';
import { GetEnchantDetailQuery } from '@/repositories/generated/graphql';

export const useDetailIndex = () => {
  const params = useParams();
  const enchantIdParam = params.enchant_id ?? '';

  const { data, loading } = useQuery<GetEnchantDetailQuery>(GET_DETAIL, {
    variables: { id: enchantIdParam },
  });

  return { data: data?.detail, loading };
};
