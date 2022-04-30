/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import HomeIcon from "@material-ui/icons/Home";
import HistoryIcon from '@material-ui/icons/History';
import InfoIcon from "@material-ui/icons/Info";
import NotesIcon from '@material-ui/icons/Notes';

/** アイコン共通スタイル */
const iconStyle = css({
    verticalAlign: 'middle'
});

/** メニューの各行型定義 */
type AppRowType = Partial<{
    url: string,
    icon: any,
    text: string
}>

/**
 * メニューの各行データ
 * @returns AppMenuData { AppRowType }
 */
export const AppMenuData: Array<AppRowType> = [
    { url: '/', icon: <HomeIcon css={iconStyle}></HomeIcon> , text: "HOME" },
    { url: '/history', icon: <HistoryIcon css={iconStyle}></HistoryIcon>, text: "更新履歴" },
    { url: '/about', icon: <InfoIcon css={iconStyle}></InfoIcon> , text: "当サイトについて" },
    { url: '/privacyPolicy', icon: <NotesIcon css={iconStyle}></NotesIcon> , text: "プライバシーポリシー" },
];