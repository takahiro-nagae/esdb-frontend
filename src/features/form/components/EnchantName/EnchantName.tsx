import { TextField } from '@material-ui/core';

type EnchantNameProps = {
  inputEnchantName: string;
  setInputEnchantName: (E: string) => void;
};

export const EnchantName: React.FC<EnchantNameProps> = ({
  inputEnchantName,
  setInputEnchantName,
}) => {
  return (
    <TextField
      fullWidth
      helperText='エンチャント名を入力してください'
      id='enchantName'
      label='エンチャント名'
      size='small'
      variant='outlined'
      value={inputEnchantName}
      onChange={e => setInputEnchantName(e.target.value)}
    />
  );
};
