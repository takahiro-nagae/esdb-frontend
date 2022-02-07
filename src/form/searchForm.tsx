import { Box, Grid, Paper } from "@material-ui/core";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { PositionForm } from "./positionForm";
import { EffectForm } from "./effectForm";
import { NameForm } from "./nameForm";
import { RankForm } from "./rankForm";
import { TargetForm } from "./targetForm";
import { ButtonForm } from "./buttonForm";
import { FreeSearch } from "./freeSearch";
import { useEffect, useState } from "react";
import axios from "axios";

/**
 * 検索フォームコンポーネント
 */
export const SearchForm = (props: {mq: any, maxWidth: any}) => {

    /** 効果 */
    const [effectList, setEffectList] = useState([]);
    /** ランク */
    const [rankList, setRankList] = useState([]);
    /**　対象 */
    const [targetList, setTargetList] =  useState([]);

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

    // ********************
    // 初期表示
    // ********************
    useEffect(() => {
        // フォームデータ
        axios.get('https://wd5zeazzd9.execute-api.ap-northeast-1.amazonaws.com/Prod/')
        .then((res) => {
            if(res.data != undefined) {
                // 効果
                setEffectList(res.data.effect);
                // ランク
                setRankList(res.data.rank);
                // 対象
                setTargetList(res.data.target);
            }
        });
    }, []);

    return(
        <Box sx={{ mt: 3}}>
            <Grid container justifyContent="center" css={props.maxWidth}>
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
                                    <EffectForm effectList={effectList} formMargin={formMargin} />
                                    {/* 位置 */}
                                    <PositionForm formMargin={formMargin} selectBox={selectBox} labelStyle={labelStyle} />
                                    {/* ランク */}
                                    <RankForm rankList={rankList} formMargin={formMargin} selectBox={selectBox} labelStyle={labelStyle} />
                                    {/* 対象 */}
                                    <TargetForm targetList={targetList} formMargin={formMargin} />
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