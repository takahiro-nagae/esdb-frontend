/** @jsxImportSource @emotion/react */
import { Grid } from '@material-ui/core';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { Position } from './component/position';
import { Effect } from './component/effect';
import { Rank } from './component/rank';
import { Target } from './component/target';
import { searchBtn } from './style/searchFormStyle';
import { useSearchForm } from './hooks/useSearchForm';
import { EnchantName } from './component/EnchantName/EnchantName';
/**
 * 検索フォームの詳細コンポーネント
 * @returns SearchForm { JSX.Element }
 */
export const SearchForm = () => {
  const {
    rankRange,
    setRankRange,
    position,
    setPosition,
    handleSubmit,
    register,
    effectList,
    targetList,
    rankList,
  } = useSearchForm();

  return (
    <form onSubmit={handleSubmit}>
      <EnchantName register={register} />
      <Effect effectList={effectList} register={register} />
      <Position
        register={register}
        setPosition={setPosition}
        position={position}
      />
      <Rank
        rankList={rankList}
        rankRange={rankRange}
        register={register}
        setRankRange={setRankRange}
      />
      <Target register={register} targetList={targetList} />
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
