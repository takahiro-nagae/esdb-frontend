/** サードパーティーライブラリ */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { TableCell, TableRow } from "@material-ui/core";

/** ローカルライブラリ */
import effectColor from "./effectColor";
import { RankModal } from "./rankModal";
import positionColor from "./positionColor";

/**
 * PCの検索一覧
 */
export const SearchListBody = (props: {enchant: any}) => {
    /** コンテント各行の基本スタイル */
    const tableContent = css ({
        backgroundColor: '#33363b',
        '&:nth-of-type(even)': {
            backgroundColor: '#383B40'
        },
        'td': {
            color: '#fff'
        },
        'svg': {
            color: '#fff'
        }
    });

    /** 効果区分を配列化 */
    const effectKbnArray:Array<any> = props.enchant.effect_kbn && props.enchant.effect_kbn.split('@');
    /** 効果名を配列化 */
    const effectNameArray:Array<any> = props.enchant.effect_name && props.enchant.effect_name.split('@');
    /** 入手先を配列化 */
    const routeNameArray:Array<any> = props.enchant.route_name && props.enchant.route_name.split('@');

    return(
        <TableRow css={tableContent}>
            {/* 名称 */}
            <TableCell>
                <span>{props.enchant.enchant_name}</span><br />
                <small>{props.enchant.enchant_name_en}</small>
            </TableCell>
            {/* 位置 */}
            <TableCell css={positionColor(props.enchant.position_id)} >接頭(prefix)</TableCell>
            {/* ランク */}
            <TableCell>
                <RankModal rank={props.enchant.rank} />
            </TableCell>
            {/* 対象 */}
            <TableCell>{props.enchant.target_name}</TableCell>
            {/* 値 */}
            <TableCell>-4</TableCell>
            {/* 効果 */}
            <TableCell>
                { effectKbnArray && effectKbnArray.map((effectKbn, index) =>
                    <p css={effectColor(effectKbn)} key={index} >{effectNameArray[index]}</p>
                )}
            </TableCell>
            {/* 入手先 */}
            <TableCell>
                {routeNameArray && routeNameArray.map((route, index) => (
                    <p dangerouslySetInnerHTML={{ __html: route }} key={index}></p>
                ))}
            </TableCell>
        </TableRow>
    );
}