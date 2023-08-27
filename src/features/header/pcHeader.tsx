/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
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
                    <Typography>
                        <Link to='/' css={headerLinkStyle}>
                            Enchant Search DataBase
                        </Link>
                    </Typography>
                    <FreeSearch />
                    <AppMenu />
                </Toolbar>
            </AppBar>
        </>
    );
};

export const PcHeader = Component;