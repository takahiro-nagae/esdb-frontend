import { Grid } from '@mui/material';
import { isBrowser } from 'react-device-detect';

import styles from './SearchFilter.module.css';
import { useSearchFilter } from './hooks/useSearchFilter';

type SearchFilterProps = {
  xs: number;
};

export const SearchFilter: React.FC<SearchFilterProps> = props => {
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
