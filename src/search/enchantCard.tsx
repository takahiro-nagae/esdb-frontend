/** 標準ライブラリ */
import { useState } from "react";

/** サードパーティーライブラリ */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, Collapse, Table, TableCell, TableRow } from "@material-ui/core";
import { IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

/** ローカルライブラリ */
import positionColor from './positionColor';
import { RankModal } from './rankModal';
import effectColor from './effectColor';

/**
 * エンチャントカード
 */
export const EnchantCard = () => {

    /** オープン状態 */
    const [open, setOpen] = useState(false);

    /** インライン */
    const inline = css({
        display: 'inline',
        color: '#fff',
        marginLeft: '16px',
        marginRight: '-24px',
        verticalAlign: 'middle'
    });

    /**タイトル（エンチャント名） */
    const title = css({
        color: '#fff',
        fontWeight: 'bold'
    });

    /** サブタイトル（エンチャント英名） */
    const subtitle = css({
        color: '#aaa'
    });

    /** 対象の見た目 */
    const target = css({
        color: '#fff',
        borderLeft: '4px solid #0886a3',
        paddingLeft: '16px'
    });

    /** 値 */
    const value = css({
        color: '#fff'
    });

    /** アコーディオンのヘッダー */
    const acodHead = css({
        backgroundColor: '#2f2f2f',
        color: '#fff'
    });

    /** アコーディオンのボディ */
    const accBody = css({
        backgroundColor: '#fff'
    });

    /** アコーディオンのアイコン */
    const accIcon = css({
        color: '#fff'
    });

    return(
        <Card sx={{ minWidth: 275,
                    backgroundColor: '#3C3B40',
                    padding: '8px',
                    boxSizing: 'border-box' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Box>
                        {/* エンチャント名 */}
                        <Typography variant="subtitle1" css={title} >
                            フラミンゴスレイヤー
                        </Typography>
                        {/* エンチャント英名 */}
                        <Typography variant="subtitle2" css={subtitle}>
                            Flamingo Slayer's
                        </Typography>
                        <div>
                            {/* 位置 */}
                            <Typography style={{display: 'inline'}}
                                variant="subtitle2" css={positionColor('1')} >接頭(prefix)</Typography>
                            <Typography variant='body1' css={inline} ><small>ランク</small></Typography>
                            {/* ランク */}
                            <RankModal rank={"F"} />
                        </div>
                    </Box>
                    <Box>
                        <p css={value}>-4</p>
                    </Box>
                    <Box>
                        <IconButton css={accIcon} aria-label="expand row" onClick={() => setOpen(!open)}>
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </Box>
                </Box>
                {/* アコーディオン内コンテンツ */}
                <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ paddingBottom: 10 }}>
                            {/* 対象 */}
                            <p css={target}>対象：全て</p>
                            <Table size="small" aria-label="purchases">
                                {/* 効果 */}
                                <TableRow>
                                    <TableCell css={acodHead}>効果</TableCell>
                                    <TableCell css={accBody}>
                                        <p css={effectColor('decrease')} >最大負傷率2~4%減少</p>
                                    </TableCell>
                                </TableRow>
                                {/* 入手先 */}
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
        </Card>
    );
}