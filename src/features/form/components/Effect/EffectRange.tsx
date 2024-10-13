import { UseFormRegister } from 'react-hook-form';
import { FormType } from '../../common/type/FormType';
import { MenuItem, TextField } from '@material-ui/core';

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
      <MenuItem value=''>指定なし</MenuItem>
      <MenuItem value='1'>以上</MenuItem>
      <MenuItem value='2'>以下</MenuItem>
    </TextField>
  );
};
