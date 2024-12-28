import { MenuItem, TextField } from '@mui/material';

import { useEffectStore } from '../../store/useEffectStore';

import { EFFECT_RANGE_ITEMS } from './const';

export const EffectRange: React.FC = () => {
  const { range, setRange } = useEffectStore();

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
      value={range}
      onChange={e => setRange(e.target.value)}
    >
      {EFFECT_RANGE_ITEMS.map(item => (
        <MenuItem key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
