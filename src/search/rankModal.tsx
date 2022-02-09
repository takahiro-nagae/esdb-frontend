/** 標準ライブラリ */
import { useState } from "react";

/** サードパーティーライブラリ */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

/**
 * ランクモーダル
 */
export const RankModal = (props: {rank: string}) => {

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
        width: '85%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#383B40',
        padding: '16px'
    });

    /** 説明文 */
    const description = css ({
        paddingLeft: '20px',
        color: '#fff'
    });

    /** ランク表示 */
    const dispRank = css ({
        color: '#f00',
        fontSize: '18px',
        fontWeight: 'bold'
    });

    /** テーブルヘッダー */
    const tableHeader = css ({
        backgroundColor: '#0854a3',
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
                <p css={description}>ランク：<span css={dispRank}>{props.rank}</span></p>
                <p css={description}>INT:200時　単位：%</p>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell css={tableHeader}>曜日</TableCell>
                            <TableCell css={tableHeader}>通常</TableCell>
                            <TableCell css={tableHeader}>エリート</TableCell>
                            <TableCell css={tableHeader}>エルフ</TableCell>
                            <TableCell css={tableHeader}>古代</TableCell>
                            <TableCell css={tableHeader}>稀代</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>木曜日以外</TableCell>
                            <TableCell>90</TableCell>
                            <TableCell>90</TableCell>
                            <TableCell>90</TableCell>
                            <TableCell>90</TableCell>
                            <TableCell>90</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>木曜日</TableCell>
                            <TableCell>90</TableCell>
                            <TableCell>90</TableCell>
                            <TableCell>90</TableCell>
                            <TableCell>90</TableCell>
                            <TableCell>90</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Box>
            </Modal>
        </>
    );
}