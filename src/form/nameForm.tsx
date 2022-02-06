import { TextField } from "@material-ui/core";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

/**
 * エンチャント名コンポーネント
 */
export const NameForm = (props: {formMargin: any}) => {
    return(
        <TextField
            css={props.formMargin}
            label="エンチャント名"
            helperText="エンチャント名を入力してください"
            fullWidth
            variant="outlined"
            size="small"
        />
    );
}