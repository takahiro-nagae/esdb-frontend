import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

import styles from './Rank.module.css';
import { RANK_HEADER_LABELS } from './const';
import { useRank } from './hooks/useRank';
import { DisplayWideAd } from '@/adsense/displayWideAd';

export type RankProps = {
  rank: string;
};

export const Rank: React.FC<RankProps> = ({ rank }) => {
  const { rankData } = useRank(rank);

  return (
    <>
      <p className={styles.description}>
        <span data-testid='rank-prefix'>ランク：</span>
        <span className={styles.rankResult} data-testid='rank'>
          {rankData.rank}
        </span>
      </p>
      <p className={styles.description} data-testid='rank-unit'>
        INT:200時 単位：%
      </p>
      <Table>
        <TableHead>
          <TableRow>
            {RANK_HEADER_LABELS.map(label => (
              <TableCell className={styles.header}>{label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rankData.data.map((row, index) => (
            <TableRow key={index} className={styles.row}>
              <TableCell className={styles.data}>{row.label}</TableCell>
              {row.values.map((cellData, cellIndex) => (
                <TableCell key={cellIndex} className={styles.data}>
                  {cellData}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <DisplayWideAd />
    </>
  );
};
