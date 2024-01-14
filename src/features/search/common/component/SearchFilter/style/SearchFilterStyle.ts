import { css } from "@emotion/react";
import { isBrowser } from "react-device-detect";

/** フリー検索の外枠 */
export const freeSearchBoxStyle = css({
    backgroundColor: '#1F2023',
    boxSizing: 'border-box',
    paddingRight: '8px',
    paddingTop: '8px',
    position: 'sticky',
    textAlign: 'right',
    width: '100%',
    zIndex: '3',
    height: isBrowser ? '44px' : '56px',
    top: isBrowser ? '64px' : '56px',
    marginTop: isBrowser ? '0' : '-3px',
});

/** 検索入力欄 */
export const freeSearchInputStyle = css({
    backgroundColor: '#191919',
    border: '1px solid #424242',
    color: '#fff',
    height: '32px',
    paddingLeft: '8px',
    width: isBrowser ? '99%' : '95%',
});