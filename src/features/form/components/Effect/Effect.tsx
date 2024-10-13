import { Grid } from '@material-ui/core';
import { UseFormRegister } from 'react-hook-form';
import { FormEffectType } from '@/repositories/form/_types';
import { FormType } from '../../common/type/FormType';
import { EffectValue } from './EffectValue';
import { EffectRange } from './EffectRange';
import { EffectDropDown } from './EffectDropDown';
import styles from '../../common/style/common.module.css';

type EffectProps = {
  effectList: Array<FormEffectType>;
  register: UseFormRegister<FormType>;
};

export const Effect: React.FC<EffectProps> = ({ effectList, register }) => {
  return (
    <>
      <EffectDropDown effectList={effectList} register={register} />
      <Grid container className={styles.formContainer}>
        <Grid item xs={5}>
          <EffectValue register={register} />
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={5}>
          <EffectRange register={register} />
        </Grid>
      </Grid>
    </>
  );
};
