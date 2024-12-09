import { Card } from '@material-ui/core';

import { InfeedAd } from '../../../../../adsense/InfeedAd';

import styles from './Ad.module.css';
import { displayLastAd } from './function/displayAd';

type LastInfeedAdProps = {
  index: number;
  dataLength: number;
};

export const LastInfeedAd: React.FC<LastInfeedAdProps> = ({
  index,
  dataLength,
}) => {
  if (displayLastAd(index, dataLength)) {
    // カードが描画されるためproduction以外はreturn null
    if (process.env.VITE_APP_ENV !== 'prod') {
      return null;
    }

    return (
      <Card className={styles.card} key={'lastSp'}>
        <InfeedAd />
      </Card>
    );
  } else {
    return null;
  }
};
