import { Grid } from '@material-ui/core';
import Box from '@mui/material/Box';
import React from 'react';
import { useParams } from 'react-router-dom';

import { Rank } from '../Rank';

export const RankIndex: React.FC = () => {
  const params = useParams();

  return (
    <Box sx={{ mt: 5, ml: 5 }}>
      <Grid item xs={11}>
        <Rank rank={params.rank ?? ''} />
      </Grid>
    </Box>
  );
};
