import { useState } from 'react';

export const UseModal = () => {
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

        return {
            isOpen,
            handleOpen,
            handleClose
        };
};