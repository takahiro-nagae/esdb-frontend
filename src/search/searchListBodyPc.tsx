import { Tab, TableCell, TableRow } from "@material-ui/core";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import effectColor from "./effectColor";
import { RankModal } from "./rankModal";
import positionColor from "./positionColor";

/**
 * PCの検索一覧
 * @param tableContent コンテント全体のCSS
 */
export const SearchListBodyPc = () => {

    /** コンテント各行の基本スタイル */
    const tableContent = css ({
        backgroundColor: '#2f2f2f',
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

    return(
        <TableRow css={tableContent}>
            {/* 名称 */}
            <TableCell>
                <span>フラミンゴスレイヤー</span><br />
                <small>Flamingo Slayer's</small>
            </TableCell>
            {/* 位置 */}
            <TableCell css={positionColor('1')} >接頭(prefix)</TableCell>
            {/* ランク */}
            <TableCell>
                <RankModal rank={"F"} />
            </TableCell>
            {/* 対象 */}
            <TableCell>全て</TableCell>
            {/* 値 */}
            <TableCell>-4</TableCell>
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