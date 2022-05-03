import { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button } from "@mui/material";
import CopyAllIcon from '@mui/icons-material/CopyAll';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { GroundList } from './groundList';

/***
 * 下地検索ボタンコンポーネント
 * @param props { string, string, number }
 * @returns GroundButton { JSX.Element}
 */
export const GroundButton = (props: {
    enchant_id: string,
    rank_ignore_flg: string,
    rank_seq: number
}) => {

    /** ボタンのスタイル */
    const groundButtonStyle = css({
        height: '24px',
        width:'88px',
    });

    /** モーダルの外枠 */
    const modalBoxStyle = css({
        backgroundColor: '#27292D',
        height: '80%',
        left: '50%',
        overflow: 'scroll',
        padding: '16px',
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        top: '50%',
        width: '95%',
    });

    /** モーダルオープン */
    const [ open, setOpen ] = useState(false);

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
                    <Button
                        css={groundButtonStyle}
                        endIcon={ <CopyAllIcon /> }
                        onClick={handleOpen}
                        size="small"
                        variant='contained'
                    >
                        <span>下地</span>
                    </Button>
                    <Modal
                        aria-describedby="modal-modal-description"
                        aria-labelledby="modal-modal-title"
                        onClose={handleClose}
                        open={open}
                    >
                        <Box css={modalBoxStyle}>
                            <GroundList enchant_id={props.enchant_id} />
                        </Box>
                    </Modal>
                </>
            }
        </>

    );
}