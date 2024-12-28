import { TextField } from '@mui/material';

import { useEffectStore } from '../../store/useEffectStore';

export const EffectValue: React.FC = () => {
  const { value, setValue } = useEffectStore();

  return (
    <TextField
      fullWidth
      helperText='効果の値'
      id='effectVal'
      label='値'
      size='small'
      type='number'
      variant='outlined'
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
};
