import { IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {
  bindMenu,
  bindTrigger,
  usePopupState,
} from 'material-ui-popup-state/hooks';
import { NavLink } from 'react-router-dom';

import styles from './AppMenu.module.css';
import { AppMenuData } from './MenuData';

const Component: React.FC = () => {
  const popupState = usePopupState({ variant: 'popover', popupId: '' });
  return (
    <>
      <IconButton {...bindTrigger(popupState)}>
        <MenuIcon />
      </IconButton>
      <Menu {...bindMenu(popupState)}>
        {AppMenuData.map(appMenu => (
          <NavLink
            key={appMenu.text}
            to={appMenu.url!}
            className={({ isActive }) =>
              isActive ? styles.activated : styles.inactivated
            }
          >
            <MenuItem onClick={popupState.close}>
              {appMenu.icon}
              <span className={styles.text}>{appMenu.text}</span>
            </MenuItem>
          </NavLink>
        ))}
      </Menu>
    </>
  );
};

export const AppMenu = Component;
