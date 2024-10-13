import { UseFormRegister } from 'react-hook-form';
import { FormType } from '../../common/type/FormType';
import { TextField } from '@material-ui/core';

type EffectValueProps = {
  register: UseFormRegister<FormType>;
};

export const EffectValue: React.FC<EffectValueProps> = ({ register }) => {
  return (
    <TextField
      fullWidth
      helperText='効果の値'
      id='effectVal'
      label='値'
      size='small'
      type='number'
      variant='outlined'
      {...(register ? register('effectVal') : {})}
    />
  );
};
