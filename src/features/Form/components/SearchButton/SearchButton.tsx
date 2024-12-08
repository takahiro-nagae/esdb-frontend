import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

import { useSearchForm } from '../../hooks/useSearchForm';

import styles from './SearchButton.module.css';

export const SearchButton: React.FC = () => {
  const { handleSubmit } = useSearchForm();

  return (
    <Button
      className={styles.searchButton}
      endIcon={<SearchIcon />}
      type='submit'
      variant='contained'
      onClick={handleSubmit}
    >
      検索
    </Button>
  );
};
