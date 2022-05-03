import { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Rank } from "./rank";

/**
 * ランクモーダルコンテナコンポーネント
 * @param props
 * @returns RankModal { JSX.Element }
 */
export const RankModal = (props: {rank: string}) => {

    // TODO: モーダルの処理自体は共通化したい

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
        backgroundColor: '#27292D',
        left: '50%',
        padding: '16px',
        position: 'absolute',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '85%',
    });

    return(
        <>
            <Button onClick={ handleOpen }>{ props.rank }</Button>
            <Modal
                aria-describedby="modal-modal-description"
                aria-labelledby="modal-modal-title"
                open={ open }
                onClose={ handleClose }
            >
            <Box css={ modalBox }>
                <Rank rank={ props.rank } />
            </Box>
            </Modal>
        </>
    );
}