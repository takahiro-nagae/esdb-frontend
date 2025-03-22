import { TableCell, TableRow } from '@mui/material';

import styles from './Ad.module.css';

import { InfeedAd } from '@/adsense/InfeedAd';

type LastInfeedAdProps = {
  isValue: boolean;
};

export const LastInfeedAd: React.FC<LastInfeedAdProps> = ({ isValue }) => {
  // カードが描画されるためproduction以外はreturn null
  if (process.env.VITE_APP_ENV !== 'prod') {
    return null;
  }

  return (
    <TableRow className={styles.tableContent}>
      <TableCell colSpan={isValue ? 8 : 7} className={styles.tableData}>
        <InfeedAd />
      </TableCell>
    </TableRow>
  );
};
