/** サードパーティーライブラリ */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

/** ラベルのスタイル */
export const labelStyle = css ({
    color: 'rgba(255,255,255,0.7)',
});

/** 各フォームのmargin */
export const formMargin = css({
    marginBottom : '12px'
});

/** セレクトボックスのスタイル */
export const selectBox = css({
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