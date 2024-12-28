import { Grid } from '@mui/material';

import styles from '../../common/style/common.module.css';

import { EffectDropdown } from './EffectDropdown';
import { EffectRange } from './EffectRange';
import { EffectValue } from './EffectValue';

export const Effect: React.FC = () => {
  return (
    <>
      <EffectDropdown />
      <Grid container className={styles.formContainer}>
        <Grid item xs={5}>
          <EffectValue />
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={5}>
          <EffectRange />
        </Grid>
      </Grid>
    </>
  );
};
