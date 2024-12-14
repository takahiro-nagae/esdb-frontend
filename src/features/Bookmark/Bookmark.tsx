import { Grid } from '@material-ui/core';

import { EnchantCard } from '../Search/Sp/component/EnchantCard/EnchantCard';

import { useBookmarkState } from '@/state/useBookmarkState';

export const Bookmark: React.FC = () => {
  const { enchants } = useBookmarkState();
  return (
    <Grid item xs={12}>
      {enchants.map(enchant => (
        <EnchantCard key={enchant.enchant_id} enchant={enchant} />
      ))}
    </Grid>
  );
};
