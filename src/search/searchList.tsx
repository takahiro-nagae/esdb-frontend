import { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import ReactLoading from 'react-loading';
import axios from 'axios';
import { css } from '@emotion/react';
import { useSearchParams } from 'react-router-dom';
import MediaQuery from "react-responsive";
import { Grid } from '@material-ui/core';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { Card, TableCell, TableRow } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import IconButton from '@mui/material/IconButton';
import { KeyboardDoubleArrowUp } from '@mui/icons-material';
import { animateScroll as scroll } from "react-scroll";
import { SearchListBody } from './pc/searchListBody';
import { EnchantCard } from './sp/enchantCard';
import { Order } from './pc/order';
import { HeadData } from './pc/headData';
import { SearchListHead } from './pc/searchListHead';
import { Pagination } from './pc/pagination';
import { InfeedAd } from '../adsense/infeedAd';
import { pcDisplayQuery, spDisplayQuery } from "../common/theme/layout";
import { SearchFilter } from "./common/compornent/searchFilter";
import { EnchantData } from "./common/interface/enchantData";

/**
 * 検索結果一覧のコンテナコンポーネント
 * @param props { boolean }
 * @returns SearchList { JSX.Element }
 */
export const SearchList = ( props: { freeSearchFlg: boolean } ) => {

    /** 検索結果の文字列 */
    const resultStyle = css( {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    } );

    /** 件数文字列 */
    const hitCountStyle = css( {
        color: '#f00',
        fontSize: '18px'
    } );

    /** スマホの横幅指定 */
    const dataWidthStyle = css( {
        width: '100%'
    } );

    /** ローディングや検索結果なしの表示 */
    const verticalCenterStyle = css( {
        position: 'absolute',
        top: '50%'
    } );

    /**  トップに戻るアイコンの設定 */
    const topIconStyle = css( {
        color: '#fff',
        right: '20px',
        position: 'fixed',
    } );

    /** コンテント各行の基本スタイル */
    const tableContentStyle = css( {
        backgroundColor: '#3C3B40',
    } );

    const tableDataStyle = css( {
        borderBottom: '1px solid rgba(81, 81, 81, 1)',
        paddingTop: '0'
    } )

    /** 遷移元からのデータ */
    const [ searchParams ] = useSearchParams();

    /** エンチャント一覧 */
    const [ enchantList, setEnchantList ] = useState<Array<EnchantData>>( [] );
    /** 表示する一覧 */
    const [ rowData, setRowData ] = useState( Array( 0 ) );
    /** 件数 */
    const [ count, setCount ] = useState( 0 );
    /** 表示用件数 */
    const [ dispCount, setDispCount ] = useState( 0 );
    /** 値表示のフラグ */
    const [ valFlag, setValFlag ] = useState( false );
    /** ローディングフラグ */
    const [ loadingFlag, setLoadingFlag ] = useState( false );
    /** 並び順 */
    const [ order, setOrder ] = useState<Order>( 'asc' );
    /** 並び替えのプロパティ */
    const [ orderBy, setOrderBy ] = useState<keyof HeadData>( 'enchant_id' );
    /** ページ */
    const [ page, setPage ] = useState( 0 );
    /** 現在のページ */
    const [ rowsPerPage, setRowsPerPage ] = useState( 30 );
    /** 検索ワード */
    const [ searchWord, setSearchWord ] = useState( '' );
    const [ effectName, setEffectName ] = useState( '' );

    function descendingComparator<T>( a: T, b: T, orderBy: keyof T ) {
        if ( b[orderBy] < a[orderBy] ) {
            return -1;
        }
        if ( b[orderBy] > a[orderBy] ) {
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
            ? ( a, b ) => descendingComparator( a, b, orderBy )
            : ( a, b ) => -descendingComparator( a, b, orderBy );
    }

    function stableSort<T>( array: readonly T[], comparator: ( a: T, b: T ) => number ) {
        const stabilizedThis = array.map( ( el, index ) => [ el, index ] as [ T, number ] );
        stabilizedThis.sort( ( a, b ) => {
            const order = comparator( a[0], b[0] );
            if ( order !== 0 ) {
                return order;
            }
            return a[1] - b[1];
        } );
        return stabilizedThis.map( ( el ) => el[0] );
    }

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof HeadData,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder( isAsc ? 'desc' : 'asc' );
        setOrderBy( property );
    };

    /** ページ変更 */
    const handleChangePage = ( event: unknown, newPage: number ) => {
        setPage( newPage );
    };

    /** ページに表示する件数の変更 */
    const handleChangeRowsPerPage = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        setRowsPerPage( +event.target.value );
        setPage( 0 );
    };

    /** 初期表示検索用パス */
    let path = '';
    /** 検索用パラメータ */
    let requestParams = '';

    if ( props.freeSearchFlg ) {
        path = '/search'
        requestParams = '?search=' + searchParams.get( 'search' );
    } else {
        path = '/detail'
        requestParams = '?enchantName=' + searchParams.get( 'enchantName' ) + '&effect=' + searchParams.get( 'effect' ) + '&effectVal=' + searchParams.get( 'effectVal' )
            + '&range=' + searchParams.get( 'range' ) + '&rank=' + searchParams.get( 'rank' ) + '&target=' + searchParams.get( 'target' )
            + '&position=' + searchParams.get( 'position' ) + '&rankRange=' + searchParams.get( 'rankRange' );
    }

    useEffect( () => {
        axios.get( 'https://wd5zeazzd9.execute-api.ap-northeast-1.amazonaws.com/Prod' + path + requestParams )
            .then( ( res ) => {
                if ( res.data != undefined ) {
                    // エンチャント一覧
                    setEnchantList( res.data.enchant_list );
                    setRowData( res.data.enchant_list );
                    // 件数
                    setCount( res.data.enchant_list.length );
                    // 表示用の件数
                    setDispCount( res.data.enchant_list.length );
                    // 値の表示フラグ
                    if ( res.data.enchant_list.length > 0 ) {
                        setValFlag( res.data.enchant_list[0].disp_val != undefined )
                        setOrderBy( 'disp_val' )
                        setOrder( 'desc' )
                    }
                    if ( res.data.effect_name != undefined ) {
                        setEffectName( res.data.effect_name.effect );
                    }
                    // ローディング完了
                    setLoadingFlag( true );
                }
            } ).catch( ( error ) => {
            console.log( error )
        } );
    }, [ requestParams ] );

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <MediaQuery query={ spDisplayQuery }>
                <SearchFilter
                    enchantList={ enchantList }
                    setCount={ setCount }
                    setPage={ setPage }
                    setRowData={ setRowData }
                    xs={ 12 }
                />
            </MediaQuery>
            <Box sx={ { mt: 3 } }>
                <Grid container alignItems='center' direction='column' css={ verticalCenterStyle }>
                    { !loadingFlag && <ReactLoading type="bubbles"/> }
                    { loadingFlag && dispCount == 0 &&
                        <>
                            <p css={ resultStyle }>検索結果は0件です</p>
                        </>
                    }
                </Grid>
                <Grid container alignItems='center' direction='column'>
                    { loadingFlag && dispCount > 0 &&
                        <>
                            <p css={ resultStyle }>
                                <span css={ hitCountStyle }>{ count }</span>件ヒットしました
                                { effectName != '' &&
                                    <>
                                        <br/>
                                        <span>値：{ effectName }</span>
                                    </>
                                }
                            </p>
                            <MediaQuery query={ pcDisplayQuery }>
                                <SearchFilter
                                    enchantList={ enchantList }
                                    setCount={ setCount }
                                    setPage={ setPage }
                                    setRowData={ setRowData }
                                    xs={ 11 }
                                />
                                <Grid item xs={ 11 } css={ dataWidthStyle }>
                                    <Box>
                                        <TableContainer style={ { overflow: 'visible' } }>
                                            <Table style={ { borderCollapse: 'separate' } }>
                                                {/* ヘッダー */ }
                                                <SearchListHead onRequestSort={ handleRequestSort } order={ order }
                                                                orderBy={ orderBy } valFlg={ valFlag }/>
                                                {/* ボディ */ }
                                                <TableBody>
                                                    { stableSort( rowData, getComparator( order, orderBy ) ).slice( page * rowsPerPage, page * rowsPerPage + rowsPerPage ).map( ( enchant, index ) => (
                                                        <>
                                                            { index != 0 && index % 5 == 0 &&
                                                                <TableRow css={ tableContentStyle } key={ index }>
                                                                    <TableCell colSpan={ valFlag ? 7 : 6 }
                                                                               css={ tableDataStyle }>
                                                                        <InfeedAd/>
                                                                    </TableCell>
                                                                </TableRow>
                                                            }
                                                            <SearchListBody enchant={ enchant } valFlg={ valFlag }
                                                                            key={ enchant.enchant_id }/>
                                                            { index == rowData.length - 1 &&
                                                                <TableRow css={ tableContentStyle } key={ 'lastPc' }>
                                                                    <TableCell colSpan={ valFlag ? 7 : 6 }
                                                                               css={ tableDataStyle }>
                                                                        <InfeedAd/>
                                                                    </TableCell>
                                                                </TableRow>
                                                            }
                                                        </>
                                                    ) ) }
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                        <Pagination count={ count } page={ page } rowsPerPage={ rowsPerPage }
                                                    handleChangePage={ handleChangePage }
                                                    handleChangeRowsPerPage={ handleChangeRowsPerPage }/>
                                    </Box>
                                </Grid>
                            </MediaQuery>
                            <MediaQuery query={ spDisplayQuery }>
                                <Grid item xs={ 12 } css={ dataWidthStyle }>
                                    <Box sx={ { p: 1 } }>
                                        { rowData.map( ( enchant, index ) => (
                                            <>
                                                { index != 0 && index % 5 == 0 &&
                                                    <Card sx={ {
                                                        backgroundColor: '#3C3B40',
                                                        padding: '8px',
                                                        margin: '8px',
                                                        boxSizing: 'border-box'
                                                    } }
                                                          key={ index }
                                                    >
                                                        <InfeedAd/>
                                                    </Card>
                                                }
                                                <EnchantCard enchant={ enchant } valFlag={ valFlag }
                                                             key={ enchant.enchant_id }/>
                                                { index == rowData.length - 1 &&
                                                    <Card sx={ {
                                                        backgroundColor: '#3C3B40',
                                                        padding: '8px',
                                                        margin: '8px',
                                                        boxSizing: 'border-box'
                                                    } }
                                                          key={ 'lastSp' }
                                                    >
                                                        <InfeedAd/>
                                                    </Card>
                                                }
                                            </>
                                        ) ) }
                                    </Box>
                                </Grid>
                                <IconButton color="secondary" aria-label="add an alarm" css={ topIconStyle }
                                            onClick={ scrollToTop }
                                            style={ { position: 'fixed', bottom: '48px', background: '#282828' } }>
                                    <KeyboardDoubleArrowUp sx={ { fontSize: 40 } }/>
                                </IconButton>
                            </MediaQuery>
                        </>
                    }
                </Grid>
            </Box>
        </>
    );
}