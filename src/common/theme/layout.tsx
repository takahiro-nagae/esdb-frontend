/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

/** ブレークポイント */
const breakpoint = 600;

export const maxQueryProperty = `@media (max-width: ${breakpoint}px)`;

/** PC版ブレークポイント */
export const pcDisplayQuery = `(max-width:" ${breakpoint}px)`;
/** スマホ版ブレークポイント */
export const spDisplayQuery = `(min-width: ${breakpoint}px)`;

/** 最大幅 */
export const maxWidthStyle = css({
    maxWidth: '1200px',
    margin: 'auto'
});