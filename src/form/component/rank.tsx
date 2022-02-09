/** サードパーティーライブラリ */
/** @jsxImportSource @emotion/react */
import { UseFormRegister } from "react-hook-form";
import { Grid, MenuItem, TextField } from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

/** 独自ライブラリ */
import { formMargin, labelStyle, selectBox } from "../common/formStyle";
import { FormData } from './../common/formData';

/**
 * ランクのコンポーネント
 */
export const Rank = (props: {register: UseFormRegister<FormData>
    , rankList: Array<any>, rankRange: string, setRankRange: any}) => {

    /** ランクの現在値変更 */
    const handleRank = (
        _event: React.MouseEvent<HTMLElement>,
        newRankValue: string | null,
        ) => {
        if (newRankValue !== null) {
            props.setRankRange(newRankValue);
        }
    };

    return(
        <>
           <label css={labelStyle} ><small>ランク</small></label>
            <Grid container css={formMargin}>
                {/* ランクセレクトボックス */}
                <Grid item xs={4}>
                    <TextField
                        fullWidth
                        select
                        size='small'
                        variant='outlined'
                        css={formMargin}
                        id='rank'
                        defaultValue=''
                        {...props.register('rank')}
                    >
                        <MenuItem value=''>指定無し</MenuItem>
                        {props.rankList.map(rank => (
                            /**
                             * ランクを追加
                             * 0 : ランク
                             */
                            <MenuItem value={rank[0]} key={rank[0]}>{rank[0]}</MenuItem>
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
                        size='small'
                        css={formMargin}
                        onChange={handleRank}
                        value={props.rankRange}
                    >
                        <ToggleButton
                            css={selectBox}
                            value='1'
                            aria-label='1'
                        >
                            <span>一致</span>
                        </ToggleButton>
                        <ToggleButton
                            css={selectBox}
                            value='2'
                            aria-label='2'
                        >
                            <span>以上</span>
                        </ToggleButton>
                        <ToggleButton
                            css={selectBox}
                            value='3'
                            aria-label='3'
                        >
                            <span>以下</span>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
            </Grid>
        </>
    );
}