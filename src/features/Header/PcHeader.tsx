import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { AppMenu } from './components/Menu/AppMenu';
import { FreeSearch } from './components/SearchBar/FreeSearch';
import styles from './PcHeader.module.css';

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
