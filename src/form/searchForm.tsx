/** 標準ライブラリ */
import { useEffect, useState } from 'react';
import axios from 'axios';
/** サードパーティーライブラリ */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Grid } from '@material-ui/core';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';

import { cancelStyle, rightCanlcel, searchBtn } from './common/formStyle';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { EnchantName } from './component/enchantName';
import { Effect } from './component/effect';
import { Position } from './component/position';
import { Rank } from './component/rank';
import { Target } from './component/target';
import { FormData } from './common/formData';

/**
 * 検索フォーム
 */
export const SearchForm = () => {
    // ********************
    // state
    // ********************
    /** 効果 */
    const [effectList, setEffectList] = useState([]);
    /** ランク */
    const [rankList, setRankList] = useState([]);
    /**　対象 */
    const [targetList, setTargetList] =  useState([]);

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

    // ********************
    // フォームの設定
    // ********************
    /** 初期設定 */
    const { register, handleSubmit, formState } = useForm<FormData>({
        mode: 'onSubmit',
        defaultValues: {
            /** 位置初期値：指定無し */
            position: '0',
            /** ランク：一致 */
            rankRange: '1'
        }
    });

    /** フォームの処理成功 */
    const handleOnSubmit: SubmitHandler<FormData> = (values) => {
        console.log(values)
    }

    /** フォームの処理失敗 */
    const handleOnError: SubmitErrorHandler<FormData> = (errors) => {
        console.log(errors)
    }

    return(
        <form onSubmit={handleSubmit(handleOnSubmit, handleOnError)}>
            {/* エンチャント名 */}
            <EnchantName register={register} />
            {/* 効果 */}
            <Effect register={register} effectList={effectList} />
            {/* 位置 */}
            <Position register={register} />
            {/* ランク */}
            <Rank register={register} rankList={rankList} />
            {/* 対象 */}
            <Target register={register} targetList={targetList} />
            {/* ボタン部 */}
            <Grid container alignItems='center'>
                <Grid item xs={10}>
                    <Button variant='contained' type='submit' color='primary' css={searchBtn} endIcon={<SearchIcon />}>検索</Button>
                </Grid>
                <Grid item xs={2} css={rightCanlcel}>
                    <IconButton aria-label='delete' size='large' css={cancelStyle}>
                        <DeleteIcon fontSize='inherit' />
                    </IconButton>
                </Grid>
            </Grid>
        </form>
    );
}