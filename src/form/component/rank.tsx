/** @jsxImportSource @emotion/react */
import { UseFormRegister } from "react-hook-form";
import { Grid, MenuItem, TextField } from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { formMarginStyle, labelStyle, selectBoxStyle } from "../common/style/formStyle";
import { FormType } from '../common/type/formType';
import { RankType } from "../common/type/rankType";
import { Dispatch, SetStateAction } from "react";

/**
 * ランクのコンポーネント
 * @param props { Array<RankType>, string, UseFormRegister<FormType>, Dispatch<SetStateAction<string>> }
 * @returns Rank { EmotionJSX.Element }
 */
export const Rank = (props: {
    rankList: Array<RankType>,
    rankRange: string,
    register: UseFormRegister<FormType>
    setRankRange: Dispatch<SetStateAction<string>>,
}) => {

    /** ランクの現在値変更 */
    // TODO: formのonChangeを共通化する
    const onChange = (
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
            <Grid container css={formMarginStyle}>
                {/* ランクセレクトボックス */}
                <Grid item xs={4}>
                    <TextField
                        css={formMarginStyle}
                        defaultValue=''
                        fullWidth
                        id='rank'
                        select
                        size='small'
                        variant='outlined'
                        {...props.register('rank')}
                    >
                        <MenuItem value=''>指定無し</MenuItem>
                        {props.rankList.map(rank => (
                            <MenuItem
                                key={rank['rank']}
                                value={rank['rank']}
                            >
                                {rank['rank']}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                {/* 余白 */}
                <Grid item xs={1} />
                {/* ランク一致 */}
                <Grid item xs={7}>
                    <ToggleButtonGroup
                        css={formMarginStyle}
                        fullWidth
                        exclusive
                        size='small'
                        onChange={onChange}
                        value={props.rankRange}
                    >
                        <ToggleButton
                            aria-label='1'
                            css={selectBoxStyle}
                            value='1'
                        >
                            <span>一致</span>
                        </ToggleButton>
                        <ToggleButton
                            aria-label='2'
                            css={selectBoxStyle}
                            value='2'
                        >
                            <span>以上</span>
                        </ToggleButton>
                        <ToggleButton
                            aria-label='3'
                            css={selectBoxStyle}
                            value='3'
                        >
                            <span>以下</span>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
            </Grid>
        </>
    );
}