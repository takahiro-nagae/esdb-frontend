import { useEffect, useRef, useState, useCallback } from 'react';
import { isBrowser } from 'react-device-detect';

import { positionName } from '../../../functions/positionFunction';

import { useEnchantStore } from '@/features/Search/state/useEnchantStore';
import { usePcLayoutStore } from '@/features/Search/state/usePcLayoutStore';

export const useSearchFilter = () => {
  const { immutableEnchants, setEnchants } = useEnchantStore();
  const { setPage } = usePcLayoutStore();
  const [searchWord, setSearchWord] = useState('');
  const isFirstRender = useRef(true);

  const filterEnchantData = useCallback(() => {
    const listData = immutableEnchants.filter(enchant => {
      // 検索用に各値を設定
      const enchant_name: string = enchant.enchant_name;
      const enchant_name_2: string = enchant.enchant_name_2;
      const enchant_name_en: string = enchant.enchant_name_en;
      const position: string = positionName(enchant.position_id);
      const rank: string = enchant.rank;
      const target_name: string = enchant.target_name;
      const effect_name: string = enchant.effect_name;
      const route_name: string = enchant.route_name ? enchant.route_name : '';

      return (
        enchant_name.match(searchWord) ||
        enchant_name_2.match(searchWord) ||
        enchant_name_en.match(searchWord) ||
        position.match(searchWord) ||
        rank.match(searchWord) ||
        target_name.match(searchWord) ||
        effect_name.match(searchWord) ||
        route_name.match(searchWord)
      );
    });

    return listData;
  }, [searchWord]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const timer = setTimeout(() => {
      if (!searchWord) return;
      const filterList = filterEnchantData();
      setEnchants(filterList);
      if (isBrowser) {
        setPage(0);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchWord, filterEnchantData]);

  return { searchWord, setSearchWord };
};
