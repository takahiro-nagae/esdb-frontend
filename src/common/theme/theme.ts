import { createTheme } from '@mui/material';

/**
 * アプリケーションのデフォルトテーマ
 */
export const Theme = createTheme({
  palette: {
    primary: {
      main: '#007DFF',
      dark: '#1F2023',
      light: '#94c9f7',
    },
    mode: 'dark',
  },
});
