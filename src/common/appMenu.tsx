/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import {  NavLink } from 'react-router-dom'
import { IconButton, Menu, MenuItem } from '@material-ui/core'
import MenuIcon from "@material-ui/icons/Menu";
import { usePopupState, bindTrigger, bindMenu } from 'material-ui-popup-state/hooks'
import { AppMenuRow } from './appMenuRow';

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
    const activedStyle = {
        color: "#007DFF"
    };

    /** メニューnonactive */
    const inactivedStyle = {
        color: "#fff"
    };

    /** ポップの状態 */
    const popupState = usePopupState({ variant: 'popover', popupId: '' })

    return(
        <>
            <IconButton {...bindTrigger(popupState)} >
                <MenuIcon />
            </ IconButton>
            <Menu {...bindMenu(popupState)}>
                { AppMenuRow.map(appMenu  => (
                    <NavLink to={ appMenu.url! } style={({ isActive }) => isActive ? activedStyle : inactivedStyle } >
                        <MenuItem onClick={popupState.close}>
                            { appMenu.icon }
                            <span css={textStyle}>{ appMenu.text }</span>
                        </MenuItem>
                    </NavLink>
                ))}
            </Menu>
        </>
    )
}