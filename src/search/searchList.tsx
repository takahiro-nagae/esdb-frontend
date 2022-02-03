import { Box, Grid, Paper } from '@material-ui/core';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import MediaQuery from "react-responsive";
import { SearchListHeadPc } from './searchListHeadPc';
import { SearchListBodyPc } from './searchListBodyPc';
import { EnchantCard } from './enchantCard';

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
        },
        'svg': {
            color: '#fff'
        }
    });

    /** ブレークポイントクエリ */
    const minQuery = "(min-width:" + props.breakPoint + "px)";
    const maxQuery = "(max-width:" + props.breakPoint + "px)";

    return(
        <Box sx={{ mt: 3}}>
            <Grid container justifyContent="center" css={props.maxWidth}>
                <p css={hit}><span css={hitCount}>933</span>件ヒットしました</p>
                <Grid item xs={12}>
                    <Box sx={{ p: 1}}>
                        <MediaQuery query={minQuery}>
                            <TableContainer sx={{ maxHeight: 440 }}>
                                <Table stickyHeader aria-label="sticky table">
                                    {/* ヘッダー */}
                                    <TableHead>
                                         <SearchListHeadPc tableHeader={tableHeader} />
                                    </TableHead>
                                    {/* ボディ */}
                                    <TableBody>
                                        {/* PC */}
                                        <SearchListBodyPc tableContent={tableContent} />
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </MediaQuery>
                        <MediaQuery query={maxQuery}>
                            <EnchantCard />
                        </MediaQuery>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}