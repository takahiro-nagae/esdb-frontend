/** 標準ライブラリ */
import { useState } from "react";

/** サードパーティーライブラリ */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

/** ローカルライブラリ */
import { Detail } from "./detail";

export const DetailModal = (props: {enchant_id: string, count: number}) => {
    /** ランクオープンのフラグ */
    const [open, setOpen] = useState(false);

    /**  モーダルオープン処理 */
    const handleOpen = () => {
      setOpen(true);
    };
    /** モーダルクローズ処理 */
    const handleClose = () => {
      setOpen(false);
    };

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

    return(
        <>
            <Button onClick={handleOpen}><a><small>&#187;{props.count}件省略しました</small></a></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box css={modalBox}>
                    <Detail enchant_id={props.enchant_id} />
                </Box>
            </Modal>
        </>
    );
}