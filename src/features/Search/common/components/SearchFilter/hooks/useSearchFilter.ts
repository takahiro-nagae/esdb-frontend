import { useEffect, useState, useCallback } from 'react';
import { isBrowser } from 'react-device-detect';

import { useEnchantStore } from '@/features/Search/state/useEnchantStore';
import { usePcLayoutStore } from '@/features/Search/state/usePcLayoutStore';

export const useSearchFilter = () => {
  const { immutableEnchants, setEnchants } = useEnchantStore();
  const { setPage } = usePcLayoutStore();
  const [searchWord, setSearchWord] = useState('');

  const filterEnchantData = useCallback(() => {
    const trimmedSearchWord = searchWord.trim();
    if (trimmedSearchWord === '') return immutableEnchants;

    const listData = immutableEnchants.filter(enchant => {
      // 検索用に各値を設定
      const enchant_name: string = enchant.name;
      const enchant_name_en: string = enchant.nameEn;
      const position: string = enchant.positionName;
      const rank: string = enchant.rank;
      const target: string = enchant.target;
      const effect: string = enchant.effect.map(e => e?.name).join('');
      const route: string = enchant.route.filter(r => r !== null).join('');

      return (
        enchant_name.match(searchWord) ||
        enchant_name_en.match(searchWord) ||
        position.match(searchWord) ||
        rank.match(searchWord) ||
        target.match(searchWord) ||
        effect.match(searchWord) ||
        route.match(searchWord)
      );
    });

    return listData;
  }, [searchWord]);

  useEffect(() => {
    const timer = setTimeout(() => {
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
