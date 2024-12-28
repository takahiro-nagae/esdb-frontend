import { Card } from '@mui/material';

import { InfeedAd } from '../../../../../adsense/InfeedAd';

import styles from './Ad.module.css';
import { displayAmongAd } from './function/displayAd';

type AmongAdProps = {
  index: number;
};

export const AmongAd: React.FC<AmongAdProps> = ({ index }) => {
  if (displayAmongAd(index)) {
    // カードが描画されるためproduction以外はreturn null
    if (process.env.NODE_ENV !== 'production') {
      return null;
    }

    return (
      <Card className={styles.card}>
        <InfeedAd />
      </Card>
    );
  } else {
    return null;
  }
};
