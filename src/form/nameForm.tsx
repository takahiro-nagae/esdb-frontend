import { TextField } from "@material-ui/core";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

/**
 * エンチャント名コンポーネント
 */
export const NameForm = (props: {formMargin: any}) => {
    return(
        <TextField
            fullWidth
            size="small"
            variant="outlined"
            label="エンチャント名"
            name="enchantName"
            css={props.formMargin}
            helperText="エンチャント名を入力してください"
        />
    );
}