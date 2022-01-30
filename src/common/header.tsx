import { Fragment, useState } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { AppMenu } from './appMenu';
import { Link } from 'react-router-dom'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

/**
 * ヘッダーコンポーネント
 */
export const Header = () => {
    /** ヘッダーリンクのスタイル */
    const headerLink = css({
        color: '#fff',
        textDecoration: 'none',
        '&:hover': {
            opacity: '0.8',
            transitionDuration: '0.5s'
        }
    });
    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <AppMenu />
                    <Typography>
                        <Link to="/" css={headerLink}>Enchant Search DataBase</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
};
