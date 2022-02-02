import { Box, Collapse, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { useState } from "react";
import { IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import effectColor from './effectColor';
import { RankModal } from "./rankModal";
import positionColor from "./positionColor";


/**
 * SPの検索一覧
 * @param tableContent コンテント全体のCSS
 */
export const SearchListBodySp = (props: {tableContent: any}) => {
    /** オープン状態 */
    const [open, setOpen] = useState(false);

    /** 対象の見た目 */
    const target = css({
        color: '#fff',
        borderLeft: '4px solid #0886a3',
        paddingLeft: '16px'
    });

    const acodHead = css({
        backgroundColor: '#3C3B40',
        color: '#fff'
    });

    const accBody = css({
        backgroundColor: '#fff'
    });

    return(
        <>
            <TableRow css={props.tableContent}>
                {/* 名称 */}
                <TableCell>
                    <span>フラミンゴスレイヤー</span>
                </TableCell>
                {/* 位置 */}
                <TableCell css={positionColor('1')} >接頭(prefix)</TableCell>
                {/* ランク */}
                <TableCell>
                    <RankModal rank={"F"} />
                </TableCell>
                {/* 値 */}
                <TableCell>-4</TableCell>
                {/* スマホ用開閉ボタン */}
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
            </TableRow>
            {/* アコーディオン内 */}
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ paddingBottom: 10 }}>
                            <p css={target}>対象：全て</p>
                            <Table size="small" aria-label="purchases">
                                <TableRow>
                                    <TableCell css={acodHead}>効果</TableCell>
                                    <TableCell css={accBody}>
                                        <p css={effectColor('decrease')} >最大負傷率2~4%減少</p>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell css={acodHead}>入手先</TableCell>
                                    <TableCell css={accBody}>
                                        <p>
                                            ■フラミンゴスレイヤー ソルジャー ブレスレット<br/>　- レッドスケルトン(鎧)
                                        </p>
                                        <p>
                                            ■ES<br/>　- コッカースパニエルミニのアイテム収集
                                        </p>
                                    </TableCell>
                                </TableRow>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}