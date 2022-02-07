import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { Grid } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const ButtonForm = () => {

    /** 検索ボタン */
    const searchBtn = css ({
        width: '100%'
    });

    /** キャンセルボタン */
    const cancelStyle = css({
        color: '#fff',
    });

    /** キャンセルボタン右よせ */
    const rightCanlcel = css({
        textAlign: 'right'
    });

    // /** 検索ボタン */
    // let navigate = useNavigate();
    // const search = () => {
    //     navigate('/detail');
    // }

    return(
        <Grid container alignItems='center'>
            <Grid item xs={10}>
                <Button variant="contained" type='submit' color="primary" css={searchBtn} endIcon={<SearchIcon />}>検索</Button>
            </Grid>
            <Grid item xs={2} css={rightCanlcel}>
                <IconButton aria-label="delete" size="large" css={cancelStyle}>
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </Grid>
        </Grid>
    );
}