/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@material-ui/icons/Search';

/**
 * 自由検索のコンポーネント
 */
export const FreeSearch = (props: {mq: any}) => {

    const description = css({
        textAlign: 'center',
        color: '#fff'
    });

    /** 検索の枠 */
    const search = css({
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '32px'
    });

    /** 検索バー */
    const searchBar = css({
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        border: '1px solid #424242',
        borderRadius: '999px',
        backgroundColor: '#424242',
        width:'50%',
        [props.mq[0]]: {
            width: '100%'
        },
    });

    /** 検索入力欄 */
    const searchBarInput = css({
        border: 'none !important',
        backgroundColor: '#424242',
        padding: '8px',
        color: '#fff',
        width:'50%',
        '&:focus': {
            outlineWidth: '0'
        },
        [props.mq[0]]: {
            width: '100%'
        },
    });

    /** ボタン */
    const buttonStyle = css({
        color: '#fff'
    });

    return(
        <>
        <p css={description}>
            キーワード検索
        </p>
        <div css={search}>
        <div css={searchBar}>
            <input
                css={searchBarInput}
                placeholder="Search"
            />
            <IconButton size="small" aria-label="search">
                <SearchIcon fontSize="small" css={buttonStyle} />
            </IconButton>
        </div>
        </div>
        </>
    );
}