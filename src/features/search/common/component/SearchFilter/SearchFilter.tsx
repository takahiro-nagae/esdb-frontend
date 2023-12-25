/* eslint @typescript-eslint/no-explicit-any: 0 */
/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { Grid } from "@material-ui/core";
import { GridSize } from "@material-ui/core/Grid/Grid";
import { useSearchFilter } from "./hooks/useSearchFilter";
import { freeSearchBoxStyle, freeSearchInputStyle } from "./style/SearchFilterStyle";

export const SearchFilter = (props: {
    xs: GridSize,
}) => {
    const [searchWord, setSearchWord]  = useState('');
    useSearchFilter(searchWord);

    return (
        <Grid item xs={props.xs} css={freeSearchBoxStyle}>
            <input css={freeSearchInputStyle}
                   placeholder='絞り込む'
                   value={searchWord}
                   data-testid='searchFilter'
                   onChange={(e) => setSearchWord(e.target.value)}/>
        </Grid>
    );
};