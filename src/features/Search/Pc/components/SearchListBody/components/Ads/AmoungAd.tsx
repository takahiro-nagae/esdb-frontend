import { TableCell, TableRow } from '@mui/material';

import styles from './Ad.module.css';
import { displayAmongAd } from './function/displayAd';

import { InfeedAd } from '@/adsense/InfeedAd';

type AmongAdProps = {
  index: number;
  isValue: boolean;
};

export const AmongAd: React.FC<AmongAdProps> = ({ index, isValue }) => {
  if (displayAmongAd(index)) {
    // カードが描画されるためproduction以外はreturn null
    if (process.env.NODE_ENV !== 'production') {
      return null;
    }

    return (
      <TableRow className={styles.tableContent} key={index}>
        <TableCell colSpan={isValue ? 8 : 7} className={styles.tableData}>
          <InfeedAd />
        </TableCell>
      </TableRow>
    );
  } else {
    return null;
  }
};
