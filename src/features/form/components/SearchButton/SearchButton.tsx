import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import styles from './SearchButton.module.css';

export const SearchButton: React.FC = () => {
  return (
    <Button
      className={styles.searchButton}
      endIcon={<SearchIcon />}
      type='submit'
      variant='contained'
    >
      検索
    </Button>
  );
};
