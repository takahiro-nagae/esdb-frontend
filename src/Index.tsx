import { ThemeProvider } from '@material-ui/core';
import { BrowserView, MobileView } from 'react-device-detect';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css';
import { Footer } from './common/Footer';
import { DefaultGlobalStyles } from './common/theme/DefaultGlobalStyles';
import { Theme } from './common/theme/theme';
import { MobileHeader } from './features/Header/MobileHeader';
import { PcHeader } from './features/Header/PcHeader';
import { Home } from './features/Home/Home';
import { SearchList } from './features/Search/SearchList';
import { DetailIndex } from './features/Search/common/components/Detail/Index/DetailIndex';
import { RankIndex } from './features/Search/common/components/Rank/Index/RankIndex';
import { About } from './features/Static/About';
import { AppHistory } from './features/Static/AppHistory';
import { PrivacyPolicy } from './features/Static/PrivacyPolicy';

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
