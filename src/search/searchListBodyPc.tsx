import { TableCell, TableRow } from "@material-ui/core";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import effectColor from "./effectColor";
import { RankModal } from "./rankModal";

/**
 * PCの検索一覧
 * @param tableContent コンテント全体のCSS
 */
export const SearchListBodyPc = (props:{tableContent: any}) => {
    return(
        <TableRow css={props.tableContent}>
            {/* No */}
            <TableCell>1</TableCell>
            {/* 名称 */}
            <TableCell>フラミンゴスレイヤー</TableCell>
            {/* 位置 */}
            <TableCell>接頭</TableCell>
            {/* ランク */}
            <TableCell>
                <RankModal rank={"F"} />
            </TableCell>
            {/* 対象 */}
            <TableCell>全て</TableCell>
            {/* 効果 */}
            <TableCell><p css={effectColor('decrease')} >最大負傷率2~4%減少</p></TableCell>
            {/* 入手先 */}
            <TableCell>
                <p>
                    ■フラミンゴスレイヤー ソルジャー ブレスレット<br/>　- レッドスケルトン(鎧)
                </p>
                <p>
                    ■ES<br/>　- コッカースパニエルミニのアイテム収集
                </p>
            </TableCell>
        </TableRow>
    );
}