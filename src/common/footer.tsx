/** サードパーティーライブラリ */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Box from '@mui/material/Box';

/**
 * フッターコンポーネント
 */
export const Footer = () => {
    /** footerStyle */
    const footer = css({
        boxSizing: 'border-box',
        width: "100%",
        position: "fixed",
        color: '#fff',
        bottom: 0,
        padding: '10px',
        textAlign: 'right'
    });

    return(
        <Box>
            <footer css={footer} ><small>&copy; 2022Kumario All rights reserved</small></footer>
        </Box>
    );
}