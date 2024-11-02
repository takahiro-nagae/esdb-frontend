import { AppBar, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';

import styles from './MobileHeader.module.css';
import { AppMenu } from './components/Menu/AppMenu';
import { FreeSearch } from './components/SearchBar/FreeSearch';

const Component = () => {
  return (
    <>
      <AppBar position='fixed'>
        <Toolbar>
          <Link
            to='/'
            className={styles.headerLink}
            style={{ marginRight: '12px' }}
          >
            <img alt='header' src='/icon.png' width='32px' height='32px' />
          </Link>
          <FreeSearch />
          <AppMenu />
        </Toolbar>
      </AppBar>
    </>
  );
};

export const MobileHeader = Component;
