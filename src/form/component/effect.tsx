/** サードパーティーライブラリ */
/** @jsxImportSource @emotion/react */
import { Grid, MenuItem, TextField } from '@material-ui/core';

/** ローカルライブラリ */
import { formMargin } from '../common/formStyle';

/**
 * 効果と効果詳細のコンポーネント
 */
export const Effect = (props: {register: any, effectList: Array<any>}) => {
    return(
        <>
            <TextField
                fullWidth
                select
                size='small'
                variant='outlined'
                label='効果'
                css={formMargin}
                id='effect'
                helperText='効果を指定してください'
                defaultValue=''
                {...props.register('effect')}
            >
                <MenuItem value=''>指定無し</MenuItem>
                {props.effectList.map(effect => (
                    /**
                     * 効果を追加
                     * 0 : 効果ID
                     * 1 : 効果名
                     */
                    <MenuItem value={effect[0]} key={effect[0]}>{effect[1]}</MenuItem>
                ))}
            </TextField>
            {/* 効果詳細条件 */}
            <Grid container css={formMargin}>
                <Grid item xs={5}>
                    <TextField
                        fullWidth
                        label='値'
                        size='small'
                        variant='outlined'
                        type='number'
                        id='effectVal'
                        helperText='効果の値'
                        {...props.register('effectVal')}
                    />
                </Grid>
                <Grid item xs={2}></Grid>
                    <Grid item xs={5}>
                        <TextField
                            fullWidth
                            select
                            size='small'
                            variant='outlined'
                            id='range'
                            helperText='以上 or 以下'
                            defaultValue=''
                            {...props.register('range')}
                        >
                            <MenuItem value=''></MenuItem>
                            <MenuItem value='1'>以上</MenuItem>
                            <MenuItem value='2'>以下</MenuItem>
                        </TextField>
                </Grid>
            </Grid>
        </>
    );
}