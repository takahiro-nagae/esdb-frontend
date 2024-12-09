import { MenuItem, TextField } from '@material-ui/core';

import styles from '../../common/style/common.module.css';
import { useTargetStore } from '../../store/useTargetStore';

export const Target: React.FC = () => {
  const { targets, selected, setSelected } = useTargetStore();

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
      value={selected}
      onChange={e => setSelected(e.target.value)}
    >
      <MenuItem value=''>指定なし</MenuItem>
      {targets.map(target => (
        <MenuItem key={target.target_code} value={target.target_code}>
          {target.target_name}
        </MenuItem>
      ))}
    </TextField>
  );
};
