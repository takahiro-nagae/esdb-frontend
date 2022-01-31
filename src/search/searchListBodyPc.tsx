import { TableBody, TableCell, TableRow } from "@material-ui/core";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

/**
 * PCの検索一覧
 * @param tableContent コンテント全体のCSS
 */
export const SearchListBodyPc = (props:{tableContent: any}) => {
    return(
        <TableRow css={props.tableContent}>
            <TableCell>1</TableCell>
            <TableCell>フラミンゴスレイヤー</TableCell>
            <TableCell>接頭</TableCell>
            <TableCell>F</TableCell>
            <TableCell>全て</TableCell>
            <TableCell>最大負傷率2~4%減少</TableCell>
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