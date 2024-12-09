import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import styles from './ModalContainer.module.css';
import { UseModal } from './hooks/useModal';

type ModalContainerProps = {
  buttonMsgEl: React.ReactElement | string;
  height: number;
  openComponent: React.ReactElement;
  width: number;
};

export const ModalContainer: React.FC<ModalContainerProps> = ({
  buttonMsgEl,
  height,
  openComponent,
  width,
}) => {
  const { isOpen, handleOpen, handleClose } = UseModal();

  return (
    <>
      <Button onClick={handleOpen}>{buttonMsgEl}</Button>
      <Modal onClose={handleClose} open={isOpen}>
        <Box
          className={styles.modalBox}
          style={{ width: `${width}%`, height: `${height}%` }}
        >
          {openComponent}
        </Box>
      </Modal>
    </>
  );
};
