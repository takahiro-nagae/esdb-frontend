import { MenuItem, TextField } from '@material-ui/core';

import { EFFECT_RANGE_ITEMS } from './const';

export type EffectRangeProps = {
  effectRange: string;
  setEffectRange: (E: string) => void;
};

export const EffectRange: React.FC<EffectRangeProps> = ({
  effectRange,
  setEffectRange,
}) => {
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
      value={effectRange}
      onChange={e => setEffectRange(e.target.value)}
    >
      {EFFECT_RANGE_ITEMS.map(item => (
        <MenuItem key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
