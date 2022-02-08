/** @jsxImportSource @emotion/react */

import { MenuItem, TextField } from "@material-ui/core";
import { formMargin } from "../common/formStyle";

export const Target = (props: {register: any, targetList: Array<any>}) => {
    return(
        <TextField
            fullWidth
            select
            size='small'
            variant='outlined'
            label='対象'
            css={formMargin}
            id='target'
            helperText='対象を指定してください'
            defaultValue=''
            {...props.register('target')}
        >
            <MenuItem value=''>指定無し</MenuItem>
            {props.targetList.map(target => (
                /**
                 * 対象を追加
                 * 0 : 対象コード
                 * 1 : 対象名
                 */
                <MenuItem value={target[0]} key={target[0]}>{target[1]}</MenuItem>
            ))}
        </TextField>
    );
}