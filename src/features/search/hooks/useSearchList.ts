import { EnchantData } from '@/repositories/search/_types';
import { useEffect, useState } from 'react';
import { HeadData } from '../pc/type/HeadData';
import { Order } from '../pc/type/Order';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchEnchantData } from '@/repositories/search/fetchSearchEnchantData';

export const useSearchList = (isFreeSearch: boolean) => {
  const [enchantList, setEnchantList] = useState<Array<EnchantData>>([]);
  const [rowData, setRowData] = useState<Array<EnchantData>>([]);
  const [count, setCount] = useState(0);
  const [dispCount, setDispCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof HeadData>('enchant_id');
  const [page, setPage] = useState(0);
  const [effectName, setEffectName] = useState('');

  const [inputParams] = useSearchParams();
  const path = isFreeSearch ? '/search' : '/detail';

  useEffect(() => {
    const res = async () => fetchSearchEnchantData(path, inputParams);

    res().then(res => {
      const enchantList = res.enchant_list;
      setEnchantList(enchantList);
      setRowData(enchantList);

      const dataLength = enchantList.length;
      setCount(dataLength);
      setDispCount(dataLength);
      if (dataLength > 0) {
        setOrderBy('disp_val');
        setOrder('desc');
      }

      res.effect_name && setEffectName(res.effect_name);

      setIsLoading(true);
    });
  }, [inputParams]);

  return {
    isLoading,
    enchantList: {
      enchantList,
      setEnchantList,
      rowData,
      setRowData,
    },
    effectName,
    count: {
      count,
      setCount,
      dispCount,
      setDispCount,
    },
    order: {
      order,
      setOrder,
      orderBy,
      setOrderBy,
    },
    page: {
      page,
      setPage,
    },
  };
};
