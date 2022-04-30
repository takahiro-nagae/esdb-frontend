/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

/** 各フォームのmargin */
export const formMarginStyle = css({
    marginBottom : '12px'
});

/** ラベルのスタイル */
export const labelStyle = css ({
    color: 'rgba(255,255,255,0.7)',
});

/** セレクトボックスのスタイル */
export const selectBoxStyle = css({
    background: '#fff',
    '&:hover': {
        borderColor: 'rgba(255, 255, 255, 0.7)',
        background: '#fff',
    },
    borderColor: 'rgba(255, 255, 255, 0.5)',
    '&.Mui-selected': {
        background: '#3680cd',
        color: '#fff',
    },
    '&.Mui-selected:hover': {
        background: '#3680cd',
        color: '#fff',
    },
});