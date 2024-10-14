import { EnchantDataDetail } from '@/repositories/search/_types';
import { getEnchantDetailData } from '@/repositories/search/fetchEnchantDetailData';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useDetailIndex = () => {
  const params = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [enchantData, setEnchantData] = useState<EnchantDataDetail>();

  useEffect(() => {
    const enchantIdParam = params.enchant_id ? params.enchant_id : '';
    getEnchantDetailData(enchantIdParam).then(res => {
      setEnchantData(res);
      setIsLoading(true);
    });
  }, []);

  return { enchantData, isLoading };
};
