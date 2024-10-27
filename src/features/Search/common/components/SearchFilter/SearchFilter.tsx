import { Grid } from '@material-ui/core';
import { GridSize } from '@material-ui/core/Grid/Grid';
import { useSearchFilter } from './hooks/useSearchFilter';
import styles from './SearchFilter.module.css';
import { isBrowser } from 'react-device-detect';

export const SearchFilter = (props: { xs: GridSize }) => {
  const { searchWord, setSearchWord } = useSearchFilter();

  return (
    <Grid
      item
      xs={props.xs}
      className={`${styles.freeSearchBox} ${
        isBrowser ? styles.freeSearchBoxBrowser : styles.freeSearchBoxMobile
      }`}
    >
      <input
        className={`${styles.freeSearchInput} ${
          isBrowser
            ? styles.freeSearchInputBrowser
            : styles.freeSearchInputMobile
        }`}
        placeholder='絞り込む'
        value={searchWord}
        data-testid='searchFilter'
        onChange={e => setSearchWord(e.target.value)}
      />
    </Grid>
  );
};
