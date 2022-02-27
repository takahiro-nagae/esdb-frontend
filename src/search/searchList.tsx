/** 標準ライブラリ */
import { useEffect, useState } from 'react';
import axios from 'axios';

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
    // state
    // ********************
    /** エンチャント一覧 */
    const [enchantList, setEnchantList] = useState(Array(0));
    /** 件数 */
    const [count, setcount] = useState(0);


    // ********************
    // 初期表示
    // ********************
    useEffect(() => {

        const requestParams = '?enchantName=' + searchParams.get('enchantName') + '&effect=' + searchParams.get('effect') + '&effectVal=' + searchParams.get('effectVal')
                            + '&range=' + searchParams.get('range') + '&rank=' + searchParams.get('rank') + '&target=' + searchParams.get('target')
                            + '&position=' + searchParams.get('position') + '&rankRange=' + searchParams.get('rankRange') ;

        axios.get('https://wd5zeazzd9.execute-api.ap-northeast-1.amazonaws.com/Prod/detail' + requestParams)
        .then((res) => {
            if(res.data != undefined) {
                // 効果
                setEnchantList(res.data);
                // 件数
                setcount(res.data.length);
            }
        }).catch((error) => {
            console.log(error)
        });
    }, []);

    /** ブレークポイントクエリ */
    const minQuery = "(min-width:" + props.breakPoint + "px)";
    const maxQuery = "(max-width:" + props.breakPoint + "px)";

    return(
        <Box sx={{ mt: 3}}>
            <Grid container justifyContent="center" css={props.maxWidth}>
                <p css={hit}><span css={hitCount}>{count}</span>件ヒットしました</p>
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
                                        {enchantList.map(enchant => (
                                            <SearchListBody enchant={enchant} key={enchant.enchant_id} />
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </MediaQuery>
                        <MediaQuery query={maxQuery}>
                            {enchantList.map(enchant => (
                                <EnchantCard enchant={enchant} key={enchant.enchant_id} />
                            ))}
                        </MediaQuery>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}