/** 標準ライブラリ */
import { useEffect, useState } from 'react';
import axios from 'axios';
/** サードパーティーライブラリ */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { Grid, MenuItem, TextField } from '@material-ui/core';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';

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
    // CSS
    // ********************
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
    // フォーム
    // ********************
    /** フォームの型 */
    type ValuesType = {
        /** エンチャント名 */
        enchantName: string,
        /** 効果 */
        effect: string,
        /** 効果の値 */
        effectVal: number,
        /** 効果の範囲 */
        range: string,
        /** 位置 */
        position: string,
        /** ランク */
        rank: string,
        /** 効果範囲 */
        rankRange: string,
        /** 対象 */
        target: string
    }

    const { register, handleSubmit, formState } = useForm<any>({
        mode: 'onSubmit',
        defaultValues: {
            /** 位置初期値：指定無し */
            position: '0',
            /** ランク：一致 */
            rankRange: '1'
        }
      })

    const handleOnSubmit: SubmitHandler<ValuesType> = (values) => {
        console.log(values)
      }

    const handleOnError: SubmitErrorHandler<ValuesType> = (errors) => {
        console.log(errors)
    }

    /** 位置の現在地：初期値は指定無し */
    const [positionValue, setPositionValue] = useState('0');

    const handlePosition = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
      ) => {
        if (newAlignment !== null) {
            setPositionValue(newAlignment);
            register('position');
        }
    };

    /** ランクの現在値:初期値は一致 */
    const [rankValue, setRankValue] = useState('1');

    /** ランクの現在値変更 */
    const handleRank = (
        event: React.MouseEvent<HTMLElement>,
        newRankValue: string | null,
        ) => {
        if (newRankValue !== null) {
            setRankValue(newRankValue);
            register('rankRange');
        }
    };

    return(
        <form onSubmit={handleSubmit(handleOnSubmit, handleOnError)}>
            {/* エンチャント名 */}
            <TextField
                fullWidth
                size='small'
                variant='outlined'
                label='エンチャント名'
                id='enchantName'
                css={formMargin}
                helperText='エンチャント名を入力してください'
                {...register('enchantName')}
            />
            {/* 効果 */}
            <TextField
                fullWidth
                select
                size='small'
                variant='outlined'
                label='効果'
                css={formMargin}
                id='effect'
                helperText='効果を指定してください'
                defaultValue=''
                {...register('ffect')}
            >
                <MenuItem value=''>指定無し</MenuItem>
                {effectList.map(effect => (
                    /**
                     * 効果を追加
                     * 0 : 効果ID
                     * 1 : 効果名
                     */
                    <MenuItem value={effect[0]} key={effect[0]}>{effect[1]}</MenuItem>
                ))}
            </TextField>
            {/* 効果詳細条件 */}
            <Grid container css={formMargin}>
                <Grid item xs={5}>
                    <TextField
                        fullWidth
                        label='値'
                        size='small'
                        variant='outlined'
                        type='number'
                        id='effectVal'
                        helperText='効果の値'
                        {...register('effectVal')}
                    />
                </Grid>
                <Grid item xs={2}></Grid>
                    <Grid item xs={5}>
                        <TextField
                            fullWidth
                            select
                            size='small'
                            variant='outlined'
                            id='range'
                            helperText='以上 or 以下'
                            defaultValue=''
                            {...register('range')}
                        >
                            <MenuItem value=''></MenuItem>
                            <MenuItem value='1'>以上</MenuItem>
                            <MenuItem value='2'>以下</MenuItem>
                        </TextField>
                </Grid>
            </Grid>
            {/* 位置 */}
            <label css={labelStyle}><small>位置</small></label>
            <ToggleButtonGroup
                fullWidth
                exclusive
                size='small'
                css={formMargin}
                onChange={handlePosition}
                value={positionValue}
                aria-label='position'
            >
                <ToggleButton
                    css={selectBox}
                    value='0'
                    aria-label='0'
                >
                    <span>指定無し</span>
                </ToggleButton>
                <ToggleButton
                    css={selectBox}
                    value='1'
                    aria-label='1'
                >
                    <span>接頭</span>
                </ToggleButton>
                <ToggleButton
                    css={selectBox}
                    value='2'
                    aria-label='2'
                >
                    <span>接尾</span>
                </ToggleButton>
            </ToggleButtonGroup>
            {/* ランク */}
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
                        {...register('rank')}
                    >
                        <MenuItem value=''>指定無し</MenuItem>
                        {rankList.map(rank => (
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
                        value={rankValue}
                        aria-label='rankRange'
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
            {/* 対象 */}
            <TextField
                fullWidth
                select
                size='small'
                variant='outlined'
                label='対象'
                css={formMargin}
                id='target'
                helperText='対象を指定してください'
                defaultValue=''
                {...register('target')}
            >
                <MenuItem value=''>指定無し</MenuItem>
                {targetList.map(target => (
                    /**
                     * 対象を追加
                     * 0 : 対象コード
                     * 1 : 対象名
                     */
                    <MenuItem value={target[0]} key={target[0]}>{target[1]}</MenuItem>
                ))}
            </TextField>
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