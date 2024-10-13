import { UseFormRegister } from 'react-hook-form';
import { FormType } from '../../common/type/FormType';
import { MenuItem, TextField } from '@material-ui/core';
import { EFFECT_RANGE_ITEMS } from './const';

type EffectRangeProps = {
  register: UseFormRegister<FormType>;
};

export const EffectRange: React.FC<EffectRangeProps> = ({ register }) => {
  return (
    <TextField
      data-testid='range'
      defaultValue=''
      fullWidth
      helperText='以上 or 以下'
      id='range'
      select
      size='small'
      variant='outlined'
      inputProps={{
        'data-testid': 'rangeInput',
      }}
      {...(register ? register('range') : {})}
    >
      {EFFECT_RANGE_ITEMS.map(item => (
        <MenuItem key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
