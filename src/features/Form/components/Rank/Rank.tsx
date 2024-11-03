import { Grid } from '@material-ui/core';

import styles from '../../common/style/common.module.css';

import { RankDropdown, RankDropdownProps } from './RankDropdown';
import { RankRange, RankRangeProps } from './RankRange';

import { FormRankType } from '@/repositories/form/_types';

type RankProps = {
  rankList: Array<FormRankType>;
  dropdown: Omit<RankDropdownProps, 'rankList'>;
  range: RankRangeProps;
};

export const Rank: React.FC<RankProps> = ({ rankList, dropdown, range }) => {
  return (
    <>
      <label className={styles.label}>
        <small>ランク</small>
      </label>
      <Grid container className={styles.formContainer}>
        <Grid item xs={4}>
          <RankDropdown rankList={rankList} {...dropdown} />
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={7}>
          <RankRange {...range} />
        </Grid>
      </Grid>
    </>
  );
};
