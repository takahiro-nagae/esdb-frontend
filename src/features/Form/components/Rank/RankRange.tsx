import { ToggleButton, ToggleButtonGroup } from '@mui/material';

import { useRankStore } from '../../store/useRankStore';

import styles from './../../common/style/common.module.css';
import { RANK_RANGE_ITEMS } from './const';

export const RankRange: React.FC = () => {
  const { range, setRange } = useRankStore();

  return (
    <ToggleButtonGroup
      className={styles.formContainer}
      fullWidth
      exclusive
      size='small'
      onChange={(_, newAlignment) => setRange(newAlignment)}
    >
      {RANK_RANGE_ITEMS.map(rankRangeItem => (
        <ToggleButton
          aria-label={rankRangeItem.label}
          className={
            rankRangeItem.value === range
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
