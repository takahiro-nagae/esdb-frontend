import HistoryIcon from '@material-ui/icons/History';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import NotesIcon from '@material-ui/icons/Notes';
import { Bookmark } from '@mui/icons-material';
import { ReactElement } from 'react';

import styles from './MenuData.module.css';

type AppRowType = Partial<{
  url: string;
  icon: ReactElement;
  text: string;
}>;

export const AppMenuData: Array<AppRowType> = [
  {
    url: '/',
    icon: <HomeIcon className={styles.icon}></HomeIcon>,
    text: 'HOME',
  },
  {
    url: '/bookmark',
    icon: <Bookmark className={styles.icon}></Bookmark>,
    text: 'ブックマーク',
  },
  {
    url: '/history',
    icon: <HistoryIcon className={styles.icon}></HistoryIcon>,
    text: '更新履歴',
  },
  {
    url: '/about',
    icon: <InfoIcon className={styles.icon}></InfoIcon>,
    text: '当サイトについて',
  },
  {
    url: '/privacyPolicy',
    icon: <NotesIcon className={styles.icon}></NotesIcon>,
    text: 'プライバシーポリシー',
  },
];
