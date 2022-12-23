import { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { Grid } from '@material-ui/core';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { EnchantName } from './component/enchantName';
import { Effect } from './component/effect';
import { Position } from './component/position';
import { Rank } from './component/rank';
import { Target } from './component/target';
import { FormType } from './common/type/formType';
import { EffectType } from './common/type/effectType';
import { RankType } from './common/type/rankType';
import { TargetType } from './common/type/targetType';
import { getInitData } from "../api/backendApi";

/**
 * 検索フォームの詳細コンポーネント
 * @returns SearchForm { JSX.Element }
 */
export const SearchForm = () => {
    /** 効果 */
    const [ effectList, setEffectList ] = useState<Array<EffectType>>([]);
    /** 位置の現在地：初期値は指定無し */
    const [ potision, setPosition ] = useState('0');
    /** ランク */
    const [ rankList, setRankList ] = useState<Array<RankType>>([]);
    /** ランクの現在値:初期値は一致 */
    const [ rankRange, setRankRange ] = useState('1');
    /**　対象 */
    const [ targetList, setTargetList ] = useState<Array<TargetType>>([]);

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<FormType>({});

    /** 検索ボタン */
    const searchBtnStyle = css({
        width: '100%'
    });

    useEffect(() => {
        const res = async () => getInitData();

        res().then((res) => {
            setEffectList(res.effect);
            setRankList(res.rank);
            setTargetList(res.target);
        });
    }, []);

    /** フォームの送信処理ハンドラ */
    const handleOnSubmit: SubmitHandler<FormType> = (values) => {
        values.rankRange = rankRange;
        values.position = potision;

        navigate({
            pathname: '/detail',
            search: `?${createSearchParams(values)}`,
        });
    }

    /** フォームのエラーハンドラ */
    const handleOnError: SubmitErrorHandler<FormType> = (errors) => {
        console.log(errors)
    }

    return (
        <form onSubmit={handleSubmit(handleOnSubmit, handleOnError)}>
            <EnchantName register={register}/>
            <Effect
                effectList={effectList}
                register={register}
            />
            <Position
                register={register}
                setPosition={setPosition}
                potision={potision}
            />
            <Rank
                rankList={rankList}
                rankRange={rankRange}
                register={register}
                setRankRange={setRankRange}/>
            <Target
                register={register}
                targetList={targetList}
            />
            <Grid container alignItems='center'>
                <Grid item xs={12}>
                    <Button
                        css={searchBtnStyle}
                        endIcon={<SearchIcon/>}
                        type='submit'
                        variant='contained'
                    >
                        検索
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}