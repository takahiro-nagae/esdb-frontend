import { FormEffectType } from '@/repositories/form/_types';
import { UseFormRegister } from 'react-hook-form';
import { FormType } from '../../common/type/FormType';
import { MenuItem, TextField } from '@material-ui/core';
import styles from '../../common/style/common.module.css';

type EffectDropDownProps = {
  effectList: Array<FormEffectType>;
  register: UseFormRegister<FormType>;
};

export const EffectDropDown: React.FC<EffectDropDownProps> = ({
  effectList,
  register,
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
        {...(register ? register('effect') : {})}
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
