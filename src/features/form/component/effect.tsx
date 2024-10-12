/** @jsxImportSource @emotion/react */
import { Grid, MenuItem, TextField } from '@material-ui/core';
import { UseFormRegister } from 'react-hook-form';
import { formMarginStyle } from '../common/style/formStyle';
import { FormEffectType } from '@/repositories/form/_types';
import { FormType } from '../common/type/FormType';

/**
 * 効果と効果詳細のコンポーネント
 * @param props { Array<EffectInterface>, UseFormRegister<SearchFormInterface> }
 * @returns Effect { EmotionJSX.Element }
 */
export const Effect = (props: { effectList: Array<FormEffectType>; register: UseFormRegister<FormType> }) => {
  return (
    <>
      <TextField
        css={formMarginStyle}
        data-testid='effect'
        defaultValue=''
        fullWidth
        helperText='効果を指定してください'
        label='効果'
        id='effect'
        inputProps={{
          'data-testid': 'effectInput',
        }}
        select
        size='small'
        {...props.register('effect')}
      >
        <MenuItem value=''>指定無し</MenuItem>
        {props.effectList.map(effect => (
          <MenuItem key={effect['effect_id']} value={effect['effect_id']}>
            {effect['effect']}
          </MenuItem>
        ))}
      </TextField>
      {/* 効果詳細条件 */}
      <Grid container css={formMarginStyle}>
        <Grid item xs={5}>
          <TextField
            fullWidth
            helperText='効果の値'
            id='effectVal'
            label='値'
            size='small'
            type='number'
            variant='outlined'
            {...props.register('effectVal')}
          />
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={5}>
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
            {...props.register('range')}
          >
            <MenuItem value=''>指定なし</MenuItem>
            <MenuItem value='1'>以上</MenuItem>
            <MenuItem value='2'>以下</MenuItem>
          </TextField>
        </Grid>
      </Grid>
    </>
  );
};
