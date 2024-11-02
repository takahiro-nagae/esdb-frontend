import { Grid } from '@material-ui/core';

import { Effect } from './components/Effect/Effect';
import { EnchantName } from './components/EnchantName/EnchantName';
import { Position } from './components/Position/Position';
import { Rank } from './components/Rank/Rank';
import { SearchButton } from './components/SearchButton/SearchButton';
import { Target } from './components/Target/Target';
import { useSearchForm } from './hooks/useSearchForm';

export const SearchForm: React.FC = () => {
  const { handleSubmit, enchantName, position, effect, target, rank } =
    useSearchForm();

  return (
    <>
      <EnchantName {...enchantName} />
      <Effect {...effect} />
      <Position {...position} />
      <Rank {...rank} />
      <Target {...target} />
      <Grid container alignItems='center'>
        <Grid item xs={12}>
          <SearchButton handleSubmit={handleSubmit} />
        </Grid>
      </Grid>
    </>
  );
};
