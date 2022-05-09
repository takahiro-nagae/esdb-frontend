import { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

/**
 * モーダルのコンテナコンポーネント
 * @param props { any, number, any, number }
 * @returns ModalContainer { JSX.Element }
 */
export const ModalContainer = ( props: {
    buttonMsgEl: any,
    height: number,
    openComponent: any
    width: number,
} ) => {

    /** モーダルの開閉状態 */
    const [ isOpen, setIsOpen ] = useState( false );

    /**  モーダルオープン処理 */
    const handleOpen = () => {
        setIsOpen( true );
    };
    /** モーダルクローズ処理 */
    const handleClose = () => {
        setIsOpen( false );
    };

    /** モーダルの外枠 */
    const modalBoxStyle = css( {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: `${ props.width }%`,
        height: `${ props.height }%`,
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#27292D',
        padding: '16px',
        overflowY: 'scroll'
    } );

    return (
        <>
            <Button onClick={ handleOpen }>
                { props.buttonMsgEl }
            </Button>
            <Modal
                onClose={ handleClose }
                open={ isOpen }
            >
                <Box css={ modalBoxStyle }>
                    { props.openComponent }
                </Box>
            </Modal>
        </>
    );
}