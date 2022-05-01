/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import {createSearchParams, useNavigate} from 'react-router-dom';
import {SubmitErrorHandler, SubmitHandler, useForm} from 'react-hook-form';
import {FreeFormType} from '../common/type/freeFormType';
import {maxQueryProperty} from "../../common/theme/layout";

/**
 * 自由検索のコンポーネント
 * @returns FreeSearch { EmotionJSX.Element }
 */
export const FreeSearch = () => {

    const {register, handleSubmit} = useForm<FreeFormType>({});
    const navigate = useNavigate();

    /** ボタン */
    const buttonStyle = css({
        background: '#424242',
        '&:hover': {
            background: '#424242'
        },
        borderRadius: '0',
        color: '#fff',
    });

    /** 検索バー */
    const searchBarStyle = css({
        backgroundColor: '#191919',
        border: '1px solid #424242',
        display: 'flex',
        justifyContent: 'space-between',
        width: '50%',
        [maxQueryProperty]: {
            width: '100%'
        },
    });

    /** 検索フォーム内ブロック */
    const searchBarDisplayStyle = css({
        display: 'flex',
        justifyContent: 'center',
    });

    /** 検索フォームのフレーム */
    const searchFormStyle = css({
        display: 'inline-block',
        width: '100%'
    });

    /** 検索入力欄 */
    const searchBarInputStyle = css({
        backgroundColor: '#191919',
        border: 'none !important',
        color: '#fff',
        paddingLeft: '10px',
        width: '100%',
        '&:focus': {
            outlineWidth: '0'
        },
        [maxQueryProperty]: {
            width: '100%'
        },
    });

    /**
     * フォーム送信時のハンドラ
     * @param values { React.BaseSyntheticEvent<object, any, any> }
     */
    const handleOnSubmit: SubmitHandler<FreeFormType> = (values) => {
        navigate({
            pathname: '/search',
            search: `?${createSearchParams(values)}`,
        });
    }

    /**
     * フォームのエラーハンドラ
     * @param errors { FieldErrors<TFieldValues> }
     */
    const handleOnError: SubmitErrorHandler<FreeFormType> = (errors) => {
        console.log(errors)
    }

    return (
        <>
            <form
                css={searchFormStyle}
                onSubmit={handleSubmit(handleOnSubmit, handleOnError)}
            >
                <div css={searchBarDisplayStyle}>
                    <div css={searchBarStyle}>
                        <input
                            css={searchBarInputStyle}
                            id='search'
                            placeholder="検索"
                            {...register('search')}
                        />
                        <IconButton
                            aria-label="search"
                            css={buttonStyle}
                            type='submit'
                        >
                            <SearchIcon/>
                        </IconButton>
                    </div>
                </div>
            </form>
        </>
    );
}