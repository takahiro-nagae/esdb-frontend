import { TextField } from '@mui/material';

import { useEnchantNameStore } from '../../store/useEnchantNameStore';

export const EnchantName: React.FC = () => {
  const { enchantName, setEnchantName } = useEnchantNameStore();

  return (
    <TextField
      fullWidth
      helperText='エンチャント名を入力してください'
      id='enchantName'
      label='エンチャント名'
      size='small'
      variant='outlined'
      value={enchantName}
      onChange={e => setEnchantName(e.target.value)}
    />
  );
};
