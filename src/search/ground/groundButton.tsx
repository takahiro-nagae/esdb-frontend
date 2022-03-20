/** 標準ライブラリ */
import { useState } from 'react';

/** サードパーティーライブラリ */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button } from "@mui/material";
import CopyAllIcon from '@mui/icons-material/CopyAll';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { GroundList } from './groundList';

/**
 * 下地検索ボタン
 */
export const GroundButton = (props: { enchant_id: string, rank_ignore_flg: string, rank_seq: number }) => {

    /** ボタンのスタイル */
    const groundButton = css({
        height: '24px',
        width:'88px',
    });

    /** モーダルの外枠 */
    const modalBox = css({
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '95%',
        height: '80%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#27292D',
        padding: '16px',
        overflow: 'scroll'
    });

    const [open, setOpen] = useState(false);

    /**  モーダルオープン処理 */
    const handleOpen = () => {
        setOpen(true);
    };
    /** モーダルクローズ処理 */
    const handleClose = () => {
        setOpen(false);
    };

    return(
        <>
            { props.rank_ignore_flg == '0' && props.rank_seq >= 7 &&
                <>
                    <Button variant='contained' onClick={handleOpen} size="small" endIcon={<CopyAllIcon />} css={groundButton} >
                        <span>下地</span>
                    </Button>
                    <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                        <Box css={modalBox}>
                            <GroundList enchant_id={props.enchant_id} />
                        </Box>
                    </Modal>
                </>
            }
        </>

    );
}