/** 標準ライブラリ */
import { useEffect, useState } from 'react';

/** サードパーティーライブラリ */
/** @jsxImportSource @emotion/react */
import ReactLoading from 'react-loading';
import axios from 'axios';
import { css } from '@emotion/react';
import { useSearchParams } from 'react-router-dom';
import MediaQuery from "react-responsive";
import { Box, Grid } from '@material-ui/core';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell/TableCell';

/** ローカルライブラリ */
import { SearchListBody } from './searchListBody';
import { EnchantCard } from './enchantCard';
import { width } from '@mui/system';

/**
 * 検索結果一覧
 */
export const SearchList = (props: {maxWidth: any, breakPoint: number}) => {

    /** 検索結果の文字列 */
    const result = css({
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
        backgroundColor: '#282828',
        color: '#fff',
        border: 'none'
    });

    /** ページネーション */
    const pagenation = css ({
        backgroundColor: '#3C3B40',
        color: '#ccc',
        borderTop: '1px solid rgba(81, 81, 81, 1)',
        borderBottom: '1px solid rgba(81, 81, 81, 1)'
    });

    /** スマホの横幅指定 */
    const dataWidth = css ({
       width: '100%'
    });

    /** ローディングや検索結果なしの表示 */
    const verticalCenter = css ({
        position: 'absolute',
        top: '50%'
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
    /** ローディングフラグ */
    const [loadingFlag, setLoadingFlag] = useState(false);
    /** ページ */
    const [page, setPage] = useState(0);
    /** 現在のページ */
    const [rowsPerPage, setRowsPerPage] = useState(10);


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
                if(count > 0) {
                    setValFlag(res.data[0].disp_val != undefined)
                }
                // ローディング完了
                setLoadingFlag(true);
            }
        }).catch((error) => {
            console.log(error)
        });
    }, []);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    /** ブレークポイントクエリ */
    const minQuery = "(min-width:" + props.breakPoint + "px)";
    const maxQuery = "(max-width:" + props.breakPoint + "px)";

    return(
        <Box sx={{ mt: 3}}>
            <Grid container alignItems='center' direction='column' css={verticalCenter}>
                { !loadingFlag && <ReactLoading type="bubbles" /> }
                { loadingFlag && count == 0 &&
                    <>
                        <p css={result}>検索結果は0件です</p>
                    </>
                }
            </Grid>
            <Grid container alignItems='center' direction='column'>
                { loadingFlag && count > 0 &&
                    <>
                        <p css={result}><span css={hitCount}>{count}</span>件ヒットしました</p>
                        <MediaQuery query={minQuery}>
                            <Grid item xs={11} css={dataWidth}>
                                <Box sx={{ p: 1}}>
                                    <TableContainer sx={{ maxHeight: 640}}>
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
                                                {enchantList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(enchant => (
                                                    <SearchListBody enchant={enchant} valFlg={valFlag} key={enchant.enchant_id} />
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    <TablePagination
                                        rowsPerPageOptions={[10, 25, 100]}
                                        component="div"
                                        count={count}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        onPageChange={handleChangePage}
                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                        css={pagenation}
                                    />
                                </Box>
                            </Grid>
                        </MediaQuery>
                        <MediaQuery query={maxQuery}>
                            <Grid item xs={12} css={dataWidth}>
                                <Box sx={{ p: 1}}>
                                    {enchantList.map(enchant => (
                                        <EnchantCard enchant={enchant} valFlag={valFlag} key={enchant.enchant_id} />
                                    ))}
                                </Box>
                            </Grid>
                        </MediaQuery>
                    </>
                }
            </Grid>
        </Box>
    );
}