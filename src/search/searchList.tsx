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
import IconButton from '@mui/material/IconButton';
import { KeyboardDoubleArrowUp } from '@mui/icons-material';
import { animateScroll as scroll } from "react-scroll";

/** ローカルライブラリ */
import { SearchListBody } from './pc/searchListBody';
import { EnchantCard } from './enchantCard';
import { Order } from './pc/order';
import { HeadData } from './pc/headData';
import { SearchListHead } from './pc/searchListHead';
import { Pagination } from './pc/pagination';


/**
 * 検索結果一覧
 */
export const SearchList = (props: {maxWidth: any, breakPoint: number, freeSearchFlg: boolean}) => {

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

    /** スマホの横幅指定 */
    const dataWidth = css ({
       width: '100%'
    });

    /** ローディングや検索結果なしの表示 */
    const verticalCenter = css ({
        position: 'absolute',
        top: '50%'
    });

    /**  トップに戻るアイコンの設定 */
    const topIcon = css({
        position: 'fixed',
        right: '20px',
        color: '#fff',
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
    /** 並び順 */
    const [order, setOrder] = useState<Order>('asc');
    /** 並び替えのプロパティ */
    const [orderBy, setOrderBy] = useState<keyof HeadData>('enchant_id');
    /** ページ */
    const [page, setPage] = useState(0);
    /** 現在のページ */
    const [rowsPerPage, setRowsPerPage] = useState(30);

    function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
        if (b[orderBy] < a[orderBy]) {
          return -1;
        }
        if (b[orderBy] > a[orderBy]) {
          return 1;
        }
        return 0;
    }

    function getComparator<Key extends keyof any>(
        order: Order,
        orderBy: Key,
      ): (
        a: { [key in Key]: number | string },
        b: { [key in Key]: number | string },
      ) => number {
        return order === 'desc'
          ? (a, b) => descendingComparator(a, b, orderBy)
          : (a, b) => -descendingComparator(a, b, orderBy);
    }

    function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
        const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
        stabilizedThis.sort((a, b) => {
          const order = comparator(a[0], b[0]);
          if (order !== 0) {
            return order;
          }
          return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
      }

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof HeadData,
      ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    /** ページ変更 */
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    /** ページに表示する件数の変更 */
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    let path = '';
    let requestParams = '';

    if(props.freeSearchFlg) {
        path = '/search'
        requestParams = '?search=' + searchParams.get('search');
    } else {
        path = '/detail'
        requestParams = '?enchantName=' + searchParams.get('enchantName') + '&effect=' + searchParams.get('effect') + '&effectVal=' + searchParams.get('effectVal')
        + '&range=' + searchParams.get('range') + '&rank=' + searchParams.get('rank') + '&target=' + searchParams.get('target')
        + '&position=' + searchParams.get('position') + '&rankRange=' + searchParams.get('rankRange') ;
    }

    // ********************
    // 初期表示
    // ********************
    useEffect(() => {
        axios.get('https://wd5zeazzd9.execute-api.ap-northeast-1.amazonaws.com/Prod' + path + requestParams)
        .then((res) => {
            if(res.data != undefined) {
                // エンチャント一覧
                setEnchantList(res.data);
                // 件数
                setcount(res.data.length);
                // 値の表示フラグ
                if(res.data.length > 0) {
                    setValFlag(res.data[0].disp_val != undefined)
                    setOrderBy('disp_val')
                }
                // ローディング完了
                setLoadingFlag(true);
            }
        }).catch((error) => {
            console.log(error)
        });
    }, [requestParams]);

    const scrollToTop = () => {
        scroll.scrollToTop();
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
                                    <TableContainer>
                                        <Table>
                                            {/* ヘッダー */}
                                            <SearchListHead onRequestSort={handleRequestSort} order={order} orderBy={orderBy} valFlg={valFlag} />
                                            {/* ボディ */}
                                            <TableBody>
                                                {stableSort(enchantList, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(enchant => (
                                                    <SearchListBody enchant={enchant} valFlg={valFlag} key={enchant.enchant_id} />
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    <Pagination count={count} page={page} rowsPerPage={rowsPerPage} handleChangePage={handleChangePage} handleChangeRowsPerPage={handleChangeRowsPerPage} />
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
                            <IconButton color="secondary" aria-label="add an alarm" css={topIcon} onClick={scrollToTop} style={{ position: 'fixed', bottom: '48px', background: '#282828' }}>
                                <KeyboardDoubleArrowUp sx={{ fontSize: 40 }} />
                            </IconButton>
                        </MediaQuery>
                    </>
                }
            </Grid>
        </Box>
    );
}