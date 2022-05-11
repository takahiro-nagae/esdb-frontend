import { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import axios from 'axios';
import { css } from '@emotion/react';
import { useSearchParams } from 'react-router-dom';
import MediaQuery from "react-responsive";
import { Grid } from '@material-ui/core';
import Box from '@mui/material/Box';
import { Order } from './pc/type/order';
import { HeadData } from './pc/interface/headData';
import { pcDisplayQuery, spDisplayQuery } from "../common/theme/layout";
import { SearchFilter } from "./common/compornent/searchFilter";
import { EnchantData } from "./common/interface/enchantData";
import { SearchListContainer } from "./pc/searchListContainer";
import { SpSearchContainer } from "./sp/spSearchContainer";
import { Loading } from "./common/compornent/loading";

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

    /** 検索結果なしの表示 */
    const verticalCenterStyle = css( {
        position: 'absolute',
        top: '50%'
    } );

    /** 遷移元からのデータ */
    const [ searchParams ] = useSearchParams();

    /** エンチャント一覧(取得した全件) */
    const [ enchantList, setEnchantList ] = useState<Array<EnchantData>>( [] );
    /** 表示する一覧 */
    const [ rowData, setRowData ] = useState<Array<EnchantData>>( [] );
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
    /** 表示用の値 */
    const [ effectName, setEffectName ] = useState( '' );

    /** 初期表示検索用パス */
    let path = '';
    /** 検索用パラメータ */
    let requestParams = '';

    if ( props.freeSearchFlg ) {
        path = '/search'
        requestParams = '?search=' + searchParams.get( 'search' );
    } else {
        path = '/detail'
        requestParams = '?enchantName=' + searchParams.get( 'enchantName' );
        requestParams += '&effect=' + searchParams.get( 'effect' );
        requestParams += '&effectVal=' + searchParams.get( 'effectVal' );
        requestParams += '&range=' + searchParams.get( 'range' );
        requestParams += '&rank=' + searchParams.get( 'rank' );
        requestParams += '&target=' + searchParams.get( 'target' );
        requestParams += '&position=' + searchParams.get( 'position' );
        requestParams += '&rankRange=' + searchParams.get( 'rankRange' );
    }

    useEffect( () => {
        axios.get( 'https://wd5zeazzd9.execute-api.ap-northeast-1.amazonaws.com/Prod' + path + requestParams )
            .then( ( res ) => {
                if ( res.data ) {
                    setEnchantList( res.data.enchant_list );
                    setRowData( res.data.enchant_list );
                    setCount( res.data.enchant_list.length );
                    setDispCount( res.data.enchant_list.length );
                    if ( res.data.enchant_list.length > 0 ) {
                        setValFlag( res.data.enchant_list[0].disp_val != undefined )
                        setOrderBy( 'disp_val' )
                        setOrder( 'desc' )
                    }
                    if ( res.data.effect_name ) {
                        setEffectName( res.data.effect_name.effect );
                    }
                    // ローディング完了
                    setLoadingFlag( true );
                }
            } ).catch( ( error ) => {
            console.log( error )
        } );
    }, [ requestParams ] );

    return (
        <>
            <Loading isLoading={ loadingFlag }/>
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
                <Grid
                    alignItems='center'
                    container
                    css={ dispCount < 1 ? verticalCenterStyle : '' }
                    direction='column'
                >
                    { dispCount < 1 &&
                        <>
                            <p css={ resultStyle }>検索結果は0件です</p>
                        </>
                    }
                    { dispCount >= 1 &&
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
                                <SearchListContainer
                                    count={ count } setCount={ setCount }
                                    enchantList={ enchantList }
                                    order={ order } setOrder={ setOrder }
                                    orderBy={ orderBy } setOrderBy={ setOrderBy }
                                    page={ page } setPage={ setPage }
                                    rowData={ rowData } setRowData={ setRowData }
                                    valFlag={ valFlag }
                                />
                            </MediaQuery>
                            <MediaQuery query={ spDisplayQuery }>
                                <SpSearchContainer
                                    rowData={ rowData }
                                    valFlag={ valFlag }
                                />
                            </MediaQuery>
                        </>
                    }
                </Grid>
            </Box>
        </>
    );
}