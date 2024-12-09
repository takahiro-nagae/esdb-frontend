import { Grid } from '@material-ui/core';

import { Effect } from './components/Effect/Effect';
import { EnchantName } from './components/EnchantName/EnchantName';
import { Position } from './components/Position/Position';
import { Rank } from './components/Rank/Rank';
import { SearchButton } from './components/SearchButton/SearchButton';
import { Target } from './components/Target/Target';

export const SearchForm: React.FC = () => {
  return (
    <>
      <EnchantName />
      <Effect />
      <Position />
      <Rank />
      <Target />
      <Grid container alignItems='center'>
        <Grid item xs={12}>
          <SearchButton />
        </Grid>
      </Grid>
    </>
  );
};
