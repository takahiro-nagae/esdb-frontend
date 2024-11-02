import { TableCell, TableRow } from '@mui/material';

import styles from './Ad.module.css';
import { displayLastAd } from './function/displayAd';

import { InfeedAd } from '@/adsense/InfeedAd';

type LastInfeedAdProps = {
  index: number;
  dataLength: number;
  disp_val: number | undefined;
};

export const LastInfeedAd: React.FC<LastInfeedAdProps> = ({
  index,
  dataLength,
  disp_val,
}) => {
  if (displayLastAd(index, dataLength)) {
    // カードが描画されるためproduction以外はreturn null
    if (process.env.VITE_APP_ENV !== 'prod') {
      return null;
    }

    return (
      <TableRow className={styles.tableContent} key={'lastPc'}>
        <TableCell colSpan={disp_val ? 7 : 6} className={styles.tableData}>
          <InfeedAd />
        </TableCell>
      </TableRow>
    );
  } else {
    return null;
  }
};
