import { ToggleButton, ToggleButtonGroup } from '@mui/material';

import styles from './../../common/style/common.module.css';
import { RANK_RANGE_ITEMS } from './const';

export type RankRangeProps = {
  rankRange: string;
  setRankRange: (E: string) => void;
};

export const RankRange: React.FC<RankRangeProps> = ({
  rankRange,
  setRankRange,
}) => {
  return (
    <ToggleButtonGroup
      className={styles.formContainer}
      fullWidth
      exclusive
      size='small'
      onChange={(_, newAlignment) => setRankRange(newAlignment)}
    >
      {RANK_RANGE_ITEMS.map(rankRangeItem => (
        <ToggleButton
          aria-label={rankRangeItem.label}
          className={
            rankRangeItem.value === rankRange
              ? styles.toggleButtonSelected
              : styles.toggleButton
          }
          key={rankRangeItem.value}
          value={rankRangeItem.value}
        >
          <span>{rankRangeItem.label}</span>
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
