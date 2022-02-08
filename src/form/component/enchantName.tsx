/** @jsxImportSource @emotion/react */

import { TextField } from '@material-ui/core';
import { formMargin } from '../common/formStyle';

/**
 * エンチャント名のコンポーネント
 */
export const EnchantName = (props: {register: any}) => {
    return(
        <TextField
            fullWidth
            size='small'
            variant='outlined'
            label='エンチャント名'
            id='enchantName'
            css={formMargin}
            helperText='エンチャント名を入力してください'
            {...props.register('enchantName')}
        />
    );
}