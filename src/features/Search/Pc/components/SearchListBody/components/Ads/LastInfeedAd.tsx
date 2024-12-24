import { TableCell, TableRow } from '@mui/material';

import styles from './Ad.module.css';

import { InfeedAd } from '@/adsense/InfeedAd';

type LastInfeedAdProps = {
  disp_val: number | undefined;
};

export const LastInfeedAd: React.FC<LastInfeedAdProps> = ({ disp_val }) => {
  // カードが描画されるためproduction以外はreturn null
  if (process.env.VITE_APP_ENV !== 'prod') {
    return null;
  }

  return (
    <TableRow className={styles.tableContent}>
      <TableCell colSpan={disp_val ? 8 : 7} className={styles.tableData}>
        <InfeedAd />
      </TableCell>
    </TableRow>
  );
};
