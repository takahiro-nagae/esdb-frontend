import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import styles from './PcHeader.module.css';
import { AppMenu } from './components/Menu/AppMenu';
import { FreeSearch } from './components/SearchBar/FreeSearch';

const Component: React.FC = () => {
  return (
    <>
      <AppBar position='fixed'>
        <Toolbar>
          <Typography>
            <Link to='/' className={styles.headerLink}>
              Enchant Search DataBase
            </Link>
          </Typography>
          <FreeSearch />
          <AppMenu />
        </Toolbar>
      </AppBar>
    </>
  );
};

export const PcHeader = Component;
