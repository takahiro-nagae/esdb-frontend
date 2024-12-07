import { Grid } from '@material-ui/core';

import styles from '../../common/style/common.module.css';

import { RankDropdown } from './RankDropdown';
import { RankRange } from './RankRange';

export const Rank: React.FC = () => {
  return (
    <>
      <label className={styles.label}>
        <small>ランク</small>
      </label>
      <Grid container className={styles.formContainer}>
        <Grid item xs={4}>
          <RankDropdown />
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={7}>
          <RankRange />
        </Grid>
      </Grid>
    </>
  );
};
