import { Box, Grid, MenuItem, Paper, TextField } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { PositionForm } from "./positionForm";
import { EffectForm } from "./effectForm";
import { NameForm } from "./nameForm";
import { RankForm } from "./rankForm";
import { TargetForm } from "./targetForm";
import { ButtonForm } from "./buttonForm";
import { FreeSearch } from "./freeSearch";

/**
 * 検索フォームコンポーネント
 */
export const SearchForm = (props: {mq: any}) => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            checkBox: false,
            textBox: "",
            pullDown: "",
        },
    });

    /** ラベルのスタイル */
    const labelStyle = css ({
        color: 'rgba(255,255,255,0.7)',
    });

    /** 各フォームのmargin */
    const formMargin = css({
        marginBottom : '12px'
    });

    /** セレクトボックスのスタイル */
    const selectBox = css({
        borderColor: 'rgba(255, 255, 255, 0.5)',
        background: '#fff',
        '&:hover': {
            borderColor: 'rgba(255, 255, 255, 0.7)',
            background: '#fff',
        },
        '&.Mui-selected:hover': {
            background: '#007DFF',
            color: '#fff',
        },
        '&.Mui-selected': {
            background: '#007DFF',
            color: '#fff',
        }
    });
    const maxWidth = css({
       maxWidth: '1200px',
       margin: 'auto'
    });

    return(
        <Box sx={{ mt: 3}}>
            <Grid container justifyContent="center" css={maxWidth}>
                <Grid item xs ={11}>
                    <FreeSearch mq={props.mq}/>
                </Grid>
                <Grid item xs={11}>
                    <Paper>
                        <Box sx={{ p: 2}}>
                            <h3>検索条件</h3>
                            <Box sx={{ mx: 1, my: 4}}>
                                <form>
                                    {/* エンチャント名 */}
                                    <NameForm formMargin={formMargin} />
                                    {/* 効果 */}
                                    <EffectForm formMargin={formMargin} />
                                    {/* 位置 */}
                                    <PositionForm formMargin={formMargin} selectBox={selectBox} labelStyle={labelStyle} />
                                    {/* ランク */}
                                    <RankForm formMargin={formMargin} selectBox={selectBox} labelStyle={labelStyle} />
                                    {/* 対象 */}
                                    <TargetForm formMargin={formMargin} />
                                    {/* ボタン部 */}
                                    <ButtonForm />
                                </form>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};