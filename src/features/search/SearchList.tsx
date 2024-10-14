/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Box from '@mui/material/Box';
import { BrowserView, MobileView } from 'react-device-detect';
import { SearchFilter } from './common/component/SearchFilter/SearchFilter';
import { SpSearchContainer } from './sp/SpSearchContainer';
import { Loading } from './common/component/Loading/Loading';
import {
  maxSearchSize,
  mobileSticky,
  verticalCenter,
} from './style/SearchListStyle';
import { SearchResultHead } from './component/SearchResult/SearechResultHead';
import { OrderContext } from './context/pc/OrderContext';
import { Order } from './pc/type/Order';
import { HeadData } from './pc/type/HeadData';
import { PageContext } from './context/PageContext';
import { EnchantContext } from './context/EnchantContext';
import { SearchListContainer } from './pc/SearchListContainer';
import { getSearchEnchantData } from '@/repositories/search/getSearchEnchantData';
import { EnchantData } from '@/repositories/search/_types';

type SearchListProps = {
  isFreeSearch: boolean;
};

export const SearchList: React.FC<SearchListProps> = ({ isFreeSearch }) => {
  const [enchantList, setEnchantList] = useState<Array<EnchantData>>([]);
  const [rowData, setRowData] = useState<Array<EnchantData>>([]);
  const [count, setCount] = useState(0);
  const [dispCount, setDispCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof HeadData>('enchant_id');
  const [page, setPage] = useState(0);
  const [effectName, setEffectName] = useState('');

  const [inputParams] = useSearchParams();
  const path = isFreeSearch ? '/search' : '/detail';

  useEffect(() => {
    const res = async () => getSearchEnchantData(path, inputParams);

    res().then(res => {
      const enchantList = res.enchant_list;
      setEnchantList(enchantList);
      setRowData(enchantList);

      const dataLength = enchantList.length;
      setCount(dataLength);
      setDispCount(dataLength);
      if (dataLength > 0) {
        setOrderBy('disp_val');
        setOrder('desc');
      }

      res.effect_name && setEffectName(res.effect_name);

      setIsLoading(true);
    });
  }, [inputParams]);

  return (
    <>
      <Loading isLoading={isLoading} />
      <MobileView css={mobileSticky}>
        <EnchantContext.Provider
          value={{
            enchantList,
            setEnchantList,
            rowData,
            setRowData,
            count,
            setCount,
          }}
        >
          <PageContext.Provider value={{ page, setPage }}>
            <SearchFilter xs={12} />
          </PageContext.Provider>
        </EnchantContext.Provider>
      </MobileView>
      <Box sx={{ mt: 3 }}>
        <Grid
          alignItems='center'
          container
          css={dispCount < 1 ? verticalCenter : ''}
          direction='column'
        >
          <SearchResultHead
            dispCount={dispCount}
            count={count}
            effectName={effectName}
          />
          {dispCount >= 1 && (
            <>
              <BrowserView css={maxSearchSize}>
                <EnchantContext.Provider
                  value={{
                    enchantList,
                    setEnchantList,
                    rowData,
                    setRowData,
                    count,
                    setCount,
                  }}
                >
                  <OrderContext.Provider
                    value={{ order, setOrder, orderBy, setOrderBy }}
                  >
                    <PageContext.Provider value={{ page, setPage }}>
                      <SearchListContainer />
                    </PageContext.Provider>
                  </OrderContext.Provider>
                </EnchantContext.Provider>
              </BrowserView>
            </>
          )}
        </Grid>
      </Box>
      <MobileView>
        <SpSearchContainer rowData={rowData} />
      </MobileView>
    </>
  );
};
