import { FormEffectType } from '@/repositories/form/_types';
import { MenuItem, TextField } from '@material-ui/core';
import styles from '../../common/style/common.module.css';

export type EffectDropDownProps = {
  effectList: Array<FormEffectType>;
  selectedEffect: string;
  setSelectedEffect: (E: string) => void;
};

export const EffectDropDown: React.FC<EffectDropDownProps> = ({
  effectList,
  selectedEffect,
  setSelectedEffect,
}) => {
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
        value={selectedEffect}
        onChange={e => setSelectedEffect(e.target.value)}
      >
        <MenuItem value=''>指定なし</MenuItem>
        {effectList.map(effect => (
          <MenuItem key={effect['effect_id']} value={effect['effect_id']}>
            {effect['effect']}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};
