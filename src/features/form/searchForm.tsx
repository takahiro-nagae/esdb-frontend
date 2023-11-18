import { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { createSearchParams, useNavigate } from 'react-router-dom';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { Grid } from '@material-ui/core';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { EnchantName } from './component/enchantName';
import { Position } from './component/position';
import { SearchFormInterface } from './common/interface/searchFormInterface';
import { EffectInterface } from './common/interface/effectInterface';
import { RankInterFace } from './common/interface/rankInterFace';
import { TargetInterFace } from './common/interface/targetInterFace';
import { getInitData } from '../../api/backendApi';
import { Effect } from './component/effect';
import { Rank } from './component/rank';
import { Target } from './component/target';
import { searchBtn } from './style/searchFormStyle';

/**
 * 検索フォームの詳細コンポーネント
 * @returns SearchForm { JSX.Element }
 */
export const SearchForm = () => {
    const [ effectList, setEffectList ] = useState<Array<EffectInterface>>([]);
    const [ position, setPosition ] = useState('0');
    const [ rankList, setRankList ] = useState<Array<RankInterFace>>([]);
    const [ rankRange, setRankRange ] = useState('1');
    const [ targetList, setTargetList ] = useState<Array<TargetInterFace>>([]);

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<SearchFormInterface>({});

    useEffect(() => {
        const res = async () => getInitData();

        res().then(res => {
            setEffectList(res.effect);
            setRankList(res.rank);
            setTargetList(res.target);
        });
    }, []);

    /** フォームの送信処理ハンドラ */
    const handleOnSubmit: SubmitHandler<SearchFormInterface> = values => {
        values.rankRange = rankRange;
        values.position = position;

        const params = new URLSearchParams();
        params.append('enchantName', values.enchantName);
        params.append('effect', values.effect);
        params.append('effectVal', values.effectVal);
        params.append('range', values.range);
        params.append('position', values.position);
        params.append('rank', values.rank);
        params.append('rankRange', values.rankRange);
        params.append('target', values.target);

        navigate({
            pathname: '/detail',
            search: `?${createSearchParams(params)}`
        });
    };

    /** フォームのエラーハンドラ */
    const handleOnError: SubmitErrorHandler<SearchFormInterface> = errors => {
        console.log(errors);
    };

    return (
        <form onSubmit={handleSubmit(handleOnSubmit, handleOnError)}>
            <EnchantName register={register} />
            <Effect effectList={effectList} register={register} />
            <Position register={register} setPosition={setPosition} position={position} />
            <Rank rankList={rankList} rankRange={rankRange} register={register} setRankRange={setRankRange} />
            <Target register={register} targetList={targetList} />
            <Grid container alignItems='center'>
                <Grid item xs={12}>
                    <Button css={searchBtn} endIcon={<SearchIcon />} type='submit' variant='contained'>
                        検索
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};
