/** 標準ライブラリ */
import { useState } from "react";

/** サードパーティーライブラリ */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, Collapse, Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import { IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

/** ローカルライブラリ */
import { positionColor, positionName } from './positionFunction';
import { RankModal } from './rankModal';
import effectColor from './effectColor';

/**
 * エンチャントカード
 */
export const EnchantCard = (props: {enchant: any}) => {

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

    const routeFont = css({
        color: '#333'
    });

    /** 効果区分を配列化 */
    const effectKbnArray:Array<any> = props.enchant.effect_kbn && props.enchant.effect_kbn.split('@');
    /** 効果名を配列化 */
    const effectNameArray:Array<any> = props.enchant.effect_name && props.enchant.effect_name.split('@');
    /** 入手先を配列化 */
    const routeNameArray:Array<any> = props.enchant.route_name && props.enchant.route_name.split('@');

    return(
        <Card sx={{ minWidth: 275,
                    backgroundColor: '#3C3B40',
                    padding: '8px',
                    margin: '8px',
                    boxSizing: 'border-box' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Box>
                        {/* エンチャント名 */}
                        <Typography variant="subtitle1" css={title} >
                            {props.enchant.enchant_name}
                        </Typography>
                        {/* エンチャント英名 */}
                        <Typography variant="subtitle2" css={subtitle}>
                            {props.enchant.enchant_name_en}
                        </Typography>
                        <div>
                            {/* 位置 */}
                            <Typography style={{display: 'inline'}}
                                variant="subtitle2" css={positionColor(props.enchant.position_id)} >{positionName(props.enchant.position_id)}</Typography>
                            <Typography variant='body1' css={inline} ><small>ランク</small></Typography>
                            {/* ランク */}
                            <RankModal rank={props.enchant.rank} />
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
                            <p css={target}>対象：{props.enchant.target_name}</p>
                            <Table size="small" aria-label="purchases">
                                <TableBody>
                                    {/* 効果 */}
                                    <TableRow>
                                        <TableCell css={acodHead}>効果</TableCell>
                                        <TableCell css={accBody}>
                                            { effectKbnArray && effectKbnArray.map((effectKbn, index) =>
                                                <p css={effectColor(effectKbn)} key={index} >{effectNameArray[index]}</p>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                    {/* 入手先 */}
                                    <TableRow>
                                        <TableCell css={acodHead}>入手先</TableCell>
                                        <TableCell css={accBody}>
                                            {routeNameArray && routeNameArray.map((route, index) => (
                                                <p dangerouslySetInnerHTML={{ __html: route }} key={index} css={routeFont}></p>
                                            ))}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                </Collapse>
        </Card>
    );
}