import { Grid } from '@material-ui/core';
import Box from '@mui/material/Box';
import { BrowserView, MobileView } from 'react-device-detect';
import { SearchFilter } from './common/components/SearchFilter/SearchFilter';
import { SpSearchContainer } from './sp/SpSearchContainer';
import { Loading } from './common/components/Loading/Loading';

import { SearchResultHead } from './components/SearchResult/SearechResultHead';
import { OrderContext } from './context/pc/OrderContext';
import { PageContext } from './context/PageContext';
import { EnchantContext } from './context/EnchantContext';
import { SearchListContainer } from './pc/SearchListContainer';
import { useSearchList } from './hooks/useSearchList';
import styles from './SearchList.module.css';

type SearchListProps = {
  isFreeSearch: boolean;
};

export const SearchList: React.FC<SearchListProps> = ({ isFreeSearch }) => {
  const { isLoading, enchantList, effectName, count, order, page } =
    useSearchList(isFreeSearch);

  return (
    <>
      <Loading isLoading={isLoading} />
      <MobileView className={styles.mobileHeader}>
        <EnchantContext.Provider
          value={{
            ...enchantList,
            count: count.count,
            setCount: count.setCount,
          }}
        >
          <PageContext.Provider value={{ ...page }}>
            <SearchFilter xs={12} />
          </PageContext.Provider>
        </EnchantContext.Provider>
      </MobileView>
      <Box sx={{ mt: 3 }}>
        <Grid
          alignItems='center'
          container
          className={count.dispCount < 1 ? styles.verticalCenter : ''}
          direction='column'
        >
          <SearchResultHead
            dispCount={count.dispCount}
            count={count.count}
            effectName={effectName}
          />
          {count.dispCount >= 1 && (
            <>
              <BrowserView className={styles.maxSearchSize}>
                <EnchantContext.Provider
                  value={{
                    ...enchantList,
                    count: count.count,
                    setCount: count.setCount,
                  }}
                >
                  <OrderContext.Provider value={{ ...order }}>
                    <PageContext.Provider value={{ ...page }}>
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
        <SpSearchContainer rowData={enchantList.rowData} />
      </MobileView>
    </>
  );
};
