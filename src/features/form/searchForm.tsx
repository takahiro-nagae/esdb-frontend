import { Grid } from '@material-ui/core';
import { Rank } from './components/Rank/Rank';
import { Target } from './components/Target/Target';
import { useSearchForm } from './hooks/useSearchForm';
import { EnchantName } from './components/EnchantName/EnchantName';
import { Effect } from './components/Effect/Effect';
import { Position } from './components/Position/Position';
import { SearchButton } from './components/SearchButton/SearchButton';

export const SearchForm: React.FC = () => {
  const { form, enchantName, position, effect, register, target, rank } =
    useSearchForm();

  return (
    <form onSubmit={form.handleSubmit}>
      <EnchantName {...enchantName} />
      <Effect {...effect} />
      <Position {...position} />
      <Rank {...rank} />
      <Target register={register} {...target} />
      <Grid container alignItems='center'>
        <Grid item xs={12}>
          <SearchButton />
        </Grid>
      </Grid>
    </form>
  );
};
