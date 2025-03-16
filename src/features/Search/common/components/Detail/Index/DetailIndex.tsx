import { Grid } from '@mui/material';
import Box from '@mui/material/Box';

import { Loading } from '../../../../../../common/Loading/Loading';
import { Detail } from '../Detail';

import { useDetailIndex } from './hooks/useDetailIndex';

export const DetailIndex: React.FC = () => {
  const { enchantData, isLoading } = useDetailIndex();

  return (
    <>
      <Loading isLoading={isLoading} />
      <Box sx={{ mt: 5, ml: 5 }}>
        {enchantData && (
          <Grid item xs={11}>
            <Detail enchant={enchantData} />
          </Grid>
        )}
      </Box>
    </>
  );
};
