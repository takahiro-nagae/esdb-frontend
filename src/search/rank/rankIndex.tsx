/** 標準ライブラリ */
import { useParams } from "react-router-dom";

/** サードパーティーライブラリ」 */
import { Grid } from '@material-ui/core';
import Box from '@mui/material/Box';

/** ローカルライブラリ */
import { Rank } from "./rank";

/**
 *
 * @param props インデックス用のランク表示
 * @returns
 */
export const RankIndex = (props: any) => {
    const params = useParams();

    return(
        <Box sx={{ mt: 5, ml: 5}}>
            <Grid item xs={11} >
                <Rank rank={params.rank} />
            </Grid>
        </Box>
    )
}