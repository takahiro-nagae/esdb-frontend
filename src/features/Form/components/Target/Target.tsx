import { MenuItem, TextField } from '@material-ui/core';

import styles from '../../common/style/common.module.css';

import { FormTargetType } from '@/repositories/form/_types';

type TargetProps = {
  targetList: Array<FormTargetType>;
  selectedTarget: string;
  setSelectedTarget: (value: string) => void;
};

export const Target: React.FC<TargetProps> = ({
  targetList,
  selectedTarget,
  setSelectedTarget,
}) => {
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
      value={selectedTarget}
      onChange={e => setSelectedTarget(e.target.value)}
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
