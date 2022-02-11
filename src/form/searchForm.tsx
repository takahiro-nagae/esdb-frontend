/** 標準ライブラリ */
import { useEffect, useState } from 'react';
import axios from 'axios';

/** サードパーティーライブラリ */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { Grid } from '@material-ui/core';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';

/** ローカルライブラリ */
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
/** 検索ボタン */
    const searchBtn = css ({
        width: '100%'
    });

    /** キャンセルボタン */
    const cancelStyle = css({
        color: '#fff',
    });

    /** キャンセルボタン右よせ */
    const rightCanlcel = css({
        textAlign: 'right'
    });

    // ********************
    // state
    // ********************
    /** 効果 */
    const [effectList, setEffectList] = useState([]);
    /** ランク */
    const [rankList, setRankList] = useState([]);
    /**　対象 */
    const [targetList, setTargetList] =  useState([]);
    /** ランクの現在値:初期値は一致 */
    const [rankRange, setRankRange] = useState('1');
    /** 位置の現在地：初期値は指定無し */
    const [potision, setPosition] = useState('0');

    const navigate = useNavigate();

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
    const { register, handleSubmit } = useForm<FormData>({});

    /** フォームの処理成功 */
    const handleOnSubmit: SubmitHandler<FormData> = (values) => {
        values.position = potision;
        values.rankRange = rankRange;

        navigate({
            pathname: '/detail',
            search: `?${createSearchParams(values)}`,
          });
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
            <Position register={register} potision={potision} setPosition={setPosition} />
            {/* ランク */}
            <Rank register={register} rankList={rankList} rankRange={rankRange} setRankRange={setRankRange} />
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