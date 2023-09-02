import { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useSearchParams } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Box from '@mui/material/Box';
import { BrowserView, MobileView } from "react-device-detect";
import { Order } from './pc/type/order';
import { HeadData } from './pc/interface/headData';
import { SearchFilter } from './common/compornent/searchFilter';
import { EnchantData } from './common/interface/enchantData';
import { SearchListContainer } from './pc/searchListContainer';
import { SpSearchContainer } from './sp/spSearchContainer';
import { Loading } from './common/compornent/loading';
import { getSearchEnchantData } from '../../api/backendApi';
import { SearchParamsBuilder } from './searchRequestParamsBuilder';
import { verticalCenter } from './searchListStyle';
import { SearchResult } from './result/searechResult';

/**
 * 検索結果一覧のコンテナコンポーネント
 * @param props { boolean }
 * @returns SearchList { JSX.Element }
 */
export const SearchList = (props: { isFreeSearch: boolean }) => {
    const [enchantList, setEnchantList] = useState<Array<EnchantData>>([]);
    const [rowData, setRowData] = useState<Array<EnchantData>>([]);
    const [count, setCount] = useState(0);
    const [dispCount, setDispCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<keyof HeadData>('enchant_id');
    const [page, setPage] = useState(0);
    const [effectName, setEffectName] = useState('');

    let path = '';
    let requestParams = '';

    const [inputParams] = useSearchParams();
    const requestParamsBuilder = new SearchParamsBuilder(inputParams);
    path = props.isFreeSearch ? '/search' : '/detail';
    requestParams = props.isFreeSearch ? requestParamsBuilder.buildFreeSearchParams() : requestParamsBuilder.buildDefaultSearchParams();

    /** フリー検索の外枠 */
    const mobileSticky = css({
        position: 'sticky',
        top: '56px',
        zIndex: '3',
    });

    const maxSearchSize = css({
        maxWidth: '1400px',
    });

    useEffect(() => {
        const res = async () => getSearchEnchantData(path, requestParams);

        res().then(res => {
            const enchantList = res.enchantList;
            setEnchantList(enchantList);
            setRowData(enchantList);

            const dataLength = enchantList.length;
            setCount(dataLength);
            setDispCount(dataLength);
            if (dataLength > 0) {
                setOrderBy('disp_val');
                setOrder('desc');
            }

            res.effectName && setEffectName(res.effectName);

            setIsLoading(true);
        });
    }, [requestParams]);

    return (
        <>
            <Loading isLoading={isLoading} />
            <MobileView css={mobileSticky}>
                <SearchFilter enchantList={enchantList} setCount={setCount} setPage={setPage} setRowData={setRowData} xs={12} />
            </MobileView>
            <Box sx={{ mt: 3 }}>
                <Grid alignItems='center' container css={dispCount < 1 ? verticalCenter : ''} direction='column'>
                    <SearchResult dispCount={dispCount} count={count} effectName={effectName} />
                    {dispCount >= 1 && (
                        <>
                            <BrowserView css={maxSearchSize}>
                                <SearchListContainer
                                    count={count}
                                    setCount={setCount}
                                    enchantList={enchantList}
                                    order={order}
                                    setOrder={setOrder}
                                    orderBy={orderBy}
                                    setOrderBy={setOrderBy}
                                    page={page}
                                    setPage={setPage}
                                    rowData={rowData}
                                    setRowData={setRowData}
                                />
                            </BrowserView>
                            <MobileView>
                                <SpSearchContainer rowData={rowData} />
                            </MobileView>
                        </>
                    )}
                </Grid>
            </Box>
        </>
    );
};
