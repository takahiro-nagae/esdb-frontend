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
 * @param props { UseFormRegister<FormType>, string, Dispatch<SetStateAction<string>> }
 * @returns Rank { EmotionJSX.Element }
 */
export const Rank = (props: {register: UseFormRegister<FormType>
    , rankList: Array<RankType>, rankRange: string, setRankRange: Dispatch<SetStateAction<string>>}) => {

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
                        fullWidth
                        select
                        size='small'
                        variant='outlined'
                        css={formMarginStyle}
                        id='rank'
                        defaultValue=''
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
                        fullWidth
                        exclusive
                        size='small'
                        css={formMarginStyle}
                        onChange={onChange}
                        value={props.rankRange}
                    >
                        <ToggleButton
                            css={selectBoxStyle}
                            value='1'
                            aria-label='1'
                        >
                            <span>一致</span>
                        </ToggleButton>
                        <ToggleButton
                            css={selectBoxStyle}
                            value='2'
                            aria-label='2'
                        >
                            <span>以上</span>
                        </ToggleButton>
                        <ToggleButton
                            css={selectBoxStyle}
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