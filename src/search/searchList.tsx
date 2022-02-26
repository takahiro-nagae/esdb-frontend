/** 標準ライブラリ */
import { useEffect } from 'react';

/** サードパーティーライブラリ */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useSearchParams } from 'react-router-dom';
import MediaQuery from "react-responsive";
import { Box, Grid } from '@material-ui/core';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';

/** ローカルライブラリ */
import { SearchListHead } from './searchListHead';
import { SearchListBody } from './searchListBody';
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

    /** 遷移元からのデータ */
    const [searchParams] = useSearchParams();


    // ********************
    // 初期表示
    // ********************
    useEffect(() => {
        console.log(searchParams.get('rankRange'));
    }, []);

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
                                         <SearchListHead />
                                    </TableHead>
                                    {/* ボディ */}
                                    <TableBody>
                                        {/* PC */}
                                        <SearchListBody />
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