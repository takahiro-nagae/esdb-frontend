import { Search } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { isBrowser } from 'react-device-detect';

import styles from './FreeSearch.module.css';
import { useFreeSearch } from './hooks/useFreeSearch';

export const FreeSearch: React.FC = () => {
  const { inputValue, setInputValue, handleSubmit, handleKeyDown } =
    useFreeSearch();
  return (
    <div className={styles.searchBarDisplay}>
      <div
        className={`${styles.searchBar} ${isBrowser ? styles.searchBarBrowser : styles.searchBarMobile}`}
      >
        <input
          className={styles.searchBarInput}
          id='search'
          placeholder='検索'
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <IconButton
          aria-label='search'
          className={styles.button}
          type='submit'
          onClick={handleSubmit}
        >
          <Search />
        </IconButton>
      </div>
    </div>
  );
};
