import { Grid, Paper } from '@mui/material';
import Box from '@mui/material/Box';

import { SearchForm } from './SearchForm';
import styles from './SearchFormContainer.module.css';
import { useSearchForm } from './hooks/useSearchForm';

import { Loading } from '@/common/Loading/Loading';

export const SearchFormContainer: React.FC = () => {
  const { loading } = useSearchForm();
  return (
    <Box sx={{ mt: 3 }}>
      <Loading isLoading={loading} />
      <Grid
        container
        className={styles.searchFormContainer}
        justifyContent='center'
      >
        <Grid item xs={12}>
          <Paper style={{ background: '#424242' }}>
            <Box sx={{ p: 2 }}>
              <h3>検索条件</h3>
              <Box sx={{ mx: 1, my: 4 }}>
                <SearchForm />
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
