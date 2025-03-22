import { Grid } from '@mui/material';
import Box from '@mui/material/Box';

import { Loading } from '../../../../../../common/Loading/Loading';
import { Detail } from '../Detail';

import { useDetailIndex } from './hooks/useDetailIndex';

export const DetailIndex: React.FC = () => {
  const { data, loading } = useDetailIndex();

  return (
    <>
      <Loading isLoading={loading} />
      <Box sx={{ mt: 5, ml: 5 }}>
        {data && (
          <Grid item xs={11}>
            <Detail enchant={data} />
          </Grid>
        )}
      </Box>
    </>
  );
};
