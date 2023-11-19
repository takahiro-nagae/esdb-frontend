import { useEffect, useRef } from 'react';
import { usePageContext } from '../../../../context/usePageContext';
import { useEnchantContext } from '../../../../context/useEnchantContext';
import { positionName } from '../../../function/positionFunction';

export const useSearchFilter = (searchWord: string) => {
    const pageContext = usePageContext();
    const enchantContext = useEnchantContext();
    const isFirstRender = useRef(true);

    useEffect(() => {
        console.log('useSearchFilter');
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        const timer = setTimeout(() => {
            const filterList = filterEnchantData();

            enchantContext.setRowData(filterList);
            enchantContext.setCount(filterList.length);
            pageContext.setPage(0);
        }, 500);

        return () => clearTimeout(timer);
    }, [ searchWord ]);

    const filterEnchantData = () => {
        const listData = enchantContext.enchantList.filter((enchant) => {
            // 検索用に各値を設定
            const enchant_name: string = enchant.enchant_name;
            const enchant_name_2: string = enchant.enchant_name_2;
            const enchant_name_en: string = enchant.enchant_name_en;
            const position: string = positionName(enchant.position_id);
            const rank: string = enchant.rank;
            const target_name: string = enchant.target_name;
            const effect_name: string = enchant.effect_name;
            const route_name: string = enchant.route_name ? enchant.route_name : '';

            return enchant_name.match(searchWord)
                || enchant_name_2.match(searchWord)
                || enchant_name_en.match(searchWord)
                || position.match(searchWord)
                || rank.match(searchWord)
                || target_name.match(searchWord)
                || effect_name.match(searchWord)
                || route_name.match(searchWord);
        });

        return listData;
    };
};