/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

/** ブレークポイント */
const breakpoint = 600;

/** PC版メディアクエリ(CSS記載用) */
export const pcQueryProperty = `@media (min-width: ${ breakpoint }px)`;
/** SP版メディアクエリ(CSS記載用) */
export const spQueryProperty = `@media (max-width: ${ breakpoint }px)`;

/** PC版ブレークポイント */
export const pcDisplayQuery = `(min-width: ${ breakpoint }px)`;
/** SP版ブレークポイント */
export const spDisplayQuery = `(max-width: ${ breakpoint }px)`;

/** 最大幅 */
export const maxWidthStyle = css( {
    maxWidth: '1200px',
    margin: 'auto'
} );