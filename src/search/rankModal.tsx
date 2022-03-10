/** 標準ライブラリ */
import { useEffect, useState } from "react";

/** サードパーティーライブラリ */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from "axios";
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

    // ********************
    // 初期表示
    // ********************
    useEffect(() => {

        axios.get('https://wd5zeazzd9.execute-api.ap-northeast-1.amazonaws.com/Prod/rank/' + props.rank)
        .then((res) => {
            if(res.data != undefined) {
                // ランクデータをセット
                setRankData(res.data);
            }
        }).catch((error) => {
            console.log(error)
        });
    }, []);

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
                <p css={description}>ランク：<span css={dispRank}>{rankData.rank}</span></p>
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
                            <TableCell>{rankData.normal_rate}</TableCell>
                            <TableCell>{rankData.elite_rate}</TableCell>
                            <TableCell>{rankData.elf_rate}</TableCell>
                            <TableCell>{rankData.ancient_rate}</TableCell>
                            <TableCell>{rankData.rare_holy_rate}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>木曜日</TableCell>
                            <TableCell>{rankData.normal_rate_thu}</TableCell>
                            <TableCell>{rankData.elite_rate_thu}</TableCell>
                            <TableCell>{rankData.elf_rate_thu}</TableCell>
                            <TableCell>{rankData.ancient_rate_thu}</TableCell>
                            <TableCell>{rankData.rare_holy_rate_thu}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Box>
            </Modal>
        </>
    );
}