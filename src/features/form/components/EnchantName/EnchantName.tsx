import { TextField } from '@material-ui/core';
import { FormType } from '../../common/type/FormType';
import { UseFormRegister } from 'react-hook-form';

type EnchantNameProps = {
  register: UseFormRegister<FormType>;
};

export const EnchantName: React.FC<EnchantNameProps> = ({ register }) => {
  return (
    <TextField
      fullWidth
      helperText='エンチャント名を入力してください'
      id='enchantName'
      label='エンチャント名'
      size='small'
      variant='outlined'
      {...(register ? register('enchantName') : {})}
    />
  );
};
