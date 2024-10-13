import { UseFormRegister } from 'react-hook-form';
import { Grid } from '@material-ui/core';
import { FormRankType } from '@/repositories/form/_types';
import { FormType } from '../../common/type/FormType';
import { RankRange } from './RankRange';
import styles from '../../common/style/common.module.css';
import { RankDropDown } from './RankDropDown';

type RankProps = {
  rankList: Array<FormRankType>;
  rankRange: string;
  register: UseFormRegister<FormType>;
  setRankRange: (E: string) => void;
};

export const Rank: React.FC<RankProps> = ({
  rankList,
  rankRange,
  register,
  setRankRange,
}) => {
  return (
    <>
      <label className={styles.label}>
        <small>ランク</small>
      </label>
      <Grid container className={styles.formContainer}>
        <Grid item xs={4}>
          <RankDropDown rankList={rankList} register={register} />
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={7}>
          <RankRange rankRange={rankRange} setRankRange={setRankRange} />
        </Grid>
      </Grid>
    </>
  );
};
