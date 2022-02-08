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
        width:'50%',
        [props.mq[0]]: {
            width: '100%'
        },
        padding: '10px',
        border: '1px solid #424242',
        borderRadius: '999px',
        backgroundColor: '#424242',
    });

    /** 検索入力欄 */
    const searchBarInput = css({
        width:'50%',
        '&:focus': {
            outlineWidth: '0'
        },
        [props.mq[0]]: {
            width: '100%'
        },
        border: 'none !important',
        padding: '8px',
        backgroundColor: '#424242',
        color: '#fff',
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
                    name="search"
                />
                <IconButton size="small" aria-label="search">
                    <SearchIcon fontSize="small" css={buttonStyle} />
                </IconButton>
            </div>
        </div>
        </>
    );
}