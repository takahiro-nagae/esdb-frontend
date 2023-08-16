/* eslint @typescript-eslint/no-explicit-any: 0 */
import { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { SerializedStyles, css } from '@emotion/react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

type compornentProps = {
    isOpen: boolean;
    handleOpen: any;
    handleClose: any;
    buttonMsgEl: any;
    modalBoxStyle: SerializedStyles;
    openComponent: any;
};

const Component = (props: compornentProps) => {
    return (
        <>
            <Button onClick={props.handleOpen}>{props.buttonMsgEl}</Button>
            <Modal onClose={props.handleClose} open={props.isOpen}>
                <Box css={props.modalBoxStyle}>{props.openComponent}</Box>
            </Modal>
        </>
    );
};

/**
 * モーダルのコンテナコンポーネント
 * @param props { any, number, any, number }
 */
export const ModalContainer = (props: { buttonMsgEl: any; height: number; openComponent: any; width: number }) => {
    /** モーダルの開閉状態 */
    const [isOpen, setIsOpen] = useState(false);

    /**  モーダルオープン処理 */
    const handleOpen = () => {
        setIsOpen(true);
    };
    /** モーダルクローズ処理 */
    const handleClose = () => {
        setIsOpen(false);
    };

    /** モーダルの外枠 */
    const modalBoxStyle = css({
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: `${props.width}%`,
        height: `${props.height}%`,
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#27292D',
        padding: '16px',
        overflowY: 'scroll',
    });

    return(
        <Component
            isOpen={isOpen}
            handleOpen={handleOpen}
            handleClose={handleClose}
            buttonMsgEl={props.buttonMsgEl}
            modalBoxStyle={modalBoxStyle} 
            openComponent={props.openComponent} 
        />
    ); 
};
