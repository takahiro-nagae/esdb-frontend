import { Grid, MenuItem, TextField } from "@material-ui/core"
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

/**
 * 効果コンポーネント
 */
export const EffectForm = (props: {effectList: Array<any>,formMargin: any}) => {
    return(
        <>
            {/* 効果 */}
            <TextField
                fullWidth
                select
                size="small"
                variant="outlined"
                label="効果"
                css={props.formMargin}
                name="effect"
                helperText="効果を指定してください"
            >
                <MenuItem value="">指定無し</MenuItem>
                {props.effectList.map(effect => (
                    /**
                     * 効果を追加
                     * 0 : 効果ID
                     * 1 : 効果名
                     */
                    <MenuItem value={effect[0]}>{effect[1]}</MenuItem>
                ))}
            </TextField>
            {/* 効果詳細条件 */}
            <Grid container css={props.formMargin}>
                <Grid item xs={5}>
                    <TextField
                        fullWidth
                        label="値"
                        size="small"
                        variant="outlined"
                        type="number"
                        name="effectVal"
                        helperText="効果の値"
                    />
                </Grid>
                <Grid item xs={2}></Grid>
                    <Grid item xs={5}>
                        <TextField
                            fullWidth
                            select
                            size="small"
                            variant="outlined"
                            name="range"
                            helperText="以上 or 以下"
                        >
                            <MenuItem value="1">以上</MenuItem>
                            <MenuItem value="2">以下</MenuItem>
                        </TextField>
                    </Grid>
            </Grid>
        </>
    );
}