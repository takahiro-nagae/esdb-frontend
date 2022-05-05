/** サードパーティーライブラリ */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { TableCell, TableRow } from "@material-ui/core";

/** ローカルライブラリ */
import { RankModal } from "../rank/rankModal";
import { positionColor, positionName } from "../positionFunction";
import { createEnchantName, createEnchantNameEn, subTitleStyle } from '../enchantNameFunction';
import { GroundButton } from '../ground/groundButton';
import { EffectList } from "../common/compornent/effectList";
import { RouteList } from "../common/compornent/routeList";
import {InvalidText} from "../common/compornent/invalidText";
import {ImpText} from "../common/compornent/impText";

/**
 * PCの検索一覧
 */
export const SearchListBody = (props: {enchant: any, valFlg: boolean}) => {
    /** コンテント各行の基本スタイル */
    const tableContent = css ({
        backgroundColor: '#3C3B40',
        'td': {
            color: '#fff'
        },
        'svg': {
            color: '#fff'
        }
    });

    return(
        <TableRow css={tableContent}>
            {/* 名称 */}
            <TableCell>
                <span>{createEnchantName(props.enchant.enchant_name, props.enchant.enchant_name_2)}</span>
                <InvalidText  invalidTargetFlg={props.enchant.invalid_target_flg} />
                <ImpText impFlg={ props.enchant.imp_flg } />
                <br />
                <small css={subTitleStyle}>{createEnchantNameEn(props.enchant.enchant_name_en, props.enchant.position_id)}</small>
            </TableCell>
            {/* 位置 */}
            <TableCell css={positionColor(props.enchant.position_id)} >{positionName(props.enchant.position_id)}</TableCell>
            {/* ランク */}
            <TableCell>
                <RankModal rank={props.enchant.rank} /><br />
                <GroundButton enchant_id={props.enchant.enchant_id} rank_ignore_flg={props.enchant.rank_ignore_flg} rank_seq={props.enchant.rank_seq} />
            </TableCell>
            {/* 対象 */}
            <TableCell>{props.enchant.target_name}</TableCell>
            {/* 値 */}
            {props.valFlg && <TableCell>{props.enchant.disp_val}</TableCell>}
            <TableCell>
                <EffectList
                    effectKbn={ props.enchant.effect_kbn }
                    effectName={ props.enchant.effect_name }
                />
            </TableCell>
            <TableCell>
                <RouteList
                    enchantId={ props.enchant.enchant_id }
                    routeName={ props.enchant.route_name }
                />
            </TableCell>
        </TableRow>
    );
}