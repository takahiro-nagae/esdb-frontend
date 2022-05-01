import { Grid, Paper } from "@material-ui/core";
import Box from '@mui/material/Box';
import { SearchForm } from "./searchForm";

/**
 * 検索フォームコンテナコンポーネント
 * @param props { any, string[] } TODO:any型を変更する
 * @returns SearchFormContainer { JSX.Element }
 */
export const SearchFormContainer = (props: {
    maxWidth: any,
    mq: string[]
}) => {
    return(
        <Box sx={{ mt: 3}}>
            <Grid
                container
                css={props.maxWidth}
                justifyContent="center"
            >
                <Grid item xs={11}>
                    <Paper>
                        <Box sx={{ p: 2}}>
                            <h3>検索条件</h3>
                            <Box sx={{ mx: 1, my: 4}}>
                                <SearchForm />
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};