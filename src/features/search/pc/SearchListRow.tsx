/** @jsxImportSource @emotion/react */
import { TableCell, TableRow } from "@material-ui/core";

import { RankModal } from "../common/component/Rank/Modal/RankModal";
import { positionColor, positionName } from "../common/function/positionFunction";
import { createEnchantName, createEnchantNameEn, subTitleStyle } from '../common/function/enchantNameFunction';
import { EffectList } from "../common/component/EffectList/EffectList";
import { RouteList } from "../common/component/RouteList/RouteList";
import { InvalidText } from "../common/component/ImvalidText/InvalidText";
import { ImpText } from "../common/component/ImpText/ImpText";
import { EnchantData } from "../common/interface/enchantData";
import { tableContent } from "./style/SearchListRowStyle";
import { DetailModal } from "../common/component/Detail/Modal/DetailModal";

/**
 * PCの検索一覧
 * @param props { EnchantData }
 * @returns SearchListRow { JSX.Element }
 */
export const SearchListRow = (props: { enchant: EnchantData }) => {
    const omtCount = 3;
    const routeNames = props.enchant.route_name ? props.enchant.route_name.split('@') : [];

    return (
        <TableRow css={tableContent}>
            <TableCell>
                <span data-testid='enchantName'>
                    {createEnchantName(props.enchant.enchant_name, props.enchant.enchant_name_2)}
                </span>
                <InvalidText invalidTargetFlg={props.enchant.invalid_target_flg}/>
                <ImpText impFlg={props.enchant.imp_flg}/>
                <br/>
                <small css={subTitleStyle} data-testid='enchantNameEn'>
                    {createEnchantNameEn(props.enchant.enchant_name_en, props.enchant.position_id)}
                </small>
            </TableCell>
            <TableCell css={positionColor(props.enchant.position_id)}>
                {positionName(props.enchant.position_id)}
            </TableCell>
            <TableCell>
                <RankModal rank={props.enchant.rank}/>
            </TableCell>
            <TableCell>{props.enchant.target_name}</TableCell>
            {
                props.enchant.disp_val &&
                <TableCell data-testid='dispVal'>{props.enchant.disp_val}</TableCell>
            }
            <TableCell>
                <EffectList
                    effectKbn={props.enchant.effect_kbn}
                    effectName={props.enchant.effect_name}
                />
            </TableCell>
            <TableCell>
                <RouteList
                    routeNames={ routeNames }
                    omtCount={omtCount}
                />
                <DetailModal
                    count={routeNames.length - omtCount}
                    data-testid='routeModal'
                    enchant={props.enchant}
                />
            </TableCell>
        </TableRow>
    );
};