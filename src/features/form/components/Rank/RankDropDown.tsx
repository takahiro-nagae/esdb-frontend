import { FormRankType } from '@/repositories/form/_types';
import { UseFormRegister } from 'react-hook-form';
import { FormType } from '../../common/type/FormType';
import styles from '../../common/style/common.module.css';
import { MenuItem, TextField } from '@material-ui/core';

type RankDropDownProps = {
  rankList: Array<FormRankType>;
  register: UseFormRegister<FormType>;
};

export const RankDropDown: React.FC<RankDropDownProps> = ({
  rankList,
  register,
}) => {
  return (
    <TextField
      className={styles.formContainer}
      defaultValue=''
      fullWidth
      id='rank'
      select
      variant='outlined'
      size='small'
      {...(register ? register('rank') : {})}
    >
      <MenuItem value=''>指定なし</MenuItem>
      {rankList.map(rank => (
        <MenuItem key={rank.rank} value={rank.rank}>
          {rank.rank}
        </MenuItem>
      ))}
    </TextField>
  );
};
