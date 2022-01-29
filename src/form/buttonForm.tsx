import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { Grid } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const ButtonForm = () => {

    const searchBtn = css ({
        width: '100%'
    });

    const cancelStyle = css({
        color: '#fff',
        verticalAlign: 'middle'
    });

    return(
        <Grid container alignItems='center'>
            <Grid item xs={10}>
                <Button variant="contained" color="primary" css={searchBtn} endIcon={<SearchIcon />}>検索</Button>
            </Grid>
            <Grid item xs={2}>
                <IconButton aria-label="delete" size="large" css={cancelStyle}>
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </Grid>
        </Grid>
    );
}