import { MenuItem, TextField } from '@material-ui/core';

import styles from '../../common/style/common.module.css';

import { FormRankType } from '@/repositories/form/_types';

export type RankDropdownProps = {
  rankList: Array<FormRankType>;
  selectedRank: string;
  setSelectedRank: (E: string) => void;
};

export const RankDropdown: React.FC<RankDropdownProps> = ({
  rankList,
  selectedRank,
  setSelectedRank,
}) => {
  return (
    <TextField
      className={styles.formContainer}
      defaultValue=''
      fullWidth
      id='rank'
      select
      variant='outlined'
      size='small'
      value={selectedRank}
      onChange={e => setSelectedRank(e.target.value)}
    >
      <MenuItem value=''>指定なし</MenuItem>
      {rankList.map(rank => (
        <MenuItem key={rank.rank} value={rank.rank}>
          {rank.rank}
        </MenuItem>
      ))}
    </TextField>
  );
};
