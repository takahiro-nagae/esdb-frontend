import { MenuItem, TextField } from "@material-ui/core"
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

/**
 * 対象フォームコンポーネント
 */
export const TargetForm = (props: {formMargin: any}) => {
    return(
        <TextField
            css={props.formMargin}
            label="対象"
            variant="outlined"
            size="small"
            helperText="対象を指定してください"
            select
            fullWidth
        >
        <MenuItem value="">指定無し</MenuItem>
        </TextField>
    );
}