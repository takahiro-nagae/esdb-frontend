/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import MediaQuery from 'react-responsive';
import { AppMenu } from './appMenu';
import { FreeSearch } from '../form/component/freeSearch';
import { pcDisplayQuery, spDisplayQuery } from './theme/layout';

/**
 *  ヘッダーコンポーネント
 * @returns Header { EmotionJSX.Element }
 */
export const Header = () => {
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

    return (
        <>
            <AppBar position='fixed'>
                <Toolbar>
                    <MediaQuery query={pcDisplayQuery}>
                        <Typography>
                            <Link to='/' css={headerLinkStyle}>
                                Enchant Search DataBase
                            </Link>
                        </Typography>
                    </MediaQuery>
                    <MediaQuery query={spDisplayQuery}>
                        <Link to='/' css={headerLinkStyle} style={{ marginRight: '12px' }}>
                            <img alt='header' src='/icon.png' width='32px' height='32px' />
                        </Link>
                    </MediaQuery>
                    <FreeSearch />
                    <AppMenu />
                </Toolbar>
            </AppBar>
        </>
    );
};
