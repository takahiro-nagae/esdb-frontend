import { MenuItem, TextField } from '@mui/material';

import styles from '../../common/style/common.module.css';
import { useRankStore } from '../../store/useRankStore';

export const RankDropdown: React.FC = () => {
  const { ranks, selected, setSelected } = useRankStore();

  return (
    <TextField
      className={styles.formContainer}
      defaultValue=''
      fullWidth
      id='rank'
      select
      variant='outlined'
      size='small'
      value={selected}
      onChange={e => setSelected(e.target.value)}
    >
      <MenuItem value=''>指定なし</MenuItem>
      {ranks.map(rank => (
        <MenuItem key={rank.rank} value={rank.rank}>
          {rank.rank}
        </MenuItem>
      ))}
    </TextField>
  );
};
