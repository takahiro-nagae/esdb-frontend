import { Box, Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import { SearchListContainer } from '../Search/Pc/SearchListContainer';
import { SpSearchContainer } from '../Search/Sp/SpSearchContainer';
import { useEnchantStore } from '../Search/state/useEnchantStore';

import styles from './Bookmark.module.css';
import { BookMarkResultHead } from './components/BookMarkResultHead';

import { useBookmarkState } from '@/state/useBookmarkState';

export const Bookmark: React.FC = () => {
  const [isRender, setIsRender] = useState(false);
  const { enchants } = useBookmarkState();
  const { immutableEnchants, setImmutableEnchants } = useEnchantStore();

  useEffect(() => {
    if (!isRender) {
      setImmutableEnchants(enchants);
      setIsRender(true);
    }
  }, [enchants]);

  useEffect(() => {
    return () => setIsRender(false);
  }, []);

  return (
    <>
      <Box sx={{ mt: 3 }}>
        <Grid
          alignItems='center'
          container
          className={immutableEnchants.length < 1 ? styles.verticalCenter : ''}
          direction='column'
        >
          <BookMarkResultHead />
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
