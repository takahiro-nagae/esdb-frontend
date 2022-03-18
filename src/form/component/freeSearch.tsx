/** サードパーティーライブラリ */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

/** ローカルライブラリ */
import { FreeFormData } from '../common/freeFormData';

/**
 * 自由検索のコンポーネント
 */
export const FreeSearch = (props: {mq: any}) => {

    /** 検索の枠 */
    const search = css({
        display: 'flex',
        justifyContent: 'center',
    });

    const searchForm = css({
        display: 'inline-block',
        width: '100%'
    });

    /** 検索バー */
    const searchBar = css({
        display: 'flex',
        justifyContent: 'space-between',
        width:'50%',
        [props.mq[0]]: {
            width: '100%'
        },
        border: '1px solid #424242',
        backgroundColor: '#191919',
    });

    /** 検索入力欄 */
    const searchBarInput = css({
        width:'100%',
        '&:focus': {
            outlineWidth: '0'
        },
        [props.mq[0]]: {
            width: '100%'
        },
        border: 'none !important',
        paddingLeft: '10px',
        backgroundColor: '#191919',
        color: '#fff',
    });

    /** ボタン */
    const buttonStyle = css({
        color: '#fff',
        borderRadius: '0',
        background: '#424242',
        '&:hover': {
            background: '#424242'
        }
    });

    // ********************
    // フォームの設定
    // ********************
    /** 初期設定 */
    const { register, handleSubmit } = useForm<FreeFormData>({});
    const navigate = useNavigate();

    /** フォームの処理成功 */
    const handleOnSubmit: SubmitHandler<FreeFormData> = (values) => {
        navigate({
            pathname: '/search',
            search: `?${createSearchParams(values)}`,
          });
    }

    /** フォームの処理失敗 */
    const handleOnError: SubmitErrorHandler<FreeFormData> = (errors) => {
        console.log(errors)
    }

    return(
        <>
            <form onSubmit={handleSubmit(handleOnSubmit, handleOnError)} css={searchForm} >
                <div css={search}>
                    <div css={searchBar}>
                        <input
                            css={searchBarInput}
                            id='search'
                            placeholder="検索"
                            {...register('search')}
                        />
                        <IconButton aria-label="search" type='submit' css={buttonStyle}>
                            <SearchIcon />
                        </IconButton>
                    </div>
                </div>
            </form>
        </>
    );
}