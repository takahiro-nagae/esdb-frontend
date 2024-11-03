import { Grid } from '@material-ui/core';

import styles from '../../common/style/common.module.css';

import { EffectDropdown, EffectDropdownProps } from './EffectDropdown';
import { EffectRange, EffectRangeProps } from './EffectRange';
import { EffectValue, EffectValueProps } from './EffectValue';

import { FormEffectType } from '@/repositories/form/_types';


type EffectProps = {
  effectList: Array<FormEffectType>;
  dropdown: Omit<EffectDropdownProps, 'effectList'>;
  input: EffectValueProps;
  range: EffectRangeProps;
};

export const Effect: React.FC<EffectProps> = ({
  effectList,
  dropdown,
  input,
  range,
}) => {
  return (
    <>
      <EffectDropdown effectList={effectList} {...dropdown} />
      <Grid container className={styles.formContainer}>
        <Grid item xs={5}>
          <EffectValue {...input} />
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={5}>
          <EffectRange {...range} />
        </Grid>
      </Grid>
    </>
  );
};
