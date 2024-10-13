import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import { BrowserView, MobileView } from 'react-device-detect';
import './index.css';
import { Home } from './features/home/Home';
import { Footer } from './common/footer';
import { About } from './features/static/about';
import { AppHistory } from './features/static/appHistory';
import { SearchList } from './features/search/SearchList';
import { PrivacyPolicy } from './features/static/privacyPolicy';
import { RankIndex } from './features/search/common/component/Rank/Index/RankIndex';
import { DetailIndex } from './features/search/common/component/Detail/Index/DetailIndex';
import { Theme } from './common/theme/theme';
import { DefaultGlobalStyles } from './common/theme/defaultGlobalStyles';
import { createRoot } from 'react-dom/client';
import { PcHeader } from './features/header/pcHeader';
import { MobileHeader } from './features/header/mobileHeader';

const rootElement = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const root = createRoot(rootElement);

root.render(
  <ThemeProvider theme={Theme}>
    <DefaultGlobalStyles />
    <Router>
      <BrowserView>
        <PcHeader />
      </BrowserView>
      <MobileView>
        <MobileHeader />
      </MobileView>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<AppHistory />} path='history' />
        <Route element={<About />} path='about' />
        <Route element={<PrivacyPolicy />} path='privacyPolicy' />
        <Route element={<SearchList isFreeSearch={false} />} path='detail' />
        <Route element={<SearchList isFreeSearch={true} />} path='search' />
        <Route element={<RankIndex />} path='rank/:rank' />
        <Route element={<DetailIndex />} path='detail/:enchant_id' />
      </Routes>
      <Footer />
    </Router>
  </ThemeProvider>,
);
