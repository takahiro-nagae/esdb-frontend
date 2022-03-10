/** 標準ライブラリ */
import ReactDOM from 'react-dom';

/** サードパーティーライブラリ */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from "@mui/material/GlobalStyles";

/** ローカルライブラリ */
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Home } from './home/home';
import { Header } from './common/header';
import { Footer } from './common/footer';
import { About } from './static/about';
import { AppHistory } from './static/appHistory';
import { SearchList } from './search/searchList';
import { PrivacyPolicy } from './static/privacyPolicy';
import { RankIndex } from './search//rank/rankIndex';

/**
 * テーマ
 */
const myTheme = createTheme({
  palette: {
    primary: {
      main: "#007DFF",
      dark: "#1F2023",
      light: "#94c9f7"
    },
    type: "dark",
  },
});

/** ブレークポイント */
const breakpoints = [600];
const mq = breakpoints.map(
    bp => `@media (max-width: ${bp}px)`
);

/** 最大幅 */
const maxWidth = css({
  maxWidth: '1200px',
  margin: 'auto'
});


ReactDOM.render(
  <ThemeProvider theme={myTheme}>
    <GlobalStyles
    styles={{
      h2: {
        background : myTheme.palette.primary.main,
        padding: "8px"
      },
      h3: {
        borderLeft: '4px solid' + myTheme.palette.primary.main,
        paddingLeft: '20px'
      },
      a: {
        color: myTheme.palette.primary.light,
        textDecoration: 'none'
      },
      '.MuiAppBar-colorPrimary': {
        background: myTheme.palette.primary.dark
      },
      footer: {
        background: myTheme.palette.primary.dark
      },
      body: {
        paddingTop: '60px',
        paddingBottom: '60px',
      },
      '.MuiFilledInput-underline:after': {
        borderBottomColor: myTheme.palette.primary.light,  // ホバー時のボーダー色
      },
      '.MuiFormLabel-root.Mui-focused': {
        color: myTheme.palette.primary.light,    // フォーカス時のラベルカラー
      },
      '.css-5tpxv9-MuiButtonBase-root-MuiToggleButton-root-RankForm': {
        fontSize: '0.78rem !important'
      }
    }}/>
    <Router>
      <Header />
      <Routes>
        {/* ホーム */}
        <Route path="/" element={<Home mq={mq} maxWidth={maxWidth} />} />
        {/* 更新履歴 */}
        <Route path='history' element={<AppHistory />} />
        {/* 当サイトについて */}
        <Route path="about" element={<About />} />
        {/* プライバシーポリシー */}
        <Route path='privacyPolicy' element={<PrivacyPolicy />} />
        {/* 検索結果 */}
        <Route path='detail' element={<SearchList maxWidth={maxWidth} breakPoint={breakpoints[0]} />} />
        {/* ランク（検索インデックス用） */}
        <Route path='rank/:rank' element={<RankIndex />} />
      </Routes>
      <Footer />
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
