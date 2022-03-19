/** サードパーティーライブラリ */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button } from "@mui/material";
import CopyAllIcon from '@mui/icons-material/CopyAll';

export const GroundButton = (props: { enchant_id: string, rank_ignore_flg: string, rank_seq: number }) => {

    const groundButton = css({
        height: '24px',
        width:'88px',
    });

    return(
        <>
            { props.rank_ignore_flg == '0' && props.rank_seq >= 7 &&
                <Button variant='contained' type='submit' size="small" endIcon={<CopyAllIcon />} css={groundButton} >
                    <span>下地</span>
                </Button>
            }
        </>

    );
}