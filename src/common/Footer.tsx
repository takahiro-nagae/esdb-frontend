import Box from '@mui/material/Box';

import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <Box>
      <footer className={styles.footer}>
        <small>&copy; 2022Kumario All rights reserved</small>
      </footer>
    </Box>
  );
};
