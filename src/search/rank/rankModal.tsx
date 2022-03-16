/** 標準ライブラリ */
import { useEffect, useState } from "react";

/** サードパーティーライブラリ */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Rank } from "./rank";

/**
 * ランクモーダル
 */
export const RankModal = (props: {rank: string}) => {

    /** ランクオープンのフラグ */
    const [open, setOpen] = useState(false);
    /** ランクの取得データ */
    const [rankData, setRankData] = useState({
        rank: '-',
        normal_rate: '-',
        elite_rate: '-',
        elf_rate: '-',
        ancient_rate: '-',
        rare_holy_rate: '-',
        normal_rate_thu: '-',
        elite_rate_thu: '-',
        elf_rate_thu: '-',
        ancient_rate_thu: '-',
        rare_holy_rate_thu: '-'
    });

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
        width: '85%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#27292D',
        padding: '16px'
    });

    return(
        <>
            <Button onClick={handleOpen}>{props.rank}</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
            <Box css={modalBox}>
                <Rank rank={props.rank} />
            </Box>
            </Modal>
        </>
    );
}