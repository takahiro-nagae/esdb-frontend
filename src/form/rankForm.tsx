import { Grid, MenuItem, TextField } from "@material-ui/core";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

/**
 * ランクコンポーネント
 */
export const RankForm = (props: {rankList: Array<any>,
    formMargin: any, selectBox: any, labelStyle: any}) => {

    /** ランクの現在値:初期値は一致 */
    const [rankValue, setRankValue] = useState('1');

    /** ランクの現在値変更 */
    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newRankValue: string | null,
      ) => {
        if (newRankValue !== null) {
            setRankValue(newRankValue);
        }
    };

    return(
        <>
            <label css={props.labelStyle} ><small>ランク</small></label>
            <Grid container css={props.formMargin}>
                {/* ランクセレクトボックス */}
                <Grid item xs={4}>
                    <TextField
                        fullWidth
                        select
                        size="small"
                        variant="outlined"
                        css={props.formMargin}
                        name="rank"
                    >
                        <MenuItem value="">指定無し</MenuItem>
                        {props.rankList.map(rank => (
                            /**
                             * ランクを追加
                             * 0 : ランク
                             */
                            <MenuItem value={rank[0]}>{rank[0]}</MenuItem>
                        ))}
                    </TextField>
                </Grid>
                {/* 余白 */}
                <Grid item xs={1} />
                {/* ランク一致 */}
                <Grid item xs={7}>
                    <ToggleButtonGroup
                        fullWidth
                        exclusive
                        size="small"
                        css={props.formMargin}
                        onChange={handleAlignment}
                        value={rankValue}
                        aria-label="rankRange"
                    >
                        <ToggleButton
                            css={props.selectBox}
                            value="1"
                            aria-label="1"
                        >
                            <span>一致</span>
                        </ToggleButton>
                        <ToggleButton
                            css={props.selectBox}
                            value="2"
                            aria-label="2"
                        >
                            <span>以上</span>
                        </ToggleButton>
                        <ToggleButton
                            css={props.selectBox}
                            value="3"
                            aria-label="3"
                        >
                            <span>以下</span>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
            </Grid>
        </>
    );
}