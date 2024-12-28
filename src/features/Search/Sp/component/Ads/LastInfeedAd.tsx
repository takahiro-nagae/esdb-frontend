import { Card } from '@mui/material';

import { InfeedAd } from '../../../../../adsense/InfeedAd';

import styles from './Ad.module.css';

export const LastInfeedAd: React.FC = () => {
  // カードが描画されるためproduction以外はreturn null
  if (process.env.VITE_APP_ENV !== 'prod') {
    return null;
  }

  return (
    <Card className={styles.card}>
      <InfeedAd />
    </Card>
  );
};
