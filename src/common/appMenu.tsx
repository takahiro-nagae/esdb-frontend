/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { NavLink } from 'react-router-dom'
import { IconButton, Menu, MenuItem } from '@material-ui/core'
import MenuIcon from "@material-ui/icons/Menu";
import { bindMenu, bindTrigger, usePopupState } from 'material-ui-popup-state/hooks'
import { AppMenuData } from './data/appMenuData';

/**
 * アプリケーションのメニューコンポーネント
 * @returns AppMenu { EmotionJSX.Element }
 */
export const AppMenu = () => {

    /** メニューのテキスト */
    const textStyle = css({
        verticalAlign: 'middle',
        marginLeft: '10px'
    });

    /** メニューのactiveStyle */
    const activatedStyle = {
        color: "#007DFF"
    };

    /** メニューnonactive */
    const inactivatedStyle = {
        color: "#fff"
    };

    /** ポップの状態 */
    const popupState = usePopupState({ variant: 'popover', popupId: '' })

    return (
        <>
            <IconButton {...bindTrigger(popupState)} >
                <MenuIcon/>
            </ IconButton>
            <Menu {...bindMenu(popupState)}>
                {AppMenuData.map(appMenu => (
                    <NavLink
                        key={appMenu.text}
                        to={appMenu.url!}
                        style={({ isActive }) => isActive ? activatedStyle : inactivatedStyle}>
                        <MenuItem onClick={popupState.close}>
                            {appMenu.icon}
                            <span css={textStyle}>{appMenu.text}</span>
                        </MenuItem>
                    </NavLink>
                ))}
            </Menu>
        </>
    )
}