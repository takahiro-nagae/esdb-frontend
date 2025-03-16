import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { BrowserView, MobileView } from 'react-device-detect';

import { Loading } from '../../common/Loading/Loading';

import { SearchListContainer } from './Pc/SearchListContainer';
import styles from './SearchList.module.css';
import { SpSearchContainer } from './Sp/SpSearchContainer';
import { SearchFilter } from './common/components/SearchFilter/SearchFilter';
import { SearchResultHead } from './components/SearchResult/SearechResultHead';
import { useSearchList } from './hooks/useSearchList';
import { useEnchantStore } from './state/useEnchantStore';

type SearchListProps = {
  isFreeSearch: boolean;
};

export const SearchList: React.FC<SearchListProps> = ({ isFreeSearch }) => {
  const { isLoading } = useSearchList(isFreeSearch);
  const { immutableEnchants } = useEnchantStore();
  return (
    <>
      <Loading isLoading={isLoading} />
      <MobileView className={styles.mobileHeader}>
        <SearchFilter xs={12} />
      </MobileView>
      <Box sx={{ mt: 3 }}>
        <Grid
          alignItems='center'
          container
          className={immutableEnchants.length < 1 ? styles.verticalCenter : ''}
          direction='column'
        >
          <SearchResultHead />
          {immutableEnchants.length >= 1 && (
            <>
              <BrowserView className={styles.pcContainer}>
                <SearchListContainer />
              </BrowserView>
            </>
          )}
        </Grid>
      </Box>
      <MobileView>
        <SpSearchContainer />
      </MobileView>
    </>
  );
};
