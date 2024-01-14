import { css } from "@emotion/react";

// /** ローディング外周の要素 */
export const loadingContainerStyle = css({
    backgroundColor: '#27292D',
    height: '100%',
    width: '100%',
    position: 'fixed',
    zIndex: 999
});

/** ローディングの表示位置 */
export const verticalCenterStyle = css({
    position: 'absolute',
    left: '50%',
    top: '50%',
});