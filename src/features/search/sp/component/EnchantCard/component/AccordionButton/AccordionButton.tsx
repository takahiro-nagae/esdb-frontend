import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { IconButton } from '@mui/material';
import styles from './AccordionButton.module.css';

type AccordionButtonProps = {
  open: boolean;
  setOpen: (E: boolean) => void;
};

export const AccordionButton: React.FC<AccordionButtonProps> = ({
  open,
  setOpen,
}) => {
  return (
    <IconButton
      aria-label='expand row'
      className={styles.accIcon}
      onClick={() => setOpen(!open)}
    >
      {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
    </IconButton>
  );
};
