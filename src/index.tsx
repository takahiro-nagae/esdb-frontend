import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core'
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Home } from './home/home';
import { Header } from './common/header';
import { Footer } from './common/footer';
import { About } from './static/about';
import { AppHistory } from './static/appHistory';
import { SearchList } from './search/searchList';
import { PrivacyPolicy } from './static/privacyPolicy';
import { RankIndex } from './search/rank/rankIndex';
import { DetailIndex } from './search/detail/detailIndex';
import { Theme } from './common/theme/theme';
import { DefaultGlobalStyles } from './common/theme/defaultGlobalStyles';
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById('root');
// @ts-ignore
const root = createRoot(rootElement);

root.render(
    <ThemeProvider theme={Theme}>
        <DefaultGlobalStyles/>
        <Router>
            <Header/>
            <Routes>
                <Route
                    element={<Home/>}
                    path="/"
                />
                <Route
                    element={<AppHistory/>}
                    path='history'
                />
                <Route
                    element={<About/>}
                    path="about"
                />
                <Route
                    element={<PrivacyPolicy/>}
                    path='privacyPolicy'
                />
                <Route
                    element={<SearchList isFreeSearch={false}/>}
                    path='detail'
                />
                <Route
                    element={<SearchList isFreeSearch={true}/>}
                    path='search'
                />
                <Route
                    element={<RankIndex/>}
                    path='rank/:rank'
                />
                <Route
                    element={<DetailIndex/>}
                    path='detail/:enchant_id'
                />
            </Routes>
            <Footer/>
        </Router>
    </ThemeProvider>,
);

reportWebVitals();
