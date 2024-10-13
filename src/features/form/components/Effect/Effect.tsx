import { Grid } from '@material-ui/core';
import { FormEffectType } from '@/repositories/form/_types';
import { EffectValue, EffectValueProps } from './EffectValue';
import { EffectRange, EffectRangeProps } from './EffectRange';
import { EffectDropDown, EffectDropDownProps } from './EffectDropDown';
import styles from '../../common/style/common.module.css';

type EffectProps = {
  effectList: Array<FormEffectType>;
  dropDown: Omit<EffectDropDownProps, 'effectList'>;
  input: EffectValueProps;
  range: EffectRangeProps;
};

export const Effect: React.FC<EffectProps> = ({
  effectList,
  dropDown,
  input,
  range,
}) => {
  return (
    <>
      <EffectDropDown effectList={effectList} {...dropDown} />
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
