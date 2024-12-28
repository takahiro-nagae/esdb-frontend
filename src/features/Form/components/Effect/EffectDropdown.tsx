import { MenuItem, TextField } from '@mui/material';

import styles from '../../common/style/common.module.css';
import { useEffectStore } from '../../store/useEffectStore';

export const EffectDropdown: React.FC = () => {
  const { effects, selected, setSelected } = useEffectStore();

  return (
    <div className={styles.formContainer}>
      <TextField
        data-testid='effect'
        defaultValue=''
        fullWidth
        helperText='効果を指定してください'
        label='効果'
        id='effect'
        inputProps={{
          'data-testid': 'effectInput',
        }}
        select
        size='small'
        variant='outlined'
        value={selected}
        onChange={e => setSelected(e.target.value)}
      >
        <MenuItem value=''>指定なし</MenuItem>
        {effects.map(effect => (
          <MenuItem key={effect['effect_id']} value={effect['effect_id']}>
            {effect['effect']}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};
