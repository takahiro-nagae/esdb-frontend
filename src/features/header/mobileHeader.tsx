/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import { AppMenu } from './menu/appMenu';
import { FreeSearch } from './searchBar/freeSearch';

/** ヘッダーリンクのスタイル */
const headerLinkStyle = css({
    color: '#fff',
    height: '32px',
    '&:hover': {
        opacity: '0.8',
        transitionDuration: '0.5s',
    },
    textDecoration: 'none',
    whiteSpace: 'nowrap',
});

const Component = () => {
    return (
        <>
            <AppBar position='fixed'>
                <Toolbar>
                    <Link to='/' css={headerLinkStyle} style={{ marginRight: '12px' }}>
                            <img alt='header' src='/icon.png' width='32px' height='32px' />
                    </Link>
                    <FreeSearch />
                    <AppMenu />
                </Toolbar>
            </AppBar>
        </>
    );
};

export const MobileHeader = Component;