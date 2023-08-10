/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Box from '@mui/material/Box';

const footerStyle = css({
    bottom: 0,
    boxSizing: 'border-box',
    color: '#fff',
    textAlign: 'right',
    position: 'fixed',
    padding: '10px',
    width: '100%',
});

/**
 * フッターコンポーネント
 */
const Component = () => {
    return (
        <Box>
            <footer css={footerStyle}>
                <small>&copy; 2022Kumario All rights reserved</small>
            </footer>
        </Box>
    );
};

export const Footer = Component;