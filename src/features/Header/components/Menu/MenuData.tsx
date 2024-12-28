import { Bookmark, Home, History, Info, Notes } from '@mui/icons-material';
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
    icon: <Home className={styles.icon}></Home>,
    text: 'HOME',
  },
  {
    url: '/bookmark',
    icon: <Bookmark className={styles.icon}></Bookmark>,
    text: 'ブックマーク',
  },
  {
    url: '/history',
    icon: <History className={styles.icon}></History>,
    text: '更新履歴',
  },
  {
    url: '/about',
    icon: <Info className={styles.icon}></Info>,
    text: '当サイトについて',
  },
  {
    url: '/privacyPolicy',
    icon: <Notes className={styles.icon}></Notes>,
    text: 'プライバシーポリシー',
  },
];
