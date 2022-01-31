import { Box, Grid, Paper } from '@material-ui/core';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import MediaQuery from "react-responsive";

/**
 * 検索結果一覧
 */
export const SearchList = (props: {maxWidth: any, breakPoint: number}) => {
    /** ヒットしました文字列 */
    const hit = css({
        fontWeight: 'bold',
        color: '#fff'
    });

    /** 件数文字列 */
    const hitCount = css({
        color: '#f00',
        fontSize: '18px'
    });

    /** テーブルヘッダー */
    const tableHeader = css ({
        backgroundColor: '#0854a3',
        color: '#fff',
        border: 'none'
    });

    /** コンテント各行の基本スタイル */
    const tableContent = css ({
        backgroundColor: '#2f2f2f',
        '&:nth-of-type(even)': {
            backgroundColor: '#383B40'
        },
        'td': {

            color: '#fff'
        }
    });

    /** ブレークポイントクエリ */
    const query = "(min-width:" + props.breakPoint + "px)";

    return(
        <Box sx={{ mt: 3}}>
            <Grid container justifyContent="center" css={props.maxWidth}>
                <p css={hit}><span css={hitCount}>933</span>件ヒットしました</p>
                <Grid item xs={12}>
                    <Box sx={{ p: 2}}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                            <Table stickyHeader aria-label="sticky table">
                                {/* ヘッダー */}
                                <TableHead>
                                    <TableRow>
                                        <TableCell css={tableHeader}>No.</TableCell>
                                        <TableCell css={tableHeader}>名称</TableCell>
                                        <TableCell css={tableHeader}>位置</TableCell>
                                        <TableCell css={tableHeader}>ランク</TableCell>
                                        <TableCell css={tableHeader}>対象</TableCell>
                                        <MediaQuery query={query}>
                                            <TableCell css={tableHeader}>効果</TableCell>
                                            <TableCell css={tableHeader}>入手先</TableCell>
                                        </MediaQuery>
                                    </TableRow>
                                </TableHead>
                                {/* ボディ */}
                                <TableBody>
                                    <TableRow css={tableContent}>
                                        <TableCell>1</TableCell>
                                        <TableCell>フラミンゴスレイヤー</TableCell>
                                        <TableCell>接頭</TableCell>
                                        <TableCell>F</TableCell>
                                        <TableCell>全て</TableCell>
                                        <MediaQuery query={query}>
                                            <TableCell>最大負傷率2~4%減少</TableCell>
                                            <TableCell>
                                                <p>
                                                    ■フラミンゴスレイヤー ソルジャー ブレスレット<br/>　- レッドスケルトン(鎧)
                                                </p>
                                                <p>
                                                    ■ES<br/>　- コッカースパニエルミニのアイテム収集
                                                </p>
                                            </TableCell>
                                        </MediaQuery>
                                    </TableRow>
                                    <TableRow css={tableContent}>
                                        <TableCell>1</TableCell>
                                        <TableCell>フラミンゴスレイヤー</TableCell>
                                        <TableCell>接頭</TableCell>
                                        <TableCell>F</TableCell>
                                        <TableCell>全て</TableCell>
                                        <MediaQuery query={query}>
                                            <TableCell>最大負傷率2~4%減少</TableCell>
                                            <TableCell>
                                                <p>
                                                    ■フラミンゴスレイヤー ソルジャー ブレスレット<br/>　- レッドスケルトン(鎧)
                                                </p>
                                                <p>
                                                    ■ES<br/>　- コッカースパニエルミニのアイテム収集
                                                </p>
                                            </TableCell>
                                        </MediaQuery>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}