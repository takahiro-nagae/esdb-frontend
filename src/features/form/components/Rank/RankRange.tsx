import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { RANK_RANGE_ITEMS } from './const';
import styles from './../../common/style/common.module.css';

type RankRangeProps = {
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
      value={rankRange}
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
