import { TextField } from '@material-ui/core';

export type EffectValueProps = {
  inputEffectValue: string;
  setInputEffectValue: (E: string) => void;
};

export const EffectValue: React.FC<EffectValueProps> = ({
  inputEffectValue,
  setInputEffectValue,
}) => {
  return (
    <TextField
      fullWidth
      helperText='効果の値'
      id='effectVal'
      label='値'
      size='small'
      type='number'
      variant='outlined'
      value={inputEffectValue}
      onChange={e => setInputEffectValue(e.target.value)}
    />
  );
};
