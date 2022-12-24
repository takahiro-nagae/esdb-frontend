import { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
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
import { getSearchEnchantData } from "../api/backendApi";

/**
 * 検索結果一覧のコンテナコンポーネント
 * @param props { boolean }
 * @returns SearchList { JSX.Element }
 */
export const SearchList = (props: { isFreeSearch: boolean }) => {

    /** 検索結果の文字列 */
    const resultStyle = css({
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    });

    /** 件数文字列 */
    const hitCountStyle = css({
        color: '#f00',
        fontSize: '18px'
    });

    /** 検索結果なしの表示 */
    const verticalCenterStyle = css({
        position: 'absolute',
        top: '50%'
    });

    /** 遷移元からのデータ */
    const [ searchParams ] = useSearchParams();

    /** エンチャント一覧(取得した全件) */
    const [ enchantList, setEnchantList ] = useState<Array<EnchantData>>([]);
    /** 表示する一覧 */
    const [ rowData, setRowData ] = useState<Array<EnchantData>>([]);
    /** 件数 */
    const [ count, setCount ] = useState(0);
    /** 表示用件数 */
    const [ dispCount, setDispCount ] = useState(0);
    /** ローディングフラグ */
    const [ isLoading, setIsLoading ] = useState(false);
    /** 並び順 */
    const [ order, setOrder ] = useState<Order>('asc');
    /** 並び替えのプロパティ */
    const [ orderBy, setOrderBy ] = useState<keyof HeadData>('enchant_id');
    /** ページ */
    const [ page, setPage ] = useState(0);
    /** 表示用の値 */
    const [ effectName, setEffectName ] = useState('');

    /** 初期表示検索用パス */
    let path = '';
    /** 検索用パラメータ */
    let requestParams = '';

    if ( props.isFreeSearch ) {
        path = '/search'
        requestParams = '?search=' + searchParams.get('search');
    } else {
        path = '/detail'
        requestParams = '?enchantName=' + searchParams.get('enchantName');
        requestParams += '&effect=' + searchParams.get('effect');
        requestParams += '&effectVal=' + searchParams.get('effectVal');
        requestParams += '&range=' + searchParams.get('range');
        requestParams += '&rank=' + searchParams.get('rank');
        requestParams += '&target=' + searchParams.get('target');
        requestParams += '&position=' + searchParams.get('position');
        requestParams += '&rankRange=' + searchParams.get('rankRange');
    }

    useEffect(() => {
        const res = async () => getSearchEnchantData(path, requestParams);

        res().then((res) => {
            const enchantList = res.enchantList;
            setEnchantList(enchantList);
            setRowData(enchantList);

            const dataLength = enchantList.length;
            setCount(dataLength);
            setDispCount(dataLength);
            if ( dataLength > 0 ) {
                setOrderBy('disp_val')
                setOrder('desc')
            }

            res.effectName && setEffectName(res.effectName);

            setIsLoading(true);
        })

    }, [ requestParams ]);

    return (
        <>
            <Loading isLoading={isLoading}/>
            <MediaQuery query={spDisplayQuery}>
                <SearchFilter
                    enchantList={enchantList}
                    setCount={setCount}
                    setPage={setPage}
                    setRowData={setRowData}
                    xs={12}
                />
            </MediaQuery>
            <Box sx={{ mt: 3 }}>
                <Grid
                    alignItems='center'
                    container
                    css={dispCount < 1 ? verticalCenterStyle : ''}
                    direction='column'
                >
                    {dispCount < 1 &&
                        <>
                            <p css={resultStyle}>検索結果は0件です</p>
                        </>
                    }
                    {dispCount >= 1 &&
                        <>
                            <p css={resultStyle}>
                                <span css={hitCountStyle}>{count}</span>件ヒットしました
                                {effectName != '' &&
                                    <>
                                        <br/>
                                        <span>値：{effectName}</span>
                                    </>
                                }
                            </p>
                            <MediaQuery query={pcDisplayQuery}>
                                <SearchListContainer
                                    count={count} setCount={setCount}
                                    enchantList={enchantList}
                                    order={order} setOrder={setOrder}
                                    orderBy={orderBy} setOrderBy={setOrderBy}
                                    page={page} setPage={setPage}
                                    rowData={rowData} setRowData={setRowData}
                                />
                            </MediaQuery>
                            <MediaQuery query={spDisplayQuery}>
                                <SpSearchContainer
                                    rowData={rowData}
                                />
                            </MediaQuery>
                        </>
                    }
                </Grid>
            </Box>
        </>
    );
}