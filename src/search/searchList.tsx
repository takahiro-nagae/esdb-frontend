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
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell/TableCell';

/** ローカルライブラリ */
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

    /** テーブルヘッダー */
    const tableHeader = css ({
        backgroundColor: '#1F2023',
        color: '#fff',
        border: 'none'
    });

    const spWidth = css ({
       width: '100%'
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
    /** 値表示のフラグ */
    const [valFlag, setValFlag] = useState(false);


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
                // 値の表示フラグ
                setValFlag(res.data[0].disp_val != undefined)
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
            <Grid container alignItems='center' direction='column'>
                <p css={hit}><span css={hitCount}>{count}</span>件ヒットしました</p>
                <MediaQuery query={minQuery}>
                    <Grid item xs={11}>
                        <Box sx={{ p: 1}}>
                            <TableContainer sx={{ maxHeight: 800 }}>
                                <Table stickyHeader aria-label="sticky table">
                                    {/* ヘッダー */}
                                    <TableHead>
                                         <TableRow>
                                            <TableCell css={tableHeader}>名称</TableCell>
                                            <TableCell css={tableHeader}>位置</TableCell>
                                            <TableCell css={tableHeader}>ランク</TableCell>
                                            <TableCell css={tableHeader}>対象</TableCell>
                                            { valFlag && <TableCell css={tableHeader}>値</TableCell> }
                                            <TableCell css={tableHeader}>効果</TableCell>
                                            <TableCell css={tableHeader}>入手先</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    {/* ボディ */}
                                    <TableBody>
                                        {enchantList.map(enchant => (
                                            <SearchListBody enchant={enchant} valFlg={valFlag} key={enchant.enchant_id} />
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Grid>
                </MediaQuery>
                <MediaQuery query={maxQuery}>
                    <Grid item xs={12} css={spWidth}>
                        <Box sx={{ p: 1}}>
                            {enchantList.map(enchant => (
                                <EnchantCard enchant={enchant} valFlag={valFlag} key={enchant.enchant_id} />
                            ))}
                        </Box>
                    </Grid>
                </MediaQuery>
            </Grid>
        </Box>
    );
}