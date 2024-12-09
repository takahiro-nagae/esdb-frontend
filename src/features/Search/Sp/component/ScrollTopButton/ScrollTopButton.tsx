import { KeyboardDoubleArrowUp } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { animateScroll } from 'react-scroll/modules';

import styles from './ScrollTopButton.module.css';

export const ScrollTopButton: React.FC = () => {
  return (
    <IconButton
      aria-label='scroll to top'
      color='secondary'
      className={styles.topIcon}
      onClick={() => animateScroll.scrollToTop()}
    >
      <KeyboardDoubleArrowUp sx={{ fontSize: 40 }} />
    </IconButton>
  );
};
