/** サードパーティーライブラリ */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import MediaQuery from 'react-responsive';

/** ローカルライブラリ */
import { AppMenu } from './appMenu';
import { FreeSearch } from '../form/component/freeSearch';


/**
 * ヘッダーコンポーネント
 */
export const Header = (props: {mq: any, breakPoint: number}) => {
    /** ヘッダーリンクのスタイル */
    const headerLink = css({
        whiteSpace: 'nowrap',
        color: '#fff',
        textDecoration: 'none',
        height: '32px',
        '&:hover': {
            opacity: '0.8',
            transitionDuration: '0.5s'
        }
    });

    const pcSearch = css({
        width: '100%',
        display: 'inline-block'
    });


    /** ブレークポイントクエリ */
    const minQuery = "(min-width:" + props.breakPoint + "px)";
    const maxQuery = "(max-width:" + props.breakPoint + "px)";

    return (
        <>
            <MediaQuery query={minQuery}>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography>
                            <Link to="/" css={headerLink}>Enchant Search DataBase</Link>
                        </Typography>
                        <FreeSearch mq={props.mq} />
                        <AppMenu />
                    </Toolbar>
                </AppBar>
            </MediaQuery>
            <MediaQuery query={maxQuery}>
            <AppBar position="fixed">
                <Toolbar>
                    <Link to="/" css={headerLink} style={{ marginRight: '12px'}}>
                        <img src='icon.png' width="32px" height="32px" />
                    </Link>
                    <FreeSearch mq={props.mq} />
                    <AppMenu />
                </Toolbar>
            </AppBar>
            </MediaQuery>
        </>
    )
};
