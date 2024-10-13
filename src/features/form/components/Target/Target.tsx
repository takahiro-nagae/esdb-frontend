import { MenuItem, TextField } from '@material-ui/core';
import { UseFormRegister } from 'react-hook-form';
import { FormTargetType } from '@/repositories/form/_types';
import { FormType } from '../../common/type/FormType';
import styles from '../../common/style/common.module.css';

type TargetProps = {
  targetList: Array<FormTargetType>;
  register: UseFormRegister<FormType>;
};

export const Target: React.FC<TargetProps> = ({ targetList, register }) => {
  return (
    <TextField
      className={styles.formContainer}
      defaultValue=''
      fullWidth
      helperText='対象を指定してください'
      id='target'
      label='対象'
      select
      size='small'
      variant='outlined'
      {...(register ? register('target') : {})}
    >
      <MenuItem value=''>指定なし</MenuItem>
      {targetList.map(target => (
        <MenuItem key={target.target_code} value={target.target_code}>
          {target.target_name}
        </MenuItem>
      ))}
    </TextField>
  );
};
