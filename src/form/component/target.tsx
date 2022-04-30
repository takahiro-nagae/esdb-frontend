/** @jsxImportSource @emotion/react */
import { MenuItem, TextField } from "@material-ui/core";
import { UseFormRegister } from "react-hook-form";
import { formMarginStyle } from "../common/style/formStyle";
import { FormType } from "../common/type/formType";
import { TargetType } from "../common/type/targetType";

/**
 * 対象コンポーネント
 * @param props { UseFormRegister<FormType>,  }
 * @returns
 */
export const Target = (props: {register: UseFormRegister<FormType>, targetList: Array<TargetType>}) => {
    return(
        <TextField
            css={formMarginStyle}
            defaultValue=''
            fullWidth
            helperText='対象を指定してください'
            id='target'
            label='対象'
            select
            size='small'
            variant='outlined'
            {...props.register('target')}
        >
            <MenuItem value=''>指定無し</MenuItem>
            {props.targetList.map(target => (
                <MenuItem
                    key={target['target_code']}
                    value={target['target_code']}
                >
                    {target['target_name']}
                </MenuItem>
            ))}
        </TextField>
    );
}