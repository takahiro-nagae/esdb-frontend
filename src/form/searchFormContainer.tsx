/** サードパーティーライブラリ */
import { Box, Grid, Paper } from "@material-ui/core";

/** ローカルライブラリ */
import { FreeSearch } from "./component/freeSearch";
import { SearchForm } from "./searchForm";

/**
 * 検索フォームコンテナコンポーネント
 */
export const SearchFormContainer = (props: {mq: any, maxWidth: any}) => {
    return(
        <Box sx={{ mt: 3}}>
            <Grid container
                  justifyContent="center"
                  css={props.maxWidth}
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