/** @jsxImportSource @emotion/react */
import { Grid } from '@material-ui/core';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { Rank } from './components/Rank/Rank';
import { Target } from './components/target';
import { searchBtn } from './style/searchFormStyle';
import { useSearchForm } from './hooks/useSearchForm';
import { EnchantName } from './components/EnchantName/EnchantName';
import { Effect } from './components/Effect/Effect';
import { Position } from './components/Position/Position';

/**
 * 検索フォームの詳細コンポーネント
 * @returns SearchForm { JSX.Element }
 */
export const SearchForm = () => {
  const { form, position, effect, register, target, rank } = useSearchForm();

  return (
    <form onSubmit={form.handleSubmit}>
      <EnchantName register={register} />
      <Effect {...effect} register={register} />
      <Position {...position} />
      <Rank {...rank} register={register} />
      <Target register={register} {...target} />
      <Grid container alignItems='center'>
        <Grid item xs={12}>
          <Button
            css={searchBtn}
            endIcon={<SearchIcon />}
            type='submit'
            variant='contained'
          >
            検索
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
