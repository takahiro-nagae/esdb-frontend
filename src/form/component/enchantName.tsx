/** @jsxImportSource @emotion/react */
import { TextField } from '@material-ui/core';
import { UseFormRegister } from 'react-hook-form';
import { formMarginStyle } from '../common/style/formStyle';
import { FormType } from '../common/type/formType';

/**
 * エンチャント名のコンポーネント
 * @param props { UseFormRegister<FormType> }
 * @returns EnchantName { EmotionJSX.Element }
 */
export const EnchantName = (props: { register: UseFormRegister<FormType> }) => {
    return(
        <TextField
            fullWidth
            css={formMarginStyle}
            helperText='エンチャント名を入力してください'
            id='enchantName'
            label='エンチャント名'
            size='small'
            variant='outlined'
            {...props.register('enchantName')}
        />
    );
}