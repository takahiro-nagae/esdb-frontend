import { MenuItem, TextField } from "@material-ui/core"
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

/**
 * 対象フォームコンポーネント
 */
export const TargetForm = (props: {targetList: Array<any>, formMargin: any}) => {
    return(
        <TextField
            fullWidth
            select
            size="small"
            variant="outlined"
            label="対象"
            css={props.formMargin}
            name="target"
            helperText="対象を指定してください"
        >
            <MenuItem value="">指定無し</MenuItem>
            {props.targetList.map(target => (
                /**
                 * 対象を追加
                 * 0 : 対象コード
                 * 1 : 対象名
                 */
                <MenuItem value={target[0]}>{target[1]}</MenuItem>
            ))}
        </TextField>
    );
}