import { IconButton, Menu, MenuItem } from '@material-ui/core'

import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import HistoryIcon from '@material-ui/icons/History';
import NotesIcon from '@material-ui/icons/Notes';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import {  NavLink } from 'react-router-dom'

/**
 * アプリケーションのメニューコンポーネント
 */
export const AppMenu = () => {

    /** テキストのスタイル */
    const menuBase = css({
        verticalAlign: 'middle'
    });

    const menuText = css({
        verticalAlign: 'middle',
        marginLeft: '10px'
    });

    /** メニューのactiveStyle */
    const actived = {
        color: "#007DFF"
    };

    /** メニューnonactive */
    const nonActive = {
        color: "#fff"
    };

    return(
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <>
                    <IconButton {...bindTrigger(popupState)} >
                        <MenuIcon />
                    </ IconButton>
                    <Menu {...bindMenu(popupState)}>
                        {/* HOME */}
                        <NavLink to="/" style={({isActive}) => isActive ? actived : nonActive } >
                            <MenuItem onClick={popupState.close}>
                                <HomeIcon css={menuBase}></HomeIcon>
                                <span css={menuText}>HOME</span>
                            </MenuItem>
                        </NavLink>
                        {/* 更新履歴 */}
                        <NavLink to="/history" style={({isActive}) => isActive ? actived : nonActive } >
                            <MenuItem onClick={popupState.close}>
                                <HistoryIcon css={menuBase}></HistoryIcon>
                                <span css={menuText}>更新履歴</span>
                            </MenuItem>
                        </NavLink>
                        {/* 当サイトについて */}
                        <NavLink to="/about" style={({isActive}) => isActive ? actived : nonActive } >
                            <MenuItem onClick={popupState.close}>
                                <InfoIcon css={menuBase}></InfoIcon>
                                <span css={menuText}>当サイトについて</span>
                            </MenuItem>
                        </NavLink>
                        {/* プライバシーポリシー */}
                        <NavLink to="/privacyPolicy" style={({isActive}) => isActive ? actived : nonActive } >
                            <MenuItem onClick={popupState.close}>
                                <NotesIcon css={menuBase}></NotesIcon>
                                <span css={menuText}>プライバシーポリシー</span>
                            </MenuItem>
                        </NavLink>
                    </Menu>
                </>
            )}
        </PopupState>
    )
}