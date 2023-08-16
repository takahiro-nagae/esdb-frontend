/* eslint @typescript-eslint/no-explicit-any: 0 */
import { positionName } from "../function/positionFunction";
import { Dispatch, SetStateAction, useState } from "react";
import { Grid } from "@material-ui/core";
import { GridSize } from "@material-ui/core/Grid/Grid";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { pcQueryProperty, spQueryProperty } from "../../../common/theme/layout";
import { EnchantData } from "../interface/enchantData";

export const SearchFilter = (props: {
    enchantList: Array<EnchantData>,
    setCount: Dispatch<SetStateAction<number>>,
    setRowData: any,
    setPage: Dispatch<SetStateAction<number>>,
    xs: GridSize,
}) => {

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
        [spQueryProperty]: {
            height: '56px',
            marginTop: '-3px',
            top: '56px',
        },
        [pcQueryProperty]: {
            height: '44px',
            top: '64px',
        },
    });

    /** 検索インプットのスタイル */
    const freeSearchInputStyle = css({
        backgroundColor: '#191919',
        border: '1px solid #424242',
        color: '#fff',
        height: '32px',
        paddingLeft: '8px',
        [spQueryProperty]: {
            width: '95%',
        },
        [pcQueryProperty]: {
            width: '99%',
        },
    });

    /** 検索ワード */
    const [ searchWord, setSearchWord ] = useState('');

    /**
     * フィルターロジック
     */
    function searchItems(value: any) {
        setSearchWord(value);
        const listData = props.enchantList.filter((enchant) => {
            // 検索用に各値を設定
            const enchant_name: string = enchant.enchant_name;
            const enchant_name_2: string = enchant.enchant_name_2;
            const enchant_name_en: string = enchant.enchant_name_en;
            const position: string = positionName(enchant.position_id);
            const rank: string = enchant.rank;
            const target_name: string = enchant.target_name;
            const effect_name: string = enchant.effect_name;
            const route_name: string = enchant.route_name ? enchant.route_name : '';

            return enchant_name.match(value)
                || enchant_name_2.match(value)
                || enchant_name_en.match(value)
                || position.match(value)
                || rank.match(value)
                || target_name.match(value)
                || effect_name.match(value)
                || route_name.match(value);
        });

        // 検索用のデータ
        props.setRowData(listData);
        // 件数
        props.setCount(listData.length);
        // ページ初期化
        props.setPage(0);
    }

    return (
        <Grid item xs={props.xs} css={freeSearchBoxStyle}>
            <input css={freeSearchInputStyle} placeholder='絞り込む' value={searchWord}
                   onChange={(e) => searchItems(e.target.value)}/>
        </Grid>
    );
};