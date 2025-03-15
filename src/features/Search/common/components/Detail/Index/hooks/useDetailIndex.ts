import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { EnchantDataDetail } from '@/repositories/search/_types';
import { fetchEnchantDetailData } from '@/repositories/search/fetchEnchantDetailData';

export const useDetailIndex = () => {
  const params = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [enchantData, setEnchantData] = useState<EnchantDataDetail>();

  useEffect(() => {
    setIsLoading(true);
    const enchantIdParam = params.enchant_id ? params.enchant_id : '';
    fetchEnchantDetailData(enchantIdParam).then(res => {
      setEnchantData(res);
      setIsLoading(false);
    });
  }, []);

  return { enchantData, isLoading };
};
