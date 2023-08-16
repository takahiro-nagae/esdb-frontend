import React from 'react';
import GlobalStyles from "@mui/material/GlobalStyles";
import { Theme } from "./theme";

/**
 * GlobalStyle定義
 * @returns DefaultGlobalStyles { JSX.Element }
 */
export const DefaultGlobalStyles: React.FC = () => {
    return(
        <GlobalStyles
            styles={{
                a: {
                    color: Theme.palette.primary.light,
                    textDecoration: 'none'
                },
                body: {
                    paddingTop: '60px',
                    paddingBottom: '60px',
                },
                footer: {
                    background: Theme.palette.primary.dark
                },
                h2: {
                    background : Theme.palette.primary.main,
                    padding: "8px"
                },
                h3: {
                    borderLeft: '4px solid' + Theme.palette.primary.main,
                    paddingLeft: '20px'
                },
                '.adsbygoogle': {
                    textAlign: 'center',
                    marginTop: "20px"
                },
                '.css-5tpxv9-MuiButtonBase-root-MuiToggleButton-root-RankForm': {
                    fontSize: '0.78rem !important'
                },
                '.MuiAppBar-colorPrimary': {
                    background: Theme.palette.primary.dark
                },
                '.MuiFilledInput-underline:after': {
                    borderBottomColor: Theme.palette.primary.light,  // ホバー時のボーダー色
                },
                '.MuiFormLabel-root.Mui-focused': {
                    color: Theme.palette.primary.light,              // フォーカス時のラベルカラー
                },
            }}
        />
    );
};
