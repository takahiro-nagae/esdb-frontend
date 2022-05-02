import { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

/** ローカルライブラリ */
import { Detail } from "./detail";

/**
 * 詳細モーダル表示用コンテナコンポーネント
 * @param props { string, number }
 * @returns { JSX.Element }
 */
export const DetailModal = (props: {enchant_id: string, count: number}) => {

    // TODO: モーダル自体は共通のコンポーネントにしたい
    //       そこから派生クラスが生まれるイメージ

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
        width: '95%',  // TODO: 変数になりそう
        height: '80%', // TODO: 変数になりそう
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#27292D',
        padding: '16px',
        overflow: 'scroll'
    });

    return(
        <>
            <Button onClick={ handleOpen }><a><small>&#187;{ props.count }件省略しました</small></a></Button>
            <Modal
                aria-describedby="modal-modal-description"
                aria-labelledby="modal-modal-title"
                onClose={ handleClose }
                open={ open }
            >
                <Box css={modalBox}>
                    <Detail enchant_id={ props.enchant_id } /> // TODO: 変数になりそう
                </Box>
            </Modal>
        </>
    );
}