/* eslint @typescript-eslint/no-explicit-any: 0 */
import { positionName } from "../function/positionFunction";
import { useEffect, useState } from "react";
import { isBrowser } from "react-device-detect";
import { Grid } from "@material-ui/core";
import { GridSize } from "@material-ui/core/Grid/Grid";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { usePageContext } from "../../context/usePageContext";
import { useEnchantContext } from "../../context/useEnchantContext";

export const SearchFilter = (props: {
    xs: GridSize,
}) => {

    const pageContext = usePageContext();
    const enchantContext = useEnchantContext();

    /** フリー検索の外枠 */
    const freeSearchBoxStyle = css({
        backgroundColor: '#1F2023',
        boxSizing: 'border-box',
        paddingRight: '8px',
        paddingTop: '8px',
        position: 'sticky',
        textAlign: 'right',
        width: '100%',
        zIndex: '3',
        height: isBrowser ? '44px' : '56px',
        top: isBrowser ? '64px' : '56px',
        marginTop: isBrowser ? '0' : '-3px',
    });

    /** 検索インプットのスタイル */
    const freeSearchInputStyle = css({
        backgroundColor: '#191919',
        border: '1px solid #424242',
        color: '#fff',
        height: '32px',
        paddingLeft: '8px',
        width: isBrowser ? '99%' : '95%',
    });

    /** 検索ワード */
    const [ searchWord, setSearchWord ] = useState('');

    /**
     * フィルターロジック
     */
    useEffect(() => {
        const timer = setTimeout(() => {
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

            // 検索用のデータ
            enchantContext.setRowData(listData);
            // 件数
            enchantContext.setCount(listData.length);
            // ページ初期化
            pageContext.setPage(0);
        }, 500);

        return () => clearTimeout(timer);
    }, [ searchWord ]);

    return (
        <Grid item xs={props.xs} css={freeSearchBoxStyle}>
            <input css={freeSearchInputStyle} placeholder='絞り込む' value={searchWord}
                   onChange={(e) => setSearchWord(e.target.value)}/>
        </Grid>
    );
};