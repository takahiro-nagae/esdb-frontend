import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import styles from './SearchButton.module.css';

type SearchButtonProps = {
  handleSubmit: () => void;
};

export const SearchButton: React.FC<SearchButtonProps> = ({ handleSubmit }) => {
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
